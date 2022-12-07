# Artsi

The purpose of this project is to create an easy entry point into the creation of drawings by providing lesson videos and a drawing spaces that allows users to follow along.

The project uses React.js to display the front-end


There are websites like Coursera and other educational websites but none are focused on the visual arts. Artsi provides an efficient and personalized experience with the benefit of infinite organized resources and human interaction on one platform.

![image](https://user-images.githubusercontent.com/68880159/206302997-79476fb8-d9d7-431c-8652-57bd18d22274.png)

Aamir: Front-end Development
Raul Higareda: Front-end development
Om: Back-end development
Kendrit: Back-end Development


## Running Instructions:

1. git clone: ```https://github.com/CS222-UIUC/course-project-group-32.git```

2. Open the directory when you have git-cloned the directory. First, we will need to get a local database set up. To do this, steps are:

A. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) to create and interact with the database.

B. In Workbench, set up a "New Connection" and the host and port as default, and the username and password to whatever you like.

C. Now, we will need to import the database schema for the website. Take the following code and paste it into an empty file, and save it as a ```.sql``` file on your computer:

```
CREATE TABLE Users (username VARCHAR(16) PRIMARY KEY, firstname VARCHAR(20), lastname VARCHAR(20), password VARCHAR(12))

CREATE TABLE Lessons (lessonID INT PRIMARY KEY AUTOINCREMENT, Title VARCHAR(100), Description VARCHAR(500), link VARCHAR(150), author VARCHAR(255))
                      
CREATE TABLE LikedBy (username VARCHAR(16), lessonID INT, FOREIGN KEY (username) REFERENCES Users(username), 
                      FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID))
```

D. Go to your empty initial database on Workbench. Under "Server", click on "Data Import". In the following page, select the "Import from Self-contained File" option under "Import Options", and select the path to the ```.sql``` file that you saved on your laptop.

Congrats! You have a local database setup for Artsi!

Now, on to running the website:

Go to the directory where you cloned the project from Github. 

In the file structure, you will notice that the project is divided into the backend (```artsi-backend```) and front-end (```artsi-website```).

1. In one terminal, navigate to ```artsi-backend``` and run ```npm i``, followed by ```npm start```. The backend server should be running.

2. In another terminal, navigate to ```artsi-website``` and run ```npm i```, followed by ```npm start```. The front end should launch in a browser, ready to use!



