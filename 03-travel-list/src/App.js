const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away!</h1>;
}

function Form() {
  // function handleSubmit(e) {
  //   e.preventdefault();
  // }
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
  //  <form onSubmit={(e) => handleSubmit(e)}></form>;
}

function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
