## Introduction

This little stylesheet reverts new Bootstrap 3 button styles to the old ones, including `.btn-inverse` again.

The `.btn-primary` style is based on the [Bootstrap 3 theme](http://getbootstrap.com/examples/theme/), but a `.btn-old-primary` was included with the old shiny blue primary button.

They are compatible with the new Bootstrap 3 buttons styles and have the new padding, to fit with other form controls.

Disabled, focused and active styles are supported, as well as `.btn-lg`, `.btn-sm`, `.btn-xs` and `.btn-block`.

## How to use

Include one of the files located in the css folder (bootstrap-buttons.css or bootstrap-buttons.min.css) in your Bootstrap 3 project after bootstrap stylesheets to get the old styled buttons.

## How to build

The building process has been automated by using [Grunt](http://gruntjs.com/). Take a look at its [documentation](http://gruntjs.com/getting-started) for more information.

The automation script just compiles the SASS stylesheets, creating a normal and a minified CSS stylesheets in the css directory.

It requires [compass](http://compass-style.org/) to properly work.