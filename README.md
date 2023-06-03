By Tobias Åhlund and Ruben Olander @YRGO WU-2022

**[Link to website!](https://astro-tracer.netlify.app/)**

If you want this to run on your machine do the following:

1. Clone repository.

2. Sign up on http://www.mapbox.com and get yourself an acess token.

3. Create a file called .env.local in the root folder and paste your API-key as a string. See .example.env for formatting.

4. Run the following commands:

npm install
npm create vite@latest .
npm i --save mapbox-gl
npm i @tanstack/react-query
npm i --save-dev @types/mapbox-gl
npm i -D @tanstack/eslint-plugin-query

5. and finally npm run dev to get your local map running.