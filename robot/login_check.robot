*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Go To    ${USERINFO URL}

*** Test Cases ***
Check If It's The Right Link
    Location Should Be    ${USERINFO URL}

Check If Login Works
    Login Function    test@gmail.com    random

*** Keywords ***
Login Function
    [Arguments]         ${username}         ${password}
    Click Element    xpath=html/body/div[2]
    Sleep    3
    Input Text    xpath=.//*[@id='id01']/form/div[1]/input[2]    ${password}
    Input Text    xpath=.//*[@id='id01']/form/div[1]/input[1]    ${username}
    Click Element    xpath=.//*[@id='id01']/form/div[1]/button
