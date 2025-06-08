import './App.css'
import { useEffect, useState } from 'react';
import { fetchData } from './api';
import Header from './components/Header'
import Home from './components/Home'
import User_Home from './components/User_Home'
import Books_Page from './components/Books_Page'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Newly_Added_Books from './components/Newly_Added_Books'
import Recommended_Books from './components/Recommended_Books'
import Popular_Books from './components/Popular_Books'
import PasswordReset from './components/Password-Reset'
import Register from './components/Register'
import PasswordSuggestion from './components/Password-suggestion'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Searched_Page from './components/Search_Page'
import Dashboard from './components/Dashboard'

function App() {

  const [data, setData] = useState([]);

   useEffect(() => {
    fetchData().then(setData);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/home",
      element: <><User_Home/></>
    },
    {
      path: "/user/sanskar",
      element: <><Header/><Dashboard/><Footer/></>
    },
    {
      path: "/search/:book",
      element: <><Header/><Searched_Page/></>
    },
    {
      path: "/books",
      element: <><Header/><Books_Page/><Footer/></>
    },
    {
      path: "/about",
      element: <><Header/><About/><Footer/></>
    },
    {
      path: "/contact-us",
      element: <><Header/><Contact/><Footer/></>
    },
    {
      path: "/login",
      element: <><Header/><Login/><Footer/></>
    },
    {
      path: "/newly_added_books",
      element: <><Header/><Newly_Added_Books/><Footer/></>
    },
    {
      path: "/recommended_books",
      element: <><Header/><Recommended_Books/><Footer/></>
    },
    {
      path: "/popular_books",
      element: <><Header/><Popular_Books/><Footer/></>
    },
    {
      path: "/password-reset",
      element: <><Header/><PasswordReset/><Footer/></>
    },
    {
      path: "/register",
      element: <><Header/><Register/><Footer/></>
    },
    {
      path: "/password-suggestion",
      element: <><Header/><PasswordSuggestion/><Footer/></>
    },
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
      <h1>Data from Backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App