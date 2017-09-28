*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Go To        ${PRODUCTS URL}
Test Template         Check If Strings Exist

*** Test Cases ***                       STRING

*** Keywords ***
Check If Strings Exist
    [Arguments]            ${string}
    Page Should Contain    ${string}
