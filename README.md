# toronto-bike-data-backend
> This project was created on Novemeber 27th and is super basic right now but over the course of the next 2 months will be built into something more robust and detailed so this README will change

> This project takes bike data from the City of Toronto's Open Data catalog (http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=7807e03bb8d1e310VgnVCM10000071d60f89RCRD#B) and serves it as an API
> For now, this project has been setup to make a connection to a localhost Postgres DB and has been setup with two GET calls to return all the data from the bike_counts table 
or return data for a specfic set of data from the bike_counts table
> This project has also been setup with the multi-transport async logging library winston (https://github.com/winstonjs/winston)
Which is setup to log all data to the terminal window and to a log file
> The code is currently using callbacks but in the future will use promises from bluebird


> There is a frontend to this project that can be found here: https://github.com/JayTeeHub/toronto-bike-data-frontend

> If you have any questions or feedback feel free to reachout to me at jordanturnergo@gmail.com
