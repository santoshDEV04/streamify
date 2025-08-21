import React, { useEffect, useState } from "react";
import { Route, Routes , Navigate} from "react-router";
import toast, { Toaster } from "react-hot-toast";

import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import Onboarding from "./Pages/Onboarding";
import ChatPage from "./Pages/ChatPage";
import CallPage from "./Pages/CallPage";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import {axiosInstance} from "./lib/axios.js"

const App = () => {

  // tanstack query
  const { data:authData, isLoading, error, } = useQuery({
    queryKey: ["authUser"],

    queryFn: async () => {

      const res = await axiosInstance.get("/auth/me")

      return res.data;
    },
    retry: false, // auth check is just once cause it is authentication
  });


  const authUser = authData?.user


  return (
    <div className="h-screen justify-center item-center" data-theme="night">
      {/* axios */}
      {/*  react query tanstack query*/}

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />}></Route>

        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />}></Route>
{/*
        <Route path="/signup" element={<SignUpPage/>}></Route> */}

        <Route path="/login" element={!authUser ?  <LoginPage /> : <Navigate to="/"/>}></Route>

        <Route path="/notifications" element={authUser ? <CallPage /> : <Navigate to="/login" />}></Route>

        <Route path="/call" element={authUser ?<Onboarding /> : <Navigate to="/login" />}></Route>

        <Route path="/chat" element={authUser ?<ChatPage/> : <Navigate to="/login" />}></Route>

        <Route path="/onboarding" element={authUser ?<Onboarding /> : <Navigate to="/login" />}></Route>
      </Routes>
      <Toaster />
      { console.log("authUser: ", authUser)}
    </div>
  );
};

export default App;
