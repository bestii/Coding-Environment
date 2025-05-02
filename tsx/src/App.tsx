import "./App.css";
import FilterByRatings from "./components/FilterByRatings";
import HotelTable from "./components/HotelTable";
import TopCustomerList from "./components/TopCustomerList";
import TotalPrice from "./components/TotalPrice";
import UniqueCities from "./components/UniqueCities";
import UserBookingSummary from "./components/UserBookingSummary";
import { SummaryByCity } from "./features";

function App() {
  return (
    <div>
      <UserBookingSummary />
      <TotalPrice />
      <UniqueCities />
      <FilterByRatings />
      <HotelTable />
      <UserBookingSummary />
      <TopCustomerList />
      <SummaryByCity />
    </div>
  );
}

export default App;
