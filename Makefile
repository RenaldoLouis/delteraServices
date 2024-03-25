DATABASE_NAME = delterrademo

createdb:
	psql -c "CREATE DATABASE $(DATABASE_NAME);" || true

.PHONY: createdb