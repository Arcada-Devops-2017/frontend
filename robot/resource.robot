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

Check If Title Is Correct On Home Page
    Title Should Be    The best web store ever

Check If Text String Exists On Home Page
    Page Should Contain    it is super hyvä
    Page Should Contain    Sorry you cannot buy me but you can watch me
    Page Should Contain    Hello there
    Page Should Contain    test press now
    Page Should Contain    Home
    Page Should Contain    Products
    Page Should Contain    Sign Up
    Page Should Contain    Log In

Check If Buttons Is Working On Home Page
    Wait Until Element Contains    cta-button    BUY NOW
    Wait Until Element Contains    cta-button2    test press now
    Click Button    cta-button
    Click Button    cta-button2

Check If Menu Toggle Is Working On Home Page
    Wait Until Element Contains    menuToggle
    Click Button    menuToggle
