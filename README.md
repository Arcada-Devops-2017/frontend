# Front-end

Run UI through various test environments before deployment.

### Project assignments

* Github changes triggers Travis-CI (OK)
* Configure build settings .travis.yml. (OK)
* Install a web server. (OK)
* Run robot test against the web server. (IN PROGRESS)
* Deploy to server. (OK)
* Design the required HTML. (IN PROGRESS)
* Write JS to connect with backend. (IN PROGRESS)

## Getting Started

### Robot framework installations

Selenium2 library, Selenium 3.5.0 and Robot Framework have to be install.
Install with following command.

```
pip install -r requirements.txt
```

### Create a simple HTTP server

Following command will create a server at current directory.

```
python3 -m http.server
```

### Execute robot test

Runs the test configuration in respective folders.

```
pybot robot
pybot test-sample
```

### Travis configurations

The file .travis.yml determined the build settings that's run through Travis CI.
To be able to use, the user must enable github repository on [Travis-CI](https://travis-ci.org/),
which require admin rights.

Travis usage cases:
* Build configuration.
* Continous intergration for automated testing.
* Run robot test

Look in .travis.yml for more information.

## Materials

### Tools
* Travis CI
* JQUERY
* HTML / CSS
* Javascript
* Ajax
* Robot Framework
* Github

### Links

* [Robot Framework User Guide](http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html) - The manual
* [Robot Demo](https://bitbucket.org/robotframework/webdemo) - Robot framework demo
* [Travis CI Youtube Tutorial](https://www.youtube.com/watch?v=FEXY1ZP-sBs) - Basic tutorial for Travis CI
* [Github Commands](https://github.com/joshnh/Git-Commands) - Github terminal commands
