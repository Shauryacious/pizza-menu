import React from "react";
import { ReactDOM } from "react-dom/client";
import './App.css';

function App() {
  return (
    <div className="Container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(){
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu(){
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  )
}

function Pizza(){
  return(
    <h1>Pizza component</h1>
  )
}


function Footer(){
}

export default App;
