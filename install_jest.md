This guidance assumes you have NVM (the Node version manager) installed - if not, head to this page to install it first.

# Setup our environment to use node latest version
$ nvm use node

# Create the project directory
$ mkdir my-project
$ cd my-project

# Initialise the NPM project (this will create a file package.json)
$ npm init -y

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ npm install -g jest

# Run our tests
$ jest