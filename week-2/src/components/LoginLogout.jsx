import {useState} from "react";
export default function LoginLogout(){
  const [isLoggedIn, setIsLoggedIn] =  useState(false);
  
  function handleLogin(){
    setIsLoggedIn(true);
  }
  function handleLogout(){
    setIsLoggedIn(false);
  }
  return (
    <div className = "flex flex-col items-center justify-center h-screen text-center">
      {isLoggedIn ? (
        <>
        <h1 className="text-2xl font-bold mb-4">Welcome back, User!</h1>
        <button onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 border-2 border-green-700">Logout</button>
        </>
      ):(
        <>
        <h1 className="text-2xl font-bold mb-4">Please Log in</h1>
        <button onClick={handleLogin} className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 border-2 border-green-700">
          Login
        </button>
        </>
      )}
    </div>
  );
}