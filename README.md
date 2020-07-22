This project is created for a interface that allows a user to view a list of hardcoded
users from a mock API server. On clicking on any user, a modal opens which displays
all the time ranges during which they were active on that day, with an option to view all the
periods of activity for different days using a calendar

## Creating Mock Server

Run `npm install -g json-server`
Save the json file as `test.json`

## start Mock Server

Run `json-server --watch test.json` in project directory

## Endpoint

user list - `http://localhost:3000/members`
userDetails - `http://localhost:3000/members/id`

---

## UI Code

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If this throw error like port 3000 is busy run on some other port y/n - y

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
