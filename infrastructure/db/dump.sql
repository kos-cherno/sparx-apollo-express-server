PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Conference(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255)
);
INSERT INTO Conference VALUES(1,'Eastern Conference');
INSERT INTO Conference VALUES(2,'Western Conference');
CREATE TABLE Team(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255),
  conferenceId INTEGER,
  FOREIGN KEY(conferenceId) REFERENCES Conference(id)
);
INSERT INTO Team VALUES(1,'Chicago Bulls',1);
INSERT INTO Team VALUES(2,'Miami Heat',1);
INSERT INTO Team VALUES(3,'Memphis Grizzlies',2);
INSERT INTO Team VALUES(4,'Golden State Warriors',2);
INSERT INTO Team VALUES(5,'Phoenix Suns',2);
INSERT INTO Team VALUES(6,'Boston Celtics',1);
CREATE TABLE Player(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  teamId INTEGER,
  FOREIGN KEY(teamId) REFERENCES Team(id)
);
INSERT INTO Player VALUES(1,'Stephen','Curry',4);
INSERT INTO Player VALUES(2,'Klay','Thompson',4);
INSERT INTO Player VALUES(3,'Draymond','Green',4);
INSERT INTO Player VALUES(4,'James','Wiseman',4);
INSERT INTO Player VALUES(5,'Andrew','Wiggins',4);
INSERT INTO Player VALUES(6,'DeMar','DeRozan',1);
INSERT INTO Player VALUES(7,'Zach','LaVine',1);
INSERT INTO Player VALUES(8,'Lonzo','Ball',1);
INSERT INTO Player VALUES(9,'Alex','Caruso',1);
INSERT INTO Player VALUES(10,'Nikola','Vucevic',1);
INSERT INTO Player VALUES(11,'Ja','Morant',3);
INSERT INTO Player VALUES(12,'Steven','Adams',3);
INSERT INTO Player VALUES(13,'Dillon','Brooks',3);
INSERT INTO Player VALUES(14,'Jaren','Jackson Jr.',3);
INSERT INTO Player VALUES(15,'Brandon','Clarke',3);
INSERT INTO Player VALUES(16,'Jimmy','Butler',2);
INSERT INTO Player VALUES(17,'Tyler','Herro',2);
INSERT INTO Player VALUES(18,'Kyle','Lowry',2);
INSERT INTO Player VALUES(19,'Bem','Adebayo',2);
INSERT INTO Player VALUES(20,'P.J.','Tucker',2);
INSERT INTO Player VALUES(21,'Devin','Booker',5);
INSERT INTO Player VALUES(22,'Chris','Paul',5);
CREATE TABLE Coach(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  teamId INTEGER,
  FOREIGN KEY(teamId) REFERENCES Team(id)
);
INSERT INTO Coach VALUES(1,'Billy','Donovan',1);
INSERT INTO Coach VALUES(2,'Erik','Spoelstra',2);
INSERT INTO Coach VALUES(3,'Taylor','Jenkins',3);
INSERT INTO Coach VALUES(4,'Steve','Kerr',4);
COMMIT;