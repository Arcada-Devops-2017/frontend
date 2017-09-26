*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Before Initiation
Test Teardown   Close Browser

*** Test Cases ***

Valid Title
    Title Should Be         ${TITLE}

Check Strings On Home Page
    Page Should Contain    BEER OF THE MONTH
    Page Should Contain    Home
    Page Should Contain    Products
    Page Should Contain    Sign Up
    Page Should Contain    Log In

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}

Check All Links On Home Page
    Click Element    ${LINK MENU}
    Sleep    1
    Click Element    ${MENU LOGIN}
    Go Back
    Click Element    ${MENU PRODUCTS}
    Go Back
    Click Element    ${MENU SIGN}
    Go Back
    Click Element    ${MENU INDEX}
