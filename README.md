# General Assembly WDI Project 4: Capstone

[Guidebox]

Fork/Clone Repo

NPM Install dependencies

NPM Run Server to spin up database

Enjoy!

Link to deployed Application
https://mmunier44.github.io/guidebox-front/#/

Link to deployed Heroku Back End
https://still-fortress-56094.herokuapp.com/

Link to React Github Repo
https://github.com/mmunier44/guidebox-front

### List of Technologies Used: Mongodnb, Express, React & Node.js

### Thought Process and Entity Relationship Diagrams

For my capstone General Assembly project I focused on creating a web application that had actual functionality beyond your regular crud app.

While browsing around the interwebs for project ideas, I had a moment of thought about current tv guide schedule applications and looked at them.

One of the top google hits for multiple network fall broadcast debuts was a link to a simple calendar page that just simply listed networks and tv show names.

I looked around for 3rd party API's that aggregated network shows in a good format and found out that there really were not any that had any functionality.

Then I stumbled upon GuideBox a new startup with an API still in private beta that did all of what I was looking for, ease universal search and discovery of all video content all in one destination.

I emailed their dev team explaining that I was a web dev immersive student and asked for student access to their closed beta.

Within a couple days one of their dev's reached out to me and offered me a free 30 day access to their API and some great words of encouragement about starting up my web development career, and I was off!

Using GuideBox as an inspiration I used the MERN stack as an introduction to the world of React and was hooked after creating my first functional component.

GuideBox ERD and Resources
MVP + Version  2
[ERD] https://i.imgur.com/OLSnAmi.png

Version 3
[ERD] https://i.imgur.com/IR24SN0.png

## API

### videos

| Verb   | URI Pattern   | Controller#Action |
|:-------|:------------- |:------------------|
| GET    | `/videos`     | `videos#index`    |
| GET    | `/videos/:id` | `videos#show`     |
| POST   | `/videos`     | `videos#create`   |
| PATCH  | `/videos/:id` | `videos#update`   |
| DELETE | `/videos/:id` | `videos#destroy`  |

For the MVP version I wanted a database with just 1 relationship join, users and videos.

For version 2, I wanted the user to be able to upload a video to a cloud storage facility and then be able to login to any device and remote access/download that video.

Then the user would be able to set up a personal landing page with tiled video's that would all be playable from different sources on one landing page.

For version 3, I wanted to integrate the network and scheduling information from GuideBox API and create a personalized tv watching page with active links to ongoing network websites.

Working with Mongo/Exress was great and keeping everything in javascript made navigating through the project data sources a breeze.

### Developer Evolution Goals
Upload
3rd party API integration
