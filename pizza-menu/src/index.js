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
        pizzaPrice={10}
      />
      <Pizza
        pizzaName="Focaccia"
        pizzaIngredients="Bread with italian olive oil and rosemary"
        pizzaPrice={7}
        pizzaPhotoUrl="pizzas/focaccia.jpg"
      />
      <Pizza
        pizzaName="Pizza Margherita"
        pizzaIngredients="Tomato and mozarella"
        pizzaPrice={10}
        pizzaPhotoUrl="pizzas/margherita.jpg"
      />
      <Pizza
        pizzaName="Pizza Funghi"
        pizzaIngredients="Tomato, mozarella, mushrooms, and onion"
        pizzaPrice={10}
        pizzaPhotoUrl="pizzas/funghi.jpg"
      />
      <Pizza
        pizzaName="Pizza Salamino"
        pizzaIngredients="Tomato, mozarella, and pepperoni"
        pizzaPrice={10}
        pizzaPhotoUrl="pizzas/salamino.jpg"
      />
      <Pizza
        pizzaName="Pizza Prosciutto"
        pizzaIngredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        pizzaPrice={10}
        pizzaPhotoUrl="pizzas/prosciutto.jpg"
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
    <article className="pizza">
      <img src={props.pizzaPhotoUrl} alt={props.pizzaName} />
      <div>
        <h3>{props.pizzaName}</h3>
        <p>{props.pizzaIngredients}</p>
        <span>{props.pizzaPrice}</span>
      </div>
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
