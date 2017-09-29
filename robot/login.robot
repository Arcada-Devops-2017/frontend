*** Settings ***
Library           Selenium2Library
Resource          resource.robot
Suite Setup       Open URL    ${USERINFO URL}

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
    Sleep    3
    Go To    ${USERINFO URL}
