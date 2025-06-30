import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/layout'
import Home from './pages/home/home'
import About from './pages/about/about'
import Categories from './pages/categories/categories'
import Allproducts from './pages/allproducts/allproducts'
import Info from './pages/info/info'
import Busket from './pages/busket/busket'

const App = () => {
  let router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          index : true,
          element : <Home/>
        },
        {
          path : 'about',
          element : <About/>
        },
        {
          path : 'categories',
          element : <Categories/>
        },
        {
          path : 'allproducts',
          element : <Allproducts/>
        },
        {
          path : 'info/:id',
          element : <Info/>
        },
        {
          path : 'busket',
          element : <Busket/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App