# React Test Solution

Solving a test task for the position of a front-end developer.

## Requirements
Requires the first version of the front-end application, which can be seen
a corporate network on behalf of one of the employees. It should have 2 sections:
one for discussing work issues, and the other just for flooding and communication. In each section, the employee should see a list of all sent messages and
be able to send messages (and then edit or delete them).

## App contains:
- Login form.
- Header with information.  
- Field with 2 sections.
- Form for sending messages.
- Field for displaying all messages.
- Functionality for editing and deleting sent messages.

## For visual reference
1. Follow this link [`https://olehpoperechnyi.github.io/test-task-planktonics/`](https://olehpoperechnyi.github.io/test-task-planktonics/)
2. Use `test@gamil.com` as a login and `qwer1234` as password.

## Run the app
1. Open a new bash shell
2. `cd test-task-planktonics`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`
5. Use `test@gamil.com` as a login and `qwer1234` as password.

## List of used libraries
- `react` 
- `react router`
- `react-redux`  
- `redux`
- `redux-form`

## Brief description of the project

The project was created with `create-react-app` with standard folder structure.
There are 4 main folders in the `src` folder:\
- `api`
- `redux`
- `utilities`
- `components`

### api 

This version of the application does not use a server (local storage is used), but at the time of writing this feature was taken into account. 
The `API.js` file contains data and methods for querying on the training server. 
But due to the CORS, requests could not be implemented in this version of the application.

### redux

The `redux` folder contains files with reducers and the `redux-store.js` file for implementing `BLL` using redux.

### utilities

The `utilities` folder contains only validators for forms witch used with redux-form.

### components

The components are named as close as possible to the essence of their functionality.\
To eliminate confusion, comments with a brief description of the component's functionality are placed at the beginning of each `jsx` or `js` file.

## P.S.

If you have any questions, write to the mail `oleg.poperechnyy@gmail.com`.
