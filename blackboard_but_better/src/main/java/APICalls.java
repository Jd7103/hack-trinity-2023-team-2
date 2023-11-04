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

    }
}
