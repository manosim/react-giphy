#!/usr/bin/env bash
BRANCH=gh-pags
TARGET_REPO=ekonstantinidis/react-giphy.git
OUTPUT_FOLDER=demo

echo -e "Testing travis-encrypt"
echo -e "$VARNAME"

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

    echo -e "Remove previous version of website\n"

    if [ "$TRAVIS" == "true" ]; then
        git config --global user.email "manos@iamemmanouil.com"
        git config --global user.name "ekonstantinidis"
    fi

    # Using token clone gh-pages branch
    git clone --quiet --branch=$BRANCH https://${GH_TOKEN}@github.com/$TARGET_REPO built_website > /dev/null

    # Go into directory and copy data we're interested in to that directory
    cd built_website
    rsync -rv --exclude=.git  ../$OUTPUT_FOLDER/* .

    # Remove everything from the "master" branch
    git rm -rf .
    git clean -f -d
    git commit -m "Rel 1.5 - Empty the branch before pushing($TRAVIS_BUILD_NUMBER)"
    git push -fq origin $BRANCH > /dev/null
    cd ..

    echo -e "Starting deployment on Github Pages\n"

    # Using token clone gh-pages branch
    git clone --quiet --branch=$BRANCH https://${GH_TOKEN}@github.com/$TARGET_REPO built_website > /dev/null

    # Go into directory and copy data we're interested in to that directory
    cd built_website
    rsync -rv --exclude=.git  ../$OUTPUT_FOLDER/* .

    # Add, commit and push files
    git add -f .
    git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to Github Pages"
    git push -fq origin $BRANCH > /dev/null

    echo -e "Deploy completed\n"
fi