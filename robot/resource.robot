*** Settings ***
Library     Selenium2Library

*** Variables ***
${SERVER}         http://localhost:8000
${BROWSER}        firefox
${HOME URL}       ${SERVER}/index.html
${LOGIN URL}      ${SERVER}/login.html
${PRODUCTS URL}   ${SERVER}/products.html
${SIGNUP URL}     ${SERVER}/signin.html
${PRODUCTS URL}   ${SERVER}/products.html
${LINK MENU}          css=#menuToggle>input
${MENU SIGN}          xpath=.//*[@id='signup']/li
${MENU PRODUCTS}      xpath=.//*[@id='products']/li
${MENU LOGIN}         xpath=.//*[@id='login']/li
${MENU INDEX}         xpath=.//*[@id='index']/li
${TITLE}              The best web store ever


*** Keywords ***
Before Initiation
    Open Browser    ${HOME URL}

Open Sign Up Page
    Open Browser    ${SIGNUP URL}

Before Menu Bar Test
    [Arguments]         ${webpage}
    Open Browser        ${webpage}
    Click Element       ${LINK MENU}
    Sleep    1
