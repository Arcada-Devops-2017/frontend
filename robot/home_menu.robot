*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Before Menu Bar Test    ${HOME URL}
Test Template         Check If Menu Links Are Working

*** Test Cases ***           LINK
Check Sign Up Link           ${MENU SIGN}
Check Products Link          ${MENU PRODUCTS}
Check Login Link             ${MENU LOGIN}
Check Home Link              ${MENU INDEX}

*** Keywords ***
Check If Menu Links Are Working
    [Arguments]            ${link}
    Click Element          ${link}
    Go Back
