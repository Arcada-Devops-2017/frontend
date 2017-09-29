*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Go To        ${SIGNUP URL}

*** Test Cases ***
Register Is Successful
    Register User Demo    John    Doe    demo@gmail.com    test
Cancel The Registration
    Cancel Registration


*** Keywords ***
Register User Demo
    [Arguments]         ${firstname}          ${lastname}         ${email}          ${password}
    Input Text    xpath=html/body/form/div/input[1]          ${firstname}
    Input Text    xpath=html/body/form/div/input[2]          ${lastname}
    Input Text    xpath=html/body/form/div/input[3]          ${email}
    Input Text    xpath=html/body/form/div/input[4]          ${password}

Cancel Registration
    Click Element    xpath=html/body/form/div/div/button[2]
