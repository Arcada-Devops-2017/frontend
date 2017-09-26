*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Before Initiation
Test Teardown   Close Browser

*** Test Cases ***

Valid Title
    Title Should Be         ${TITLE}

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}
