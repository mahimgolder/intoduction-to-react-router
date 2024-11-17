import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/postDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>

      }
    ]
  },
 
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
