import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,

} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Events from './pages/Events/Events';
import Banner from './components/Banner/Banner';
import Watch from './pages/Connect/Watch/Watch';
import EventDetails from './pages/Events/EventDetails/EventDetails';
import Connect from './pages/Connect/Connect';
import PrayerRequest from './pages/Connect/PrayerRequest/PrayerRequest';

const Layout = ({ scrolled }) => {
  const { pathname } = useLocation()

  // const currentRoute = routes.find((route) => route.path === pathname);
  // const title = currentRoute ? currentRoute.title : '';

  
  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      {pathname !== "/" && <Banner pathname={pathname} />}
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}



const SermonsPage = () => {
  window.location.href = 'https://example.com/1234';
  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout scrolled={scrolled} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <Home />,
        },
        {
          path: "/connect",
          children: [
            {
              index: true,
              element: <Connect />,
            },
            {
              path: "watch",
              element: <Watch />,
            },
            {
              path: "prayer-request",
              element: <PrayerRequest />,
            },
            {
              path: "contact-us",
              element: <Watch />,
            },
          ],
        },
        
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/events/:eventId",
          element: <EventDetails />, // Route for individual event pages
        },
        
        {
          path: "/more/:slug",
          element: <Events />,
        },
        

      ]
    }

  ])

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 40) { // Change 100 to the desired scroll position
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Update the state to indicate that the user hasn't scrolled
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <RouterProvider router={router} />);
}

export default App;
