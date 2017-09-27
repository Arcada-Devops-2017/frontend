*** Settings ***
Library           Selenium2Library
Resource          resource.robot


*** Test Cases ***
Open A Page
    Open URL    ${HOME URL}

Valid Title
    Title Should Be         ${TITLE}

Toggle Menu Bar (ON/OFF)
    Click Element      ${LINK MENU}
    Click Element      ${LINK MENU}
    Close Browser
