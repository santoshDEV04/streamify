import { Route, Routes, Navigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import Onboarding from "./Pages/Onboarding";
import ChatPage from "./Pages/ChatPage";
import CallPage from "./Pages/CallPage";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";

const App = () => {
  const { isLoading, authUser } = useAuthUser();

  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  // const isAuthenticated = authData?.user

  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen justify-center item-center" data-theme="night">
      {/* axios */}
      {/*  react query tanstack query*/}

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <HomePage />
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onBoarding"} />
            )
          }
        ></Route>

        <Route
          path="/signup"
          element={
            !isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />

        {/*
        <Route path="/signup" element={<SignUpPage/>}></Route> */}

        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to={ isOnboarded ? "/" : "/onboarding"} />}
        />

        <Route
          path="/notifications"
          element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/call"
          element={isAuthenticated ? <Onboarding /> : <Navigate to="/login" />}
        />

        <Route
          path="/chat"
          element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
        />

        <Route
          path="/onBoarding"
          element={isAuthenticated ? (
            !isOnboarded ? (
              <Onboarding />
            ) : (
              <Navigate to="/" />
            )
          ) : (
            <Navigate to="/login" />
          )}
        />

      </Routes>
      <Toaster />
      {console.log("isAuthenticated: ", isAuthenticated)}
    </div>
  );
};

export default App;
