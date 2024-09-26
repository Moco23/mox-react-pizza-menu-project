// importing react and reactDom
import React from "react";
import ReactDOM from "react-dom";
// import css
import "./index.css";

export const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
    // pizza react list
    <main className="menu">
      <h2>Our Pizza</h2>

      {/* pizza list */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
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
      /> */}
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
      <li>
        <img src={props.pizzaObj.photoName} alt={props.pizzaName} />
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price}</span>
        </div>
      </li>
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
