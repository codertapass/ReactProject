const pizzaData = [
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

export default function App() {
  return (
    <div>
      <Header />
      <Menu data={pizzaData} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>The Ultimate Pizza Store</h1>
    </header>
  );
}
function Menu({ data }) {
  const pizzas = pizzaData;
  // const pizzas = [];
  const num = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {num > 0 ? (
        <>
          <p>
            Authentic italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven,all organic,all delecious.
          </p>
          <ul className="pizzas">
            {pizzas.map((p) => (
              <Pizza data={p} key={p.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please visit us later. </p>
      )}
    </main>
  );
}
function Pizza({ data }) {
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.photoName} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "SOLD-OUT" : data.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we are open until {closeHour}.00 Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          We're happy to welcome you between from {openHour}:00 to {closeHour}
          :00{" "}
        </p>
      )}
    </footer>
  );
}
