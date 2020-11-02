FROM mongo
COPY init.json /init.json
CMD mongoimport --host mongodb --db store --collection message --type json --file /init.json --jsonArray