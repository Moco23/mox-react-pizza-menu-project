// importing react and reactDom
import React from "react";
import ReactDOM from "react-dom";

// app component
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {}
function Menu() {}
function Footer() {}

// render root method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
