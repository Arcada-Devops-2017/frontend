*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Go To        ${ORDERS URL}
Test Template         Check If Strings Exist

*** Test Cases ***                             STRING
Contains Your orders, dear customer            Your orders, dear customer

*** Keywords ***
Check If Strings Exist
    [Arguments]            ${string}
    Page Should Contain    ${string}
