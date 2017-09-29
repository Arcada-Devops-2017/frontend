*** Settings ***
Library           Selenium2Library
Resource          resource.robot
Suite Setup       Go To    ${USERINFO URL}

*** Test Cases ***

Location Check
    Location Should Be    ${USERINFO URL}

Login Check
    Delete All Cookies
    Click Element    css=.signin-button
    Sleep    3
    Input Text    xpath=.//*[@id='id01']/div/div[1]/input[1]    frontend@gmail.com
    Input Text    xpath=.//*[@id='id01']/div/div[1]/input[2]    demo
    Click Element    xpath=.//*[@id='loginbtn']
    Choose Ok On Next Confirmation
    Confirm Action
    Sleep    3
    Go To    ${USERINFO URL}
    Sleep    3

Check If Username Is Correct
    Check If Strings Exist    xpath=.//*[@id='userinfo']/p[3]    frontend@gmail.com

Check If Last Name Is Correct
    Check If Strings Exist    xpath=.//*[@id='userinfo']/p[2]    member

Check If First Name Is Correct
    Check If Strings Exist    xpath=.//*[@id='userinfo']/p[1]    team

*** Keywords ***
Check If Strings Exist
    [Arguments]               ${path}       ${string}
    Element Text Should Be    ${path}       ${string}
