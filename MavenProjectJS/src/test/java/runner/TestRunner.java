package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"./features/loginpage.feature"},
         plugin = {"pretty","html:target/cucmber-reports.html",
         "json:target/cucumber.json"},
		 glue = "/stepImplementation"
		 )
//monochrome = true, publish=true)
public class TestRunner {

}
