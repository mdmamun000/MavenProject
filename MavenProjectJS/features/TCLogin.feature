Feature: Test Login Functionality

Scenario Outline: Check successful login with valid credentials
Given Browser is open
And user is on Login page
When user enters <username> and <password>
And user click on login button
Then user is navigated to the home page

Examples:
|username| password|
|Md |  123456mmA@  | 
|John | 12345asd   |