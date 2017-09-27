*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Open URL        ${PRODUCTS URL}
Suite Teardown        Close Browser
Test Template         Check If Strings Exist

*** Test Cases ***                       STRING
Contains Här kommer produkter            Här kommer produkter

*** Keywords ***
Check If Strings Exist
    [Arguments]            ${string}
    Page Should Contain    ${string}
