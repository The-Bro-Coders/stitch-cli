#!/bin/bash

# This script installs the Snugger CLI globally on your system.
REPO_URL="https://github.com/The-Finding-Labs/snugger.git" 
INSTALL_DIR="$HOME/.snugger-cli" 
BRANCH="main"  

# Check for dependencies
if ! command -v git &> /dev/null; then
  echo "Error: git is not installed. Please install git and try again."
  exit 1
fi

if ! command -v npm &> /dev/null; then
  echo "Error: npm is not installed. Please install npm and try again."
  exit 1
fi

# Clone the repository
echo "Cloning Snugger CLI repository..."
git clone -b $BRANCH $REPO_URL $INSTALL_DIR

# Check if clone was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to clone the repository."
  exit 1
fi

cd $INSTALL_DIR


echo "Installing dependencies..."
npm install

echo "Building the CLI..."
npm run build


echo "Linking the CLI globally..."
npm link

echo "Snugger CLI has been installed successfully!"
echo "You can now use the 'snugger' command."

