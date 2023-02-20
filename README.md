Marimba 2.0 2.0 (aliases: Marimba Web 2.0, The Other Marimba Web) is the second attempt at revitalizing the University of Waterloo Concert Band Club's proprietary administration program. The primary frameworks used will be React and Django in an attempt to appease the CSC overlords and to make Greyson learn Python.

# Getting Started
Table of Contents
- Requirements for all platforms
- The Noob Installation Guide (if you don't know what a Python virtual environment is then you should read this)
	- Creating a virtual environment
	- Using Visual Studio Code
- Using Git not like a git (work in progress)

## Requirements for all platforms
1. [Python 3](https://www.python.org/downloads/) - minimum 3.7 since support ends June 2023
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/) - it is fine if you have other preferred IDEs, but any issues you come across in using them are your responsibility to figure out and fix
4. [Git](https://git-scm.com/downloads) - depending on your preferences, you may also want to download a [GUI Client](https://git-scm.com/downloads/guis) 

## The Noob Installation Guide
### Creating a virtual environment
Things get really messy with Python and it's very annoying to deal with when you have multiple projects using multiple Python versions with conflicting packages on your computer. Cute little anecdote: in attempting to solve an issue related to setting up this codebase, I decided to uninstall the other two Python versions on my computer and get rid of Anaconda -- and it still didn't work!

Virtual environments are necessary as they keep all the packages and other dependencies of your programs separate from each other. I'd recommend creating a venv just for this project. 

To create an virtual environment, start up the command prompt and navigate to the **parent directory** of your cloned repo.

For Mac and Unix: `python3 -m venv env`
For Windows: `python -m venv env`

`env` can be any name you choose. This is the name of your virtual environment. There are other ways to create virtual environments that you're free to explore (such as pipenv) but they gave me such a terrible headache so use them at your own risk.

Now, we have to activate the virtual environment in our command prompt. This indicates that any changes we make will only take place within the virtual environment (such as installing any required packages).

For Mac and Unix: `source env/bin/activate`
For Windows: `.\env\Scripts\activate` 

You should see a little `(env)` at the beginning of the next line in the command prompt. This tells us that the virtual environment has been activated. If you ever want to deactivate the virtual environment then just enter `deactivate` (don't do this now, though).

With the activated virtual environment up and running, it's time to install Django!
```
pip install django
```
My system automatically chose Django version 3.2.18, which is the latest version compatible with Python 3.7. If you have a different version, that's fine. I'm going to hope it won't cause any issues down the line. Once this is done, you can safely `deactivate` the virtual environment.

### Using Visual Studio Code
#### Choosing an interpreter
Whew! You sure did a lot of work. Unfortunately, none of it's worth putting on a resume yet. But you're almost ready to start contributing to Marimba 2.0 2.0! Once you download VSCode, open up the folder **the-other-marimba-web**. You may be prompted to install some extensions, such as the Python extension. You should definitely install that one.

When the repo is open in VSCode, type in **Ctrl + Shift + P**. This will open up a dialog box with numerous options. There should be something called `Python: Select Interpreter`, click on that. You'll see a drop-down menu of available interpreters. 

We want to set the interpreter to our virtual environment. Click on `+ Enter interpreter path...` found at the top of the drop-down menu. Then click `Find...` and navigate to the virtual environment (if you followed my instructions ealier, it will be in the **parent directory** of the cloned repo). Then navigate to `Scripts` and choose the file name `Python`. Confirm this selection (on Windows, you'll see a 'Select Intepreter' button on the bottom-right of the window). Your interpreter has now been chosen.

#### Opening the terminal
Similar to the command prompt on Windows and Mac, VSCode has a built in terminal to run commands at the current directory's location. At the top bar, click on `Terminal`, then `New Terminal`. You'll see a box pop up at the bottom of your screen that represents the terminal. You'll even notice that it automatically activates the virtual environment (with the little `(env)` at the beginning of the line)!

#### Installing the node modules
For us to start building React components, we need access to "node modules". Think of them like libraries and packages in other languages. After this step, you'll have a folder within the "frontend" folder called "node_modules". I chose not to commit this to the repo now because at my last co-op this wasn't commited and so I'm just following what they did. It's a pretty large folder anyway.

Navigate to **frontend** folder and type in the terminal: `npm install`. 

It'll take a few minutes but soon enough you'll have a node_modules folder.

#### Running the program
Unlike "normal" programs, there isn't a main file or function for you to run to see how the app works. Instead, we take steps to start the server on our own machine, then navigate to our localhost to view the website. 

We have a React and Djano part of our webapp, and right now they're not really connected to each other. So there are two ways to run the webapp, and they'll give you different results. 

To run the Django part, type in the terminal:
```
python manage.py runserver
```
Then navigate to http://127.0.0.1:8000/ (or http://localhost:8000) and see the beautiful work!

For the React part, navigate to the **frontend** folder, then type in the terminal:
```
npm start
```
Then naviagte to http://localhost:3000 to see your work. 

As we develop the code further, this procedure may change and this section will be updated with better instructions. 

### Using Git not like a git
My preferred way of using Git is:
```
push -u origin main --force
```
Which is obviously not great when you're working in a team. For this, I'll be referring to this reference to explain how this will work. If you've done any kind of software co-op, you've likely seen this. I'm just making it super explicit because I've had jobs with the jankiest version control system and it was a nightmare.

The **main** branch is basically never to be touched. This will hold the "official" Marimba 2.0 2.0 that we can show off to interested band members. We're all going to be working off of the **develop** branch, and I'll likely have a separate branch for each of us to play around with.

Have meaningful commit messages. Commit early and often. When we're finished working on a feature, we'll merge our own branch back into development. When we're ready to release to the main branch, we'll do that sparingly. This workflow may not be needed given the current size and state of the project, but we'll see how it goes.

If you want more info about version control philosophy, check this out: https://nvie.com/posts/a-successful-git-branching-model/