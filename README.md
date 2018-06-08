# Website for Clements JETS

#### Development Setup
1. Install build tools
```
    npm i -g gulp
    npm i -g nodemon
```
Gulp is our task runner, nodemon is a tool that restarts the server when server code changes.
2. Open two terminals. In the first one, run this which starts the server:
```
    npm start:server
```
In the other terminal, run this which starts building assets to HTML/CSS
```
    npm start:watch-assets
```
3. Go to browser and visit ```localhost:3000```
