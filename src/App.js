//PAGES
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

//GETTING STYLES
import styles from "./App.module.css";

//ROUTERS
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//CUSTOM CONTEXT
import { UserContextProvider } from "./userContext";
import Cart from "./Components/Cart/cart";
import Order from "./Components/order/order";

import { Helmet } from 'react-helmet';

function App() {

<<<<<<< HEAD

=======
  const isGitHubPages = process.env.NODE_ENV === 'production'; // Check if the app is running on GitHub Pages
  const basename = isGitHubPages ? '/buybusy-1' : '/';
>>>>>>> 145213cf66ac3f7d5924f56ec84235e5a78bb14f

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserContextProvider>
          <Navbar />
          <Home />
        </UserContextProvider>
      )
    },
    {
      path: "/login",
      element: (
        <UserContextProvider>
          <Navbar />
          <Login />
        </UserContextProvider>
      )
    },
    {
      path: "/signup",
      element: (
        <UserContextProvider>
          <Navbar />
          <SignUp />
        </UserContextProvider>
      )
    },
    {
      path: "/cart",
      element: (
        <UserContextProvider>
          <Navbar />
          <Cart />
        </UserContextProvider>
      )
    },
    {
      path: "/orders",
      element: (
        <UserContextProvider>
          <Navbar />
          <Order />
        </UserContextProvider>
      )
    }

  ])
  return (
    <div className={styles.main}>
<<<<<<< HEAD
      <Helmet>
        <meta charSet="utf-8" />
        <title>Busy Buy</title>
        <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
      </Helmet>
      <RouterProvider router={router} />

=======
        <RouterProvider router={router} basename={basename}/>
    
>>>>>>> 145213cf66ac3f7d5924f56ec84235e5a78bb14f
    </div>
  );
}

export default App;
