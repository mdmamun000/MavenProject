$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/LoginTest.feature");
formatter.feature({
  "name": "Login Functionality for OpenCart E-commerce Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Unsuccessful login with invalid or empty credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have entered invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I clicked on the login button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see an error message indicating \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "error_message"
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "123456mmA$#",
        ""
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "123456mmA##",
        ""
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "",
        "Warning: No match for E-Mail address and/or Password."
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "weioew",
        "Warning: No match for E-Mail address and/or Password."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the OpenCart Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_am_on_the_open_cart_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful login with invalid or empty credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have entered invalid \"saintjohn.usc@gmail.com\" and \"123456mmA$#\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_have_entered_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetDef.i_clicked_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an error message indicating \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetDef.i_should_see_an_error_message_indicating(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the OpenCart Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_am_on_the_open_cart_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful login with invalid or empty credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have entered invalid \"saintjohn.usc@gmail.com\" and \"123456mmA##\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_have_entered_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetDef.i_clicked_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an error message indicating \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetDef.i_should_see_an_error_message_indicating(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the OpenCart Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_am_on_the_open_cart_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful login with invalid or empty credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have entered invalid \"saintjohn.usc@gmail.com\" and \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_have_entered_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetDef.i_clicked_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an error message indicating \"Warning: No match for E-Mail address and/or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetDef.i_should_see_an_error_message_indicating(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the OpenCart Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_am_on_the_open_cart_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Unsuccessful login with invalid or empty credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have entered invalid \"saintjohn.usc@gmail.com\" and \"weioew\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetDef.i_have_entered_invalid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetDef.i_clicked_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see an error message indicating \"Warning: No match for E-Mail address and/or Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetDef.i_should_see_an_error_message_indicating(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});