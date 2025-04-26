import "./App.css";
import BookingPerUser from "./components/BookingPerUser";
import FilterByRatings from "./components/FilterByRatings";
import TotalPrice from "./components/TotalPrice";
import UniqueCities from "./components/UniqueCities";

function App() {
  return (
    <div>
      <BookingPerUser />
      <TotalPrice />
      <UniqueCities />
      <FilterByRatings />
    </div>
  );
}

export default App;
