sqlite3 ../index.db < ./db/scaffoldDB.sql
cat ./db/dump.sql | sqlite3 ../index.db
npx prisma generate --schema=./src/db/schemas/schema.prisma