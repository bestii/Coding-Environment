import "./App.css";
import FilterByRatings from "./components/FilterByRatings";
import HotelTable from "./components/HotelTable";
import { TestChildren } from "./components/TestChildren";
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
      <TestChildren>
        <div title="title 1">Content 1</div>
        <div title="title 2">Content 2</div>
      </TestChildren>
    </div>
  );
}

export default App;
