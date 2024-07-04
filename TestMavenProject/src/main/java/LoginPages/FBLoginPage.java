package LoginPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FBLoginPage {

	static WebDriver driver;
	
	//Locators
	private By emailInputLocator = By.name("email");
	private By passwordInputLocator = By.name("pass");

	private By loginButtonLocator = By.name("login");

	///Constructor
	public FBLoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// methods/ Actions
	public void enterEmail(String email) {
		WebElement emailInput = driver.findElement(emailInputLocator);
		emailInput.sendKeys(email);
	}

	public void enterPassword(String password) {
		WebElement passwordInput = driver.findElement(passwordInputLocator);
		passwordInput.sendKeys(password);
	}

	public void clickLoginButton() {
		WebElement loginButton = driver.findElement(loginButtonLocator);
		loginButton.click();
	}

	public void login(String email, String password) {
		enterEmail(email);
		enterPassword(password);
		clickLoginButton();
	}

}
