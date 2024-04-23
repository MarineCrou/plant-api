# Welcome to Plants!

## Introduction

This project aimed to enable us to better understand the use of React, APIs, and Routers by creating an interactive multi-page website. I chose a public plant API because of my love for plants, hoping to create a somewhat useful website for learning more about our dear living friends. Originally planned as a 2-day team project, I found myself working solo, due to being under the weather. Despite this setback and having only a day to work, I managed to meet the basic requirements: deploying a multi-page site, fetching data from the public API [trefle.io](https://trefle.io), and using Bulma for styling. This website is now live on Netlify, with no installation requirements to explore its features.
To check out the page follow : https://plant-search-site.netlify.app/

## Installation Instructions

To get started with this project locally, you will need Node.js and npm installed. Here are the steps to set up the project:

1. Clone the repository to your local machine.
2. Navigate to the root of the project directory.
3. Run `npm install` to install all dependencies.
4. Execute `npm run dev` to start the development server.
5. Open your browser and go to `http://localhost:5174/` to view the app.

## Features

With Plants, you can:

1. **Search for Plants**: On the homepage, you will be able to search for any plant and get back a card displaying its common name, scientific name, and family species.
2. **Discover New Plants**: The second page, `/Plants`, showcases 20 different plants for exploration. A button at the bottom allows you to load the next 20 plants, broadening your plant knowledge.

## Technology Stack

- **React**: Used for building the interactive elements of the website.
- **React Router**: Manages navigation between different pages.
- **Bulma**: A modern CSS framework used for styling and creating a responsive design.
- **Vite**: Provides a faster and leaner development environment for modern web projects.
- **HTML**: Basic structure is provided through an index file, with content mostly integrated within React components.

## Design and Planning

Despite the time constraints, the project kicked off with a comprehensive design and planning phase. This included wireframing the website's layout, ensuring the API's functionality (notably addressing CORS issues), and planning the data extraction based on the available time. Pseudo-coding each component helped in breaking down the tasks and facilitated the coding process. Emphasis was placed on creating a responsive design with Bulma, catering to desktops, mobiles, and tablets.

- **Wireframe** ![plants WireFrame](./src/styles/img/readme%20-%20wireframe.png)

- **Pseudo-coding** ![plants sudo coding](./src/styles/img/readme%20-%20sudocoding.png)

## Implementing the MVP

By the end of the development period (1 day), a minimum viable product was ready. Unfortunately, time constraints prevented the addition of several desired features. Future updates may include these enhancements 🤞.

- **MVP Home Page** ![Plants MVP Home Page](./src/styles/img/readme%20-%20home%20page.png)

- **MVP Page 2** ![Plants MVP Page 2](./src/styles/img/readme-mpv%20page%202.png)

## Main Challenges

1. Health Challenges: Falling ill during the project reduced my effective working time from two days to just one, compressing my development schedule significantly.

2. Displaying Search Results: Integrating the search functionality proved difficult. It took about half a day to ensure that only the first relevant result was displayed for each plant search. This was particularly challenging due to the ambiguity in plant names, with names like "evergreen" and "palm tree" returning over 20 results each.

3. Styling with Bulma: Matching the application's design with my wireframe using the Bulma framework was initially challenging. However, as I became more acquainted with Bulma's features, the process accelerated.

4. Dynamic Content Loading: A persistent issue has been implementing a dynamic load for the plants page to show 20 new plants each time the "add plants" button is clicked. Initially, due to time constraints, I resorted to duplicating the plants component and hardcoding the URLs for pagination. I implemented navigation buttons at the bottom of each page, allowing users to move to the next batch of plants or return to the previous one. Future iterations will focus on making this feature dynamic to reduce redundancy and improve the user experience.
