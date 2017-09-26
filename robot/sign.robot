*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Open Sign Up Page
Test Teardown   Close Browser

*** Test Cases ***

Valid Title
    Title Should Be         ${TITLE}

Check Strings On Sign Up
    Page Should Contain    FIRST NAME
    Page Should Contain    LAST NAME
    Page Should Contain    EMAIL
    Page Should Contain    PASSWORD
    Page Should Contain    Cancel
    Page Should Contain    Sign Up
    Page Should Contain    WELCOME OUR NEW CUSTOMER
    Page Should Contain    Home
    Page Should Contain    Products
    Page Should Contain    Sign Up
    Page Should Contain    Log In

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}

Check All Links On Sign Up
    Click Element    ${LINK MENU}
    Sleep    1
    Click Element    ${MENU LOGIN}
    Go Back
    Click Element    ${MENU PRODUCTS}
    Go Back
    Click Element    ${MENU INDEX}
    Go Back
    Click Element    ${MENU SIGN}
