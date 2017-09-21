*** Settings ***
Library     Selenium2Library

*** Variables ***
${SERVER}         http://localhost:8000
${BROWSER}        firefox
${HOME URL}       ${SERVER}/index.html
${LOGIN URL}      ${SERVER}/login.html
${PRODUCTS URL}   ${SERVER}/products.html
${SIGNUP URL}     ${SERVER}/signup.html
${PRODUCTS URL}   ${SERVER}/products.html



*** Keywords ***
Open Browser To Home Page
    Open Browser   ${HOME URL}
    Maximize Browser Window

Check If Contents Exist In Home Page
    Title Should Be    The best web store ever
    Page Should Contain    it is super hyvä
    Page Should Contain    Sorry you cannot buy me but you can watch me
    Page Should Contain    Hello there
    Page Should Contain    test press now

Check If Buttons Is Working
    Click Button    cta-button
    Click Button    cta-button2

Check If Menu Toggle Is Working
    Click Button    menuToggle

Login Page Should Be Open
    Location Should Be    ${LOGIN URL}
    Title Should Be    the best web store ever
