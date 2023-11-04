import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.util.Base64;

import static spark.Spark.*;

public class APICalls {

    public static void main (String[] args) {

        port(4567);

        get("/getExams", (req, res)->{
            ExamCrawler crawler = new ExamCrawler(
                    req.queryParams("code"),
                    req.queryParams("module"),
                    req.queryParams("user"),
                    req.queryParams("pass"));

            return crawler.init();
        });

        get("/getPDF", (req, res)->{
            String url = req.queryParams("url");

            String user = req.queryParams("user");
            String pass = req.queryParams("pass");

            String auth = user + ":" + pass;
            auth = Base64.getEncoder().encodeToString(auth.getBytes());

            return Jsoup.connect(url)
                    .ignoreContentType(true)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36")
                    .header("authorization", auth)
                    .method(Connection.Method.GET)
                    .execute();
        });

    }
}
