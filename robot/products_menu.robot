*** Settings ***
Library           Selenium2Library
Resource          resource.robot

Suite Setup           Before Menu Bar Test    ${PRODUCTS URL}
Suite Teardown        Close Browser
Test Template         Check If Menu Links Are Working

*** Test Cases ***           LINK
Check Home Link              xpath=.//*[@id='menu']/a[1]/li
Check Sign Up Link           xpath=.//*[@id='menu']/a[3]/li
Check Login Link             xpath=.//*[@id='menu']/a[4]/li
Check Products Link          xpath=.//*[@id='menu']/a[2]/li


*** Keywords ***
Check If Menu Links Are Working
    [Arguments]            ${link}
    Click Element          ${link}
    Go Back
