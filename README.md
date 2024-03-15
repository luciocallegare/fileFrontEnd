# File system front-end

This is the frontend that displays the parsed information from the backend api developed for this challenge

It gets the information about files from the api https://echo-serv.tbxnet.com/v1/secret/files parsed through
a backend developed in this project.

The files are displayed in table form indicating the file name, and the information about the lines of each file,
a number, a string of letters and a hex code.

# Run this app

To run this app locally run ```npm start```

# Filter files

To get only the information of a specific file, click on one of the names of the file in the table.
It will only display information related to that file.

# IMPORTANT

In order for this frontend to work, it is important that the backend API is running in the background.
API backend repo: https://github.com/luciocallegare/fileAPI