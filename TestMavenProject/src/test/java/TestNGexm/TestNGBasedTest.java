package TestNGexm;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TestNGBasedTest {
	
	static WebDriver driver;

	@BeforeMethod
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mdmam\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://ebay.com/");
	}

	@Test
	public void verifyTitle() {

		String title = driver.getTitle();
		String expTitle = "Electronics, Cars, Fashion, Collectibles & More | eBay";
		Assert.assertEquals(title, expTitle);
		//System.out.println(title);
		String url = driver.getCurrentUrl();
		String expUrl = "https://www.ebay.com/";
		Assert.assertEquals(url, expUrl);
		//System.out.println("url: "+ url);
	} 

	@Test(priority=2)
	public void verifyLogo() {
		boolean flag = driver.findElement(By.xpath("//a[@id='gh-la']")).isDisplayed();
		Assert.assertTrue(flag);
	}

	@AfterMethod
	public void TearDown() {
		driver.quit();
	}

}
