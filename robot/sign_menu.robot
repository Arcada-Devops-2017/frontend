*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Before Menu Bar Test    ${SIGNUP URL}
Suite Teardown        Close Browser
Test Template   Check If Menu Links Are Working

*** Test Cases ***           LINK
Check Home Link              ${MENU INDEX}
Check Products Link          ${MENU PRODUCTS}
Check Login Link             ${MENU LOGIN}
Check Sign Up Link           ${MENU SIGN}

*** Keywords ***
Check If Menu Links Are Working
    [Arguments]            ${link}
    Click Element          ${link}
    Go Back
