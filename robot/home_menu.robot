*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Test Setup      Before Menu Bar Test    ${HOME URL}
Test Teardown   Close Browser
Test Template   Check If Menu Links Are Working

*** Test Cases ***           LINK
Check Home Link              ${MENU INDEX}
Check Sign Up Link           ${MENU SIGN}
Check Products Link          ${MENU PRODUCTS}
Check Login Link             ${MENU LOGIN}


*** Keywords ***
Check If Menu Links Are Working
    [Arguments]            ${link}
    Click Element          ${link}
