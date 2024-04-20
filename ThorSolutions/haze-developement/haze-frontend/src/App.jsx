import "./App.css";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";
import Authenticate from "./pages/Authenticate";

import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      dispatch(loginUser(storedData));
    }
  }, []);

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);

  const RoutedLayout = () => {
    return (
      <Router>
        <>
          {isLoading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {user ? (
                <Routes>
                  {CustomRoutes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      }
                    />
                  ))}
                </Routes>
              ) : (
                <Authenticate />
              )}
            </>
          )}
        </>
      </Router>
    );
  };

  const Provider = () => {
    return (
      <ThemeProvider>
        <UserProvider>
          <RoutedLayout />
        </UserProvider>
      </ThemeProvider>
    );
  };

  return <Provider />;
};

export default App;
