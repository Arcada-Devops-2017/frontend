*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Before Initiation
Test Teardown   Close Browser

*** Variables ***
${LINK MENU}          css=#menuToggle>input
${MENU SIGN}          xpath=.//*[@id='signup']/li
${MENU PRODUCTS}      xpath=.//*[@id='products']/li
${MENU LOGIN}         xpath=.//*[@id='login']/li
${MENU INDEX}         xpath=.//*[@id='index']/li
${TITLE}              The best web store ever

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
