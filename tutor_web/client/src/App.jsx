import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyCourses from "./pages/myCourses/MyCourses";
import Law from "./pages/law/Law";
import Medicine from "./pages/medicine/Medicine";
import Engineering from "./pages/engineering/Engineering";
import Mathematics from "./pages/mathematics/Mathematics";
import Humanities from "./pages/humanities/Humanities";
import Computing from "./pages/computing/Computing";
import Arts from "./pages/arts/Arts";
import Sciences from "./pages/sciences/Sciences";
import Business from "./pages/business/Business";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About2";
import Help from "./pages/help/Help2";
import Chat from "./pages/chat/Chat";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/business",
          element: <Business />,
        },
        {
          path: "/law",
          element: <Law />,
        },
        {
          path: "/sciences",
          element: <Sciences />,
        },
        {
          path: "/arts",
          element: <Arts />,
        },
        {
          path: "/computing",
          element: <Computing />,
        },
        {
          path: "/humanities",
          element: <Humanities />,
        },
        {
          path: "/mathematics",
          element: <Mathematics />,
        },
        {
          path: "/engineering",
          element: <Engineering />,
        },
        {
          path: "/medicine",
          element: <Medicine />,
        },
        {
          path: "/myCourses",
          element: <MyCourses />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/course/:id",
          element: <Course />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
