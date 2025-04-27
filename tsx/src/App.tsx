import "./App.css";
import FilterByRatings from "./components/FilterByRatings";
import HotelTable from "./components/HotelTable";
import TotalPrice from "./components/TotalPrice";
import UniqueCities from "./components/UniqueCities";
import UserBookingSummary from "./components/UserBookingSummary";

function App() {
  return (
    <div>
      <UserBookingSummary />
      <TotalPrice />
      <UniqueCities />
      <FilterByRatings />
      <HotelTable />
      <UserBookingSummary />
    </div>
  );
}

export default App;
