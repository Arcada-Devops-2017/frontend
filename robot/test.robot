*** Settings ***
Resource          resource.robot


Test Setup      Open Browser To Home Page
Test Teardown   Close Browser

*** Test Cases ***
Check content on home page
    Check If Contents Exist In Home Page
