# Welcome to Plants!

## Introduction

This project aimed to enable us to better understand the use of React, APIs, and Routers by creating an interactive multi-page website. I chose a public plant API because of my love for plants, hoping to create a somewhat useful website for learning more about our dear living friends. Originally planned as a 2-day team project, I found myself working solo due to being under the weather. Despite this setback and having only a day to work, I managed to meet the basic requirements: deploying a multi-page site, fetching data from the public API [trefle.io](https://trefle.io), and using Bulma for styling. This website is now live on Netlify, with no installation requirements to explore its features.

## Features

With Plants, you can:

1. **Search for Plants**: On the homepage, you will be able to search for any plant and get back a card displaying its common name, scientific name, and family species.
2. **Discover New Plants**: The second page, `/Plants`, showcases 20 different plants for exploration. A button at the bottom allows you to load the next 20 plants, broadening your plant knowledge.

## Technology Stack

The website utilizes React for its interactive elements and leverages React Router for navigation between pages. The CSS framework Bulma was chosen for its design capabilities, marking my second experience with it. The development process also involved using Vite for efficient app loading and a basic HTML index file for structure. Most of the HTML content is integrated within React components, adhering to best practices.

## Design and Planning

Despite the time constraints, the project kicked off with a comprehensive design and planning phase. This included wireframing the website's layout, ensuring the API's functionality (notably addressing CORS issues), and planning the data extraction based on the available time. Pseudo-coding each component helped in breaking down the tasks and facilitated the coding process. Emphasis was placed on creating a responsive design with Bulma, catering to desktops, mobiles, and tablets.

- **Wireframe** ![plants WireFrame](./src/styles/img/readme%20-%20wireframe.png)
- **Pseudo-coding** ![plants sudo coding](./src/styles/img/readme%20-%20sudocoding.png)

## Implementing the MVP

By the end of the development period (1 day), a minimum viable product was ready. Unfortunately, time constraints prevented the addition of several desired features. Future updates may include these enhancements.

- **MVP Home Page** ![Plants MVP Home Page](./src/styles/img/readme%20-%20home%20page.png)
- **MVP Page 2** ![Plants MVP Page 2](./src/styles/img/readme-mpv%20page%202.png)

## Main Challenges

1. Being sick during this 2-day project, effectively reducing my working time to the equivalent of 1 day.
2. Battling with displaying the plant searched onto the plant card I'd created. That took me well around half a day to feature, as I hadn't fully figured out how to get only the first result displayed on the Plant Card I'd designed. Many plants have similar names such as evergreen (20+ results) or palm tree. So featuring the first found result proved challenging.
3. Using Bulma to display components as I wanted and design it in a way that matched my Wireframe proved challenging. But once more familiar with the concept, it seemed to help me move forward quicker.
4. Last but not least (a problem I am still working on), even though I've been struggling with getting to load the plants page (featuring 20 plants at a time), so that when the button "add plants" is pressed, it displays the next page, with 20 new plants... The only way I found, in such a short period of time, was to hard code it by duplicating my plants component, hardcoding the URL page into both the first and second plant pages. Adding a button at the bottom of each page, offering to see more plants, linking to the following page (component). I also added a previous button on the second page, to be able to go back to the original page, linking them through the routes. I hope I'll be able to circle back to this issue, so I can make it dynamic, limiting the amount of components.
