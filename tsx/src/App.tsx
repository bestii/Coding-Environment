import "./App.css";
import BookingPerUser from "./components/BookingPerUser";
import TotalPrice from "./components/TotalPrice";
import UniqueCities from "./components/UniqueCities";

function App() {
  return (
    <div>
      <BookingPerUser />
      <TotalPrice />
      <UniqueCities />
    </div>
  );
}

export default App;
