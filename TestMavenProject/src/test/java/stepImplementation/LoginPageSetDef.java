package stepImplementation;

import java.util.concurrent.TimeUnit;

import org.junit.BeforeClass;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import LoginPages.LoginPage;
import io.cucumber.java.en.Given;
//import cucumber.api.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import io.cucumber.java.Before;
import io.cucumber.java.After;
public class LoginPageSetDef {

	//private WebDriver driver;
	//private LoginPage loginPage;
	 WebDriver driver;
	 LoginPage loginPage;

//	@Before	
//	public void setup() {
//		//WebDriverManager.chromedriver().setup();
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mdmam\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
//
//		driver = new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
//	}
//	
//	@After
//	public void tearDown() {
//		if(driver!=null) {
//			driver.quit();
//		}
//	}

	@Given("I am on the OpenCart Login Page")
	public void i_am_on_the_open_cart_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mdmam\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	//}

	//	loginPage = new LoginPage(driver);
		driver.get("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

		//loginPage = new LoginPage(driver);
	}

	@Given("I have entered invalid {string} and {string}")
	public void i_have_entered_invalid_and(String username, String password) {
		loginPage.enterEmail(username);
		loginPage.enterPassword(password);
	}

	@When("I clicked on the login button")
	public void i_clicked_on_the_login_button() {
		loginPage.clickLoginButton();

	}

	@Then("I should see an error message indicating {string}")
	public void i_should_see_an_error_message_indicating(String errorMessage) {
		Assert.assertEquals(driver.findElement(By.cssSelector(".alert-danger")).isDisplayed(), true);
	}

	@When("I click on the \"Forgotten Password\" link")
	public void i_click_on_theforgotten_password_link() {
		loginPage.checkForgotPwdLink();

	} 

	@Then("I should be redirected to the possword reset page")
	public void i_should_be_redirected_to_the_possword_reset_page() {
		Assert.assertTrue(LoginPage.getForgotPwdPageUrl().contains("account/forgotten"));

	}

}