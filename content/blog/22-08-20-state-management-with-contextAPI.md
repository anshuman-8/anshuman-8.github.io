---
title: State Management with Context API
slug: my-Awesome-Blog-Post
description: Make state & variables available to all components in react application without prop drilling
date: "20 Aug 2022"
tags:
  - ContextAPI
  - web
  - React
cover_image: State-management-with-ContextAPI-in-React-1.png
---

## What is Context API ?

    
The React `Context API` is a way for a React app to effectively produce global variables that are available throughout the React application. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.





## How to use Context API ?

To check its implementation lets use an example of providing user data throughout the application using Context API.

1. For this let's make a Context folder inside our `src` folder and then make a file name `UserContext.js` and make a user context inside that file by importing `createContext`.
    
    ```javascript
    import { createContext } from "react";

    const userContext=createContext();

    export default userContext;
    ```

    Don't forget to export `userContext`



2. Now, after this as the context in ready we can make the user state by creating `UserState.js` inside Context folder.
    We will use useState hook for this example.


    ```javascript
    import { useState } from "react";
    import UserContext from "./UserContext";

    const userData={
        "name":"Anshuman",
        "age":19,
        "color":"blue"
    }

    const UserState=({children})=>{
    
        const [user,setUser]=useState(userData);

        function happyBirthDay(){
            setUser(user.age = user.age+1)
        }

        return (
            <UserContext.Provider value = {{user,setUser,happyBirthDay}}>
                {children}
            </UserContext.Provider>
            )
        }

    export default UserState;
    ```



3. As, most of the heavy lifting is done we can now import out UserState from top most parent component like `index.js` or `App.js`. I will be using `App.js` as I am calling all my children component from there.

    ```javascript
    import UserState from "./Context/UserState";

    function App() {
    return (
        <UserState>
            // All your children component
        </UserState>
        );
    }

    export default App;
    ```

    There you go now the userState is avalable throughout your application.


4. Now, to use the userState we will take an example of `Profile` component which is deep in there children tree.

    ```javascript
    import React,{useContext} from "react";
    import userContext from "../Context/UserContext";

    const Profile = () => {

        const {user,setUser} = useContext(userContext);
        
        return (
            <div >
               {user.name}
            </div>
            )
    };
    export default Profile
    ```

    We have done it by using `useContext` hook available with react.
    
    Finally, it's done and that's it for the basic implementation of Context API in React.



> **_NOTE:_**   The code and file structure that I have kept, i.e. having `UserState` and `UserContext` in different files inside a Context folder, is a standard convention to make code easier to understand. You need not follow it.




![Smash Prop drills](/blog-assets/State-management-with-ContextAPI-in-React-2.jpg "You just killed all Prop drillings")

