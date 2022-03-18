sqlite3 ./src/index.db < ./infrastructure/db/scaffoldDB.sql
cat ./infrastructure/db/dump.sql | sqlite3 ./src/index.db