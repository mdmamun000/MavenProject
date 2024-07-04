package stepImplementation;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import LoginPages.FBLoginPage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FBLoginPageStepDef {

	WebDriver driver;
	
	FBLoginPage fbloginPage;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\mdmam\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");

		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	
		 fbloginPage = new FBLoginPage(driver);
	}
	
	@Given("User is in FB Login Page")
	public void user_is_in_FB_Login_Page() {
		driver.get("https://facebook.com/");
	}
	
	@After
	public void TearDown() {
		if (driver!=null){
			driver.close();
		}
	}

	@When("User enters {string}")
	public void User_enters(String username) {
		fbloginPage.enterEmail(username);	    
	}

	@And("user enters {string}")
	public void user_enters(String password) {
		fbloginPage.enterPassword(password);	    
	}

	@Then("user in FB Home Page")
	public void user_in_FB_Home_Page() {
		fbloginPage.clickLoginButton();	    
	}
}
