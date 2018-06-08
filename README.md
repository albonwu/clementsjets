# Website for Clements JETS

#### Development Setup
0. Create a file called ```.env``` in the root of your project folder. Copy paste the below content in:
```
    DROPBOX=https://www.dropbox.com/sh/cz2yv2klsv091d3/AACPRZYFUfpraGmWG5UOhJ03a?dl=0
    EVENT_PREP_SHEET=https://docs.google.com/document/d/1yDZ1M3Qo9NWpTo1zSc2EMrBzNgeANkrRYmFZLkexRfM/edit?usp=sharing
    HASH=$2a$08$mQhW0utHaDYytF6ebu3Ie.7UcjejYZIs7hLQAlVGhiG48EIvmaYbu
    TEST_LINK_ARCHIVES=https://drive.google.com/open?id=0BxJxeYCvliIBRklENWxySWhqcUk
```
1. Install build tools
```
    npm i -g gulp
    npm i -g nodemon
```
Gulp is our task runner, nodemon is a tool that restarts the server when server code changes.
2. Open two terminals. In the first one, run this which starts the server:
```
    npm run start:server
```
In the other terminal, run this which starts building assets to HTML/CSS
```
    npm run start:watch-assets
```
3. Go to browser and visit ```localhost:3000```
