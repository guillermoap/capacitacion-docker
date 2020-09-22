#!/usr/bin/env bash

# Read arguments passed to the script.
if [ -z "$1" ]; then
 ENVIRONMENT='development'
else
 ENVIRONMENT="$1"
fi

echo ""
echo "Migrating for environment: $ENVIRONMENT"
echo ""

echo " -> Step 1/2: Compiling migration scripts."
echo ""
for filename in ./src/db/migrations/*.ts; do
 yarn tsc -t es2017 --module CommonJS --outDir ./build-migrations/db/migrations/ $filename
done
echo ""
echo " -> Compilation completed."
echo ""

echo ""
echo " -> Step 2/2: Starting migration."
echo ""
npx ts-node ./node_modules/.bin/sequelize db:migrate --env $ENVIRONMENT
echo ""
echo " -> Migration completed."
echo ""


