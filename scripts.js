import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class PortfolioScraper {
    public static void main(String[] args) {
        String url = "https://your-domain.com/portfolio.html"; // replace with your actual file or URL
        
        try {
            Document doc = Jsoup.connect(url)
                                .userAgent("Mozilla/5.0")
                                .get();

            // About section
            Element about = doc.getElementById("about");
            System.out.println("=== About ===");
            if (about != null) {
                System.out.println(about.text());
            }

            // Services section
            Element services = doc.getElementById("services");
            System.out.println("\n=== Services ===");
            if (services != null) {
                Elements items = services.select(".services li");
                for (Element item : items) {
                    System.out.println("- " + item.select("h3").text() + ": " + item.select("p").text());
                }
            }

            // Portfolio section
            Element portfolio = doc.getElementById("portfolio");
            System.out.println("\n=== Portfolio ===");
            if (portfolio != null) {
                Elements items = portfolio.select(".portfolio-items .item");
                for (Element item : items) {
                    System.out.println("* " + item.text());
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
