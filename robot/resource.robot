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
    Page Should Contain    Home
    Page Should Contain    Products
    Page Should Contain    Sign Up
    Page Should Contain    Log In

Check If Menu Toggle Is Working On Home Page
    Click Element    menuToggle
    Wait Until Element Is Visible    Products
    Click Element    link=Products
