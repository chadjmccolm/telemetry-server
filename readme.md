# Telemetry App
This Node.JS web application serves as a full-stack application for UVic Hybrid's 2019 Telemetry System. It features a MQTT client to subscribe to a locally hosted MQTT server, an Express Server to deliver a webpage for the data to be displayed on, a socket.io connection to push data to that page, and a mongodb client to send data to a locally hosted mongodb server. 

## Pre-requisites
You need to have the following components installed on your computer before any configuration happens: 
 - node.js
 - mongodb (with the bin folder added to path)

## Setup
These instructions will be based on a windows installation
1. Make a data directory for your mongo server (I chose to make mine in the repository folder)
2. Open command prompt and type `mongod.exe --dbpath "C:\Users\Chad McColm\Documents\Dev\telemetry-server\data"` replacing `"C:\Users\Chad McColm\Documents\Dev\telemetry-server\data"` with the data folder location you made in step 1
3. Unzip mosquitto.zip (contains all dependencies etc.) to a location on your hard drive and add the folder to path
4. Start the mosquitto server from windows command prompt with `mosquitto.exe`
    - if you wish to see the incoming data `mosquitto_sub.exe -t "hybrid/#"` will show you a stream in the command line
5. Open a new command prompt and navigate to the repository folder
6. Type `npm install` to install all the dependencies of this node.js project
7. Type `npm start` to start the node server
    - if data is incoming it will display it once per `console_timeout` which is set in index.js

## Viewing Data Live
Once the data stream has started you can view data live. From the local computer navigate to `localhost:3000` in a web browser. You will need your local ip address for devices on the same network to connect. To find it open command line and type `ipconfig` and note your IPv4 Address (for example: 192.168.1.118). Devices on the network can navigate to `192.168.1.118:3000` in a web browser to see the data stream. 

## Viewing Logged Data
There are many ways to see the data that has been logged in the mongo database depending on how you want to deal with the data after.

### Export mongo data to CSV (comma separated values)
Exporting the data to csv is an easy way to view it in other programs like Excel. To filter the data to a time period you want, you can use a filter query on the time field of the data. 

To export all the data from the database open command prompt and navigate to the output folder you want and enter `mongoexport -d telemetry -c snapshots --type=csv --fields time,hybrid/engine/temperature -o output.csv` replacing the output file with the location of your choice and the fields with the fields you want. Make sure there are no spaces in the fields list. 

If you want to export JSON use: `mongoexport -d telemetry -c snapshots -o output.json`.

To specify a time you need to know the unix time (in milliseconds) of the start and end. I use this online service to determine those https://www.epochconverter.com/ because it let's me input time zone info. Then you add that query to your data export like so `mongoexport -d telemetry -c snapshots --type=csv --fields time,hybrid/engine/temperature -o outputfilter.csv --query "{time: {$gte: 1529971200000, $lte: 1529971500000}}"`. This is data between 5PM and 5:05PM on July 25, 2018.

## Simulating Incoming Data
If you would like to test the server you can run MQTT Data Sender.py which simulates data from a few signals from the car just sweepign across a range to demonstrate the server is functional. 
