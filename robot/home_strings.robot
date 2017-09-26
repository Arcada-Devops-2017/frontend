*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Before Initiation
Test Teardown   Close Browser
Test Template   Check If Strings Exist

*** Test Cases ***                STRING
Contains BEER OF THE MONTH        BEER OF THE MONTH

*** Keywords ***
Check If Strings Exist
    [Arguments]            ${string}
    Page Should Contain    ${string}
