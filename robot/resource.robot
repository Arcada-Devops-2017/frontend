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
Open browser to home page
    Open Browser    ${HOME URL}

Check if title is correct
    Title Should Be    The best web store ever

Check home page for important strings
    Page Should Contain    BEER OF THE MONTH
    Page Should Contain    Home
    Page Should Contain    Products
    Page Should Contain    Sign Up
    Page Should Contain    Log In

Check if element menu toggle exist
    Click Element      xpath=.//*[@id='menuToggle']

Check if all links in menu bar works
    Click Element    css=#menuToggle>input
    Sleep    2
    Click Element    xpath=.//*[@id='signup']/li
    Sleep    2
    Go Back
    Click Element    xpath=.//*[@id='products']/li
    Sleep    2
    Go Back
    Click Element    xpath=.//*[@id='login']/li
    Sleep    2
    Go Back
    Click Element    xpath=.//*[@id='index']/li
    Sleep    2
