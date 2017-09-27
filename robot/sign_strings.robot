*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Open URL        ${SIGNUP URL}
Suite Teardown        Close Browser
Test Template         Check If Strings Exist

*** Test Cases ***                       STRING
Contains FIRST NAME                      FIRST NAME
Contains LAST NAME                       LAST NAME
Contains EMAIL                           EMAIL
Contains PASSWORD                        PASSWORD
Contains Cancel                          Cancel
Contains Sign Up                         Sign Up
Contains WELCOME OUR NEW CUSTOMER        WELCOME OUR NEW CUSTOMER

*** Keywords ***
Check If Strings Exist
    [Arguments]            ${string}
    Page Should Contain    ${string}
