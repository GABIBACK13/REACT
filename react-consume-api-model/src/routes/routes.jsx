import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.jsx";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Students from "../pages/Students";
import Student from "../pages/Student";
import Pictures from "../pages/Pictures";
import PictureEdit from "../pages/PictureEdit";
import NotFound from "../pages/NotFound";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/students" element={<Students />} />

      <Route
        path="/student/:id"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />
      <Route
        path="/student/view/:id"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />
      <Route
        path="/student/:id/profile"
        element={
          <PrivateRoute isClosed>
            <PictureEdit />
          </PrivateRoute>
        }
      />
      <Route
        path="/student/"
        element={
          <PrivateRoute isClosed>
            <Student />
          </PrivateRoute>
        }
      />

      <Route
        path="/pictures/:id"
        element={
          <PrivateRoute isClosed>
            <Pictures />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
