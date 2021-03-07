# TO RUN LOCALLY
Make sure npm install from root, then follow these steps: 
cd client && npm start
cd ..
cd server && npm start

Navigate to localhost:3000 to use our app!

## Inspiration
As students and workers, we feel the impact of lackluster productivity apps far too often. That's why we decided to build a web app that acts as an **all-in-one** life-helping dashboard.

## What it does
TaskBase unites a variety of features scattered amongst typical productivity apps and puts them all in one place. One dashboard, but limitless productivity. Our web app lets you do almost anything you could ever want or need. See the complete feature list below:

* User authentication
* Task to-do list
* Daily News
* Personalized Weather
* Clock
* Notepad
* Music Recommendation
* Daily Activity Recommendation
* Google Search

## How we built it
We used node.js to wire our back end to our React-based front end. User data is stored in a MongoDB database, which was accessible by creating an API that ran on express.js. Since we implemented user authentication, data (like tasks) is stored per user. Each feature was modular, meaning it was its own component. For example, the task to-do list front end is done with React Bootstrap, but the backend is much more complex. To add a new task, we use Typeform to collect the information about the task, then store it in MongoDB, which as previously mentioned, is accessible through our express.js API. 

As another example, the weather feature has the front end display part to it, but most of the work is done by the WeatherStack and Geocode APIs, which provide us with a JSON response containing all the weather data we need to present to the user.

## Challenges we ran into
By far the biggest challenge we faced was the sheer amount of features we wanted to add. If TaskBase were just a to-do list, it would have been simple. However, what makes TaskBase so great is that it has everything you could ever need all on a single dashboard. Achieving that productivity goal is what made this so difficult.

Technically speaking, we had lots of issues with the front end. Though our back end is much more complex, the team has a solid background with back end. Comparatively, two of us have never touched React before, and the third is not a professional either. Definitely lots of fun learning how axios works! :)
