CREATE TABLE Users (username VARCHAR(16) PRIMARY KEY, firstname VARCHAR(20), lastname VARCHAR(20), password VARCHAR(12))

CREATE TABLE Lessons (lessonID INT PRIMARY KEY AUTOINCREMENT, Title VARCHAR(100), Description VARCHAR(500),link VARCHAR(150))
                      
CREATE TABLE LikedBy (username VARCHAR(16), lessonID INT, FOREIGN KEY (username) REFERENCES Users(username), 
                      FOREIGN KEY (lessonID) REFERENCES Lessons(lessonID))
                     
 