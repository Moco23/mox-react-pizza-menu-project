// importing react and reactDom
import React from "react";
import ReactDOM from "react-dom";

// import css
import "./index.css";

// app component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <Pizza
        pizzaName="Pizza Spinaci"
        pizzaIngredients="Tomato, mozarella, spinach, and ricotta cheese"
        pizzaPhotoUrl="pizzas/spinaci.jpg"
        pizzaPrice="10"
      />
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open{" "}
    </footer>
  );
}

// pizza component
function Pizza(props) {
  return (
    <article>
      <img src={props.pizzaPhotoUrl} alt={props.pizzaName} />
      <h3>{props.pizzaName}</h3>
      <p>{props.pizzaIngredients}</p>
      <p>{props.pizzaPrice}</p>
    </article>
  );
}
// render root method
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
