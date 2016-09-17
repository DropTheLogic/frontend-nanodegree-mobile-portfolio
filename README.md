# Website Performance Optimization Portfolio Project

## About
This [Udacity](https://www.udacity.com) project turns a poorly-performing website into something much more performant, while using build tools to streamline production and further improve project efficiency.

## Install
Once the project is forked (or downloaded), navigate to the project's root folder using your terminal program. Install dependencies by entering:
```
npm install
```
This project uses the [Gulp](https://www.npmjs.com/package/gulp) build tool to produce production-level code from source files. Once dependencies are installed, distribution code can then be compiled simply by entering the following in terminal:
```
gulp
```
The production code will be located in the "dist" directory.

## Project Structure
```
[Root Folder]
|- src (source code)
|- dist
    |- css
    |- img
    |- index.html
    |- js
    |- views (pizza app)
        |- css
        |- images
        |- js
```

## Optimizations Made
A number of fixes were made to bring the website up in performance:
* Embedded styles from style.css in the head of index.html, removing a round-trip
* Updated print.css to use the media metadata
* Removed web fonts, removing another round-trip dependency
* Added async tag to Google analytics and performance scripts, to reduce render-blocking
* Reduced size of all images, especially for pizzeria.jpg which was massive
* Reduced total instances of background pizzas on pizza page
* Removed forced synchronous layout from pizza scroll animation
* Removed forced synchronous layout from pizza resize animation
* Used gulp build tools to minify CSS and JavaScript files, and concatenate them where appropriate
* Build tools include:
	* [gulp](https://www.npmjs.com/package/gulp)
	* [gulp-useref](https://www.npmjs.com/package/gulp-useref)
	* [gulpif](https://www.npmjs.com/package/gulp-if)
	* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
	* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
	* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
	* [del](https://www.npmjs.com/package/del)
	* [run-sequence](https://www.npmjs.com/package/run-sequence)
