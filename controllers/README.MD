# controllers
Any js files in this folder will automatically be registered as a controller by app.js and have its route set as `/[filename]`

index.js is a special case in that its route will be set to /

This behaviour can be changed in `initControllers()`
