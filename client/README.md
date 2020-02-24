# Brandon Gardner - Corva Challenge

Thanks for checking out my challenge.

To run the project:

- npm install in the parent directory, and the client directory.
- npm run start in both directories. Client may need a .env file with the PORT you want to use. Otherwise, let your terminal prompt you to use another port.
- That should be it!

## Tools:

- React
- TypeScript
- Redux
- Redux/Toolkit
- Redux Persist
- Recharts
- React Toastify
- React Testing Library
- Jest

## Work Description:

While the project is simple in implementation, I wanted to try and use some technologies that may help in case I ever wanted to iterate on the project.

Redux was used because I love it for state management. It is extremely small in this project and I could have gotten away with the Context API + local storage. I like to try and plan for the future though and I know redux would give me the ability to grow if I ever wanted to. It also allows me to use Redux/Toolkit for Reselect features that can help with performance. It also let me use Redux Persist so that I could save the user's threshold between sessions.

Recharts was used because I have experience with it at my current job where we display data driven dashboards. I did run into an issue in my test cases as far as Responsive Containers in Node environments. In the future, I plan to fix this. However, the testing of Recharts should typically be maintained by the Recharts team. That is why I did not pursue it while making my simple chart tests.

React toastify was used because it is extremely simple to set up for alerts. I didn't need anything crazy and it works wonderfully for the threshold portion of the challenge.

CRA now ships with React Testing Library. I have used Jest/Enzyme in the past but I chose to pursue this library and create my tests with RTL. Overall, I am very happy with it and look forward to using it in the future.

I implemented TypeScript because I think having a static checking tool is invaluable. It allows you to have more confidence that your code will work and helps to find issues that you may easily overlook. When another developer works in the code base, they can find a lot of the information they need simply from looking at the type system. I did not use .d.ts files or types folders in this project. I wanted anybody who reviews this to hopefully be able to see types pretty quickly as they are browsing to understand what is going on.

---

# Normal React CRA ReadMe

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
