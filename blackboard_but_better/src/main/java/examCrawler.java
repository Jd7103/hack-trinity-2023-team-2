import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.io.FileUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.jsoup.nodes.Element;

import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Type;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

public class ExamCrawler implements Runnable{

    private String moduleCode = null;
    private String moduleName = null;

    public static HashMap pdfMap = new HashMap();

    private String auth = null;

    private String user = null;

    private String pass = null;

    public ExamCrawler(String moduleCode, String moduleName, String user, String pass) {
        this.moduleCode = moduleCode;
        this.moduleName = moduleName;
        this.user = user;
        this.pass = pass;

        String authString = user + ":" + pass;
        this.auth = Base64.getEncoder().encodeToString(authString.getBytes());
    }

    public void annual() throws IOException {

        Document annual = Jsoup.connect("https://www.tcd.ie/academicregistry/exams/past-papers/annual/")
                .header("authorization", "Basic " + this.auth)
                .get();

        Elements years = annual.select("ul[class*=invis] > li > a[href]");

        for (Element li : years)  {
            Thread year = new Thread(new ExamCrawler(this.moduleCode,this.moduleCode,this.user,this.pass), li.attr("abs:href"));
            year.start();
        }
    }

    public void getPDF() throws IOException {
        Document page = Jsoup.connect(Thread.currentThread().getName())
                .header("authorization", "Basic " + this.auth)
                .get();

        String year = "";
        String capturedName = "";

        Elements pdfs = page.select("tbody > tr:has(td > a[href])");

        String heading = page.select("h2[class*=second]").text();
        StringBuilder yearParse = new StringBuilder();

        if (heading.length() != 0) {
            yearParse.append(heading, heading.length() - 9, heading.length() - 5);
            year = yearParse.toString();
        }

        for (Element tr : pdfs) {
            try {capturedName = tr.select("td").get(1).text(); }
            catch(Exception e) {}

            if (tr.selectFirst("td").text().toLowerCase().contains(moduleCode) || moduleName.equalsIgnoreCase(capturedName))
            pdfMap.put(year + "-" + tr.selectFirst("td").text(), tr.selectFirst("td > a[href]").attr("abs:href"));
        }
    }

    /*
    public void getAllPDF() throws IOException {
        Document page = Jsoup.connect(Thread.currentThread().getName())
                .header("authorization", "Basic " + this.auth)
                .get();

        Elements pdfs = page.select("tbody > tr:has(td > a[href])");

        for (Element tr : pdfs) {
            String url = tr.selectFirst("td > a[href]").attr("abs:href");
            pdfMap.put(tr.selectFirst("td").text(), url);
        }
    }
     */

    public String init() throws IOException {

        annual();

        while (Thread.activeCount() > 15) {}

        Gson gson = new Gson();
        Type typeObject = new TypeToken<HashMap>() {}.getType();
        String gsonPDFs = gson.toJson(pdfMap, typeObject);

        return gsonPDFs;
    }

    @Override
    public void run() {
        try {
            getPDF();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
