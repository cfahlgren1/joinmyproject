# JoinMyProject

An application for students and experienced engineers alike to work on interesting projects in their field of expertise to gain experience and work on a team.

![](https://i.ibb.co/10Tmm41/Screen-Shot-2021-04-11-at-12-26-57-PM.png)

## Inspiration
A student can go to an excellent university and learn all the skills they need for their industry. Still, they are often placed in a bit of a pickle once they graduate. To get a job they want, companies almost always want experience, but as a fresh graduate, it can feel impossible to get the experience they need. Our website tackles this problem, leveraging the increasingly connected world around us.

## What it does
Let's say you are new to React JS and want to start learning. On our website, joinmyproject, you can search for a project at your skill level and become a collaborator. This way, the project creator can get some help, while you get some experience. It's almost like a micro-internship that helps you compete for full fledged jobs and internships.

## How we built it
To build JoinMyProject, we built the backend in Python / Django with an SQLite database. The backend Django API serves the database models in JSON format for the React.js front end. The backend is hosted on DigitalOcean in a docker container.

## Challenges we ran into
Some challenges we ran into were generating a TLS certificate on the DigitalOcean for the front end. Thus we were only able to get the backend site working fully in a digital ocean pod. The frontend can be run anywhere such as on your desktop. 

## Accomplishments that we're proud of
We're proud of using Docker containers for the backend and creating a cool UI in React for the front end.

## What we learned
"Prior to this project, I had little to no experience with any form of web development, but with a lot of help from Caleb, I've been able to learn a lot! So much that I started thinking about my own website!" - Chris

"For this project, I helped solidify more of an understanding of containerized applications, databases, as well as developing lean APIs." - Caleb

## What's next for JoinMyProject
A verification process, search, chat and user accounts