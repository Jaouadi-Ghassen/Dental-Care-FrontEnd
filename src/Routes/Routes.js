import React from 'react'
import { createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'
import { Register } from '../Pages/Register/Register'
import { Navbar } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import { About } from '../Pages/About/About';
import { Clinics } from '../Pages/Clinics/Clinics';
import { Contact } from '../Pages/Contact/Contact';
import { Service } from '../Pages/Service/Service';

const Layout = () =>{
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};


const router = createBrowserRouter([
    {
      path: '/',
      element : <Layout/>,
      children: [
        {
            path: '/',
            element : <Home/>
          },
          {
            path: '/About',
            element : <About/>
          },
          {
            path: '/Clinics',
            element : <Clinics/>
          },
          {
            path: '/Contact',
            element : <Contact/>
          },
          {
            path: '/Service',
            element : <Service/>
          }
      ]
    },
    {
      path: '/Login',
      element : <Login/>
    },
    {
      path: '/Register',
      element : <Register/>
    }
  ]);


export const Routes = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
