*** Settings ***
Library     Selenium2Library

*** Variables ***
${URL}          http://localhost:8000/index.html
${BROWSER}        firefox

*** Keywords ***
Open Browser to application page
    Open Browser   ${URL}

Check for Hello Testing in content
    Page Should Contain     Hello testing
