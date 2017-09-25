*** Settings ***
Resource          resource.robot


Test Setup      Open browser to home page
Test Teardown   Close Browser

*** Test Cases ***
Check if home page contains all important strings
    Check home page for important strings

Check if the title is correct.
    Check if title is correct

Check if menu is clickable.
    Click on menu
