*** Settings ***
Resource          resource.robot


Test Setup      Open Browser To Home Page
Test Teardown   Close Browser

*** Test Cases ***
Check all text string exists on home page.
    Check If Text String Exists On Home Page

Check if the title is correct.
    Check If Title Is Correct On Home Page

Check if menu is toggable.
    Check If Menu Toggle Is Working On Home Page

Check if links inside menu is clickable
    Check If Links Are Working

Check if links inside menu is clickable 2
    Check If Links Are Working 2

Check if links inside menu is clickable 3
    Check If Links Are Working 3
