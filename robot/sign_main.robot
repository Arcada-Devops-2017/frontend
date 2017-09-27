*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Open URL        ${SIGNUP URL}
Suite Teardown        Close Browser

*** Test Cases ***

Valid Title
    Title Should Be         ${TITLE}

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}
