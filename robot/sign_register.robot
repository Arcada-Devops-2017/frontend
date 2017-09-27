*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Open URL    ${SIGNUP URL}
Test Teardown   Close Browser

*** Test Cases ***
Register Is Successful
    Register User Demo    John    Doe    demo@gmail.com    test
Cancel The Registration
    Cancel Registration


*** Keywords ***
Register User Demo
    [Arguments]         ${firstname}          ${lastname}         ${email}          ${password}
    Input Text    xpath=html/body/div[2]/div[3]/input[1]          ${firstname}
    Input Text    xpath=html/body/div[2]/div[3]/input[2]          ${lastname}
    Input Text    xpath=html/body/div[2]/div[3]/input[3]          ${email}
    Input Text    xpath=html/body/div[2]/div[3]/input[4]          ${password}

Cancel Registration
    Click Element    xpath=html/body/div[2]/div[3]/div/button[1]
