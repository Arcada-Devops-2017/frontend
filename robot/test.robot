*** Settings ***
Resource          resource.robot


Test Setup      Open Browser to home page
Test Teardown   Close Browser
*** Test Cases ***

Test string
    Home Page Should Be Open
