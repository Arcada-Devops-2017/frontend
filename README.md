# Front-end

Instructions is written here.

### Explanation

Before robot test will work you will have to install Selenium2 library,
Selenium 3.5.0 and Robot framework which can be run through requirements.txt file.

```
pip install -r requirements.txt
```

Create a simple webserver through python3 to host our html files.

```
python3 -m http.server
```

Run the robot test against the folder with robot files.

```
pybot robot
pybot test-sample
```

Simple explanation about travis file:
- build configuration (installations etc).
- continous intergration for automated testing.
- used to create web server to test html against robot.

Look through the .travis.yml for better understanding.

### Learning material

http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#test-data-syntax
https://bitbucket.org/robotframework/webdemo
https://www.youtube.com/watch?v=FEXY1ZP-sBs
