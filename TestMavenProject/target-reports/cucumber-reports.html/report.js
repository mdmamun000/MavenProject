$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/FBLogin.feature");
formatter.feature({
  "name": "Login verification in FB",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the login functionality in FB",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is in FB Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user in FB Home Page",
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
        "password"
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "ee"
      ]
    },
    {
      "cells": [
        "saintjohn.usc@gmail.com",
        "Fatimaruja518"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the login functionality in FB",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in FB Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_is_in_FB_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"saintjohn.usc@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "FBLoginPageStepDef.User_enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"ee\"",
  "keyword": "And "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in FB Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_in_FB_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the login functionality in FB",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in FB Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_is_in_FB_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"saintjohn.usc@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "FBLoginPageStepDef.User_enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Fatimaruja518\"",
  "keyword": "And "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_enters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in FB Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "FBLoginPageStepDef.user_in_FB_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});