import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import AddPost from "./components/AddPost";
import { PostProvider } from "./PostContext";
import Post from "./components/Post";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <PostProvider isLoggedIn={isLoggedIn}>
      <Navigation
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
      <div className="content-container">
        <Dashboard isLoggedIn={isLoggedIn} user={user} />
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route
            path="/category/:category"
            element={<Main isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/add-post"
            element={
              isLoggedIn ? (
                <AddPost user={user} />
              ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
              )
            }
          />
          <Route path="/post/:id" element={<Post user={user} />} />
          <Route
            path="/login"
            element={
              <LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            }
          />
          <Route
            path="/register"
            element={<RegisterForm setUser={setUser} />}
          />
          <Route
            path="/user"
            element={<UserProfile isLoggedIn={isLoggedIn} user={user} />}
          />
        </Routes>
      </div>
    </PostProvider>
  );
}

export default App;
