# Brandon Gardner - Corva Challenge

View my portion of the readme [here](./client/README.md)!

# Task Delivery

- Please don't fork, branch or create a pull request with this repository.
- Clone it and do your work there.
- When the task is ready, **Email** your solution back to us (Only first submit count unless otherwise directed).

# Task Description

You have a server which returns random numbers via WebSocket ([socket.io](https://socket.io)) connection.

You should implement the next:

1. A line chart:
   - **x-axis**: time of a received number (look at `timestamp` payload field)
   - **y-axis**: number values
2. A bar chart:
   - **x-axis**: range categories (e.g. `-10 - 0`, `0 - 10`, `10 - 20` etc)
   - **y-axis**: the amount of numbers in each category
3. (Optional) An input called _"Alert threshold"_:
   - a user should be able to enter a number
   - if the random number received from the server is greater than the threshold - show an alert toast / snackbar with the number as the payload
4. Design: we appreciate your own design decisions =)

Charts should be updated in real time. **Please**, consider code style best practices.

# Limitations

1. **React**
2. Use [socket.io-client](https://socket.io/docs/client-api) to connect to the server
3. That’s all

**P.S.** Feel free to use any module bundler, charts package, UI-kit etc you want. **BUT** please, leave some notes about the project setup.

# Server Setup

1. Install NodeJS
2. In the project root folder run `yarn` / `npm install`
3. Add `.env` file with the specified PORT (`3000` by default) env variable (look at `.env.sample` file)
4. Run `yarn start` / `npm start`
5. Now you can connect to the server via [socket.io-client](https://socket.io/docs/client-api):
   - listen for `data` event
   - the payload format is `{ value: <float>, timestamp: <integer> }`

# Good luck!
