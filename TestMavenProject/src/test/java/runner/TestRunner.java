package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"./features/FBLogin.feature"},
		plugin = {"pretty","html:target-reports/cucumber-reports.html",
		"json:target/cucumber.json"},
		glue = "/stepImplementation" 
		//monochrome = true,
		//dryRun = false
		)
public class TestRunner {

}
