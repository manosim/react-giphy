React Giphy [![Build Status](https://travis-ci.org/ekonstantinidis/react-giphy.svg?branch=master)](https://travis-ci.org/ekonstantinidis/react-giphy)
================

> A React component displaying awesome gifs from [Giphy.com](http://www.giphy.com/).

## Installation

    npm install --save react-giphy


### [Demo](https://ekonstantinidis.github.io/react-giphy)


## Usage

##### Random Gif
Display a random gif. Surprise!

    <ReactGiphy />

##### Using a tag
Use tags like 'cat' or 'llama'.

    <ReactGiphy tag='llama' />

##### Search for gifs
Just search for aaanything you like.

    <ReactGiphy search='game of thrones' />


## Development
Install `http-server` from npm, run it and go to http://127.0.0.1:8080/

    npm install -g http-server
    npm run serve

In another tab:

    npm run watch