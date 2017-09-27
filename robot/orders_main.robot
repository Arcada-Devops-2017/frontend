*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup      Go To    ${ORDERS URL}

*** Test Cases ***

Valid Title
    Title Should Be         ${TITLE}

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}
