import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Routes/ProtectedRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import Home from "./Pages/Home";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            exact
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />

          <Route
            path="/logout"
            exact
            element={
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

/*
 const protectedRoute = [
    {
      path: "/login",
      element: <Login />
    }
  ];

  const privateRoute = [
    {
      path: "/logout",
      element: <Logout />
    },
    {
      path: "/",
      element: <Home />
    }
  ];
 {privateRoute.map(({ path, element }) => (
            <Route
              path="/login"
              exact
              element={
                <ProtectedRoute>
                  {<Login />}
                </ProtectedRoute>
              }
            />
          ))}

          {protectedRoute.map(({ path, element }) => (
            <Route
              path="/logout"
              exact
              element={
                <PrivateRoute>
                  <Logout />
                </PrivateRoute>
              }
            />
          ))}
*/
