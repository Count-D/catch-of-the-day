# catch-of-the-day
Best Reactjs course there is online from Wes Bos, Covers all important aspects one react app should have

## Setup
First check if you have node js and npm installed
```
npm -v
```
If not, download the latest version of node js from https://nodejs.org/

Than, navigate to the catch-of-the-day-master folder in your command line and type:
```
npm install
```
Once that is done start the live server at localhost:3000
```
npm start
```
## About

This is a Great learning project since it covers the most important React js concepts and it helped me really get a grasp of the React.js javascript library and made me think in a React way.
Even though this project is using React(v15.4) and router(v3) which are out of day in the present moment, I have understood the most important concepts for React programming like:
1. Javascript ES2015(ES6) Syntax
2. Components and Props
3. Component Lifecycle Methods
4. Keys
5. Refs
6. setState
7. React Router
8. Stateless Components
9. PropTypes
Also setting up the authentication with OAuth method with firebase.

My Contribution to this project are modest, but the best way of learning is by working so i tried to make this project slightly better than it is by adding About Us Page and connecting it with App through Router(v3), Also,
I made a change in removeOrder method in App component by removing order one by one instead of removing the whole order:
```
     removeOrder(key){
        const order = {...this.state.order};

        //ORIGINAL CODE Was deleting the whole order
        //delete order[key];

        //THIS IS MY SOLUTION WHERE I WAS DELETING ORDERS ONE BY ONE UNTIL ZERO(REMOVED)
        order[key] = order[key] - 1;
        if (order[key] === 0){

            delete order[key];
               
        }
         this.setState({order})
    }
    
```
The proof of how this project helped me understand React and Javascript programming is my next project that i did all by myself from start to finish which is called polluted cities.

For any additional question about this project I an Fully open and will be happy to give provide detailed explanation about a certain function, method or a full component if necessary.
