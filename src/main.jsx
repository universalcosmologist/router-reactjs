import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout';
import {Home,About,Contact,User, Github, githubInfoLoader} from './components/index'

const router=createBrowserRouter([
{
  path:'/',
  element:<Layout/>,
  children:[
  {
    path:'',
    element:<Home/>
  },
  {
    path:'about',
    element:<About/>
  },
  {
    path:'contact',
    element:<Contact/>
  },
  {
    path:'user/:userid',
    element:<User/>
  },
  {
    path:'github',
    element:<Github/>,
    loader:githubInfoLoader,
  }
]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
