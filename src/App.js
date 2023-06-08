// import Expenses from "./components/Expense";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expense = [
    {
      id: "1",
      title: "Toilet Paper",
      amount: 22.9,
      date: new Date(),
    },
    { id: "2", title: "New TV", amount: 22.9, date: new Date() },
    {
      id: "3",
      title: "Car Insurance",
      amount: 22.9,
      date: new Date(2023, 5, 12),
    },
    {
      id: "4",
      title: "Car Insurance",
      amount: 22.9,
      date: new Date(2023, 5, 12),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <Expenses items={expense} />
    </div>
  );
};

export default App;
