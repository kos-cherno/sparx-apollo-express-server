/* Create the Conference table */
CREATE TABLE IF NOT EXISTS Conference(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL UNIQUE
);

/* Create the Team table */
CREATE TABLE IF NOT EXISTS Team(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL UNIQUE,
  conferenceId INTEGER,
  FOREIGN KEY(conferenceId) REFERENCES Conference(id)
);

/* Create the Player table */
CREATE TABLE IF NOT EXISTS Player(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  teamId INTEGER,
  FOREIGN KEY(teamId) REFERENCES Team(id)
);

/* Create the Coach table */
CREATE TABLE IF NOT EXISTS Coach(
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  teamId INTEGER,
  FOREIGN KEY(teamId) REFERENCES Team(id)
);

CREATE UNIQUE INDEX "Conference_name_key" ON "Conference"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_teamId_key" ON "Coach"("teamId");
