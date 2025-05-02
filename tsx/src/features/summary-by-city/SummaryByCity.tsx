import CityTable from "./components/CityTable";
import type { CityGroup } from "./types";

const bookings = [
  { user: "Alice", nights: 3, city: "Berlin", pricePerNight: 120 },
  { user: "Bob", nights: 4, city: "Berlin", pricePerNight: 100 },
  { user: "Charlie", nights: 2, city: "Paris", pricePerNight: 150 },
  { user: "Alice", nights: 1, city: "Berlin", pricePerNight: 130 },
  { user: "Bob", nights: 2, city: "Paris", pricePerNight: 120 },
  { user: "Charlie", nights: 3, city: "Rome", pricePerNight: 90 },
  { user: "Dave", nights: 1, city: "Rome", pricePerNight: 100 },
  { user: "Eve", nights: 2, city: "Paris", pricePerNight: 140 },
  { user: "Alice", nights: 2, city: "Rome", pricePerNight: 85 },
  { user: "Charlie", nights: 2, city: "Berlin", pricePerNight: 150 },
  { user: "Bob", nights: 1, city: "Paris", pricePerNight: 160 },
  { user: "Eve", nights: 3, city: "Rome", pricePerNight: 95 },
  { user: "Dave", nights: 1, city: "Berlin", pricePerNight: 40 },
  { user: "Charlie", nights: 2, city: "Paris", pricePerNight: 130 },
  { user: "Alice", nights: 1, city: "Rome", pricePerNight: 75 },
  { user: "Alice", nights: 3, city: "Berlin", pricePerNight: 120 },
  { user: "Bob", nights: 4, city: "Berlin", pricePerNight: 100 },
  { user: "Charlie", nights: 2, city: "Paris", pricePerNight: 150 },
  { user: "Alice", nights: 1, city: "Berlin", pricePerNight: 130 },
  { user: "Bob", nights: 2, city: "Paris", pricePerNight: 120 },
  { user: "Charlie", nights: 3, city: "Rome", pricePerNight: 90 },
  { user: "Dave", nights: 1, city: "Rome", pricePerNight: 100 },
  { user: "Eve", nights: 2, city: "Paris", pricePerNight: 140 },
  { user: "Alice", nights: 2, city: "Rome", pricePerNight: 85 },
  { user: "Charlie", nights: 2, city: "Berlin", pricePerNight: 150 },
  { user: "Bob", nights: 1, city: "Paris", pricePerNight: 160 },
  { user: "Eve", nights: 3, city: "Rome", pricePerNight: 95 },
  { user: "Dave", nights: 1, city: "Berlin", pricePerNight: 40 },
  { user: "Charlie", nights: 2, city: "Paris", pricePerNight: 130 },
  { user: "Alice", nights: 1, city: "Rome", pricePerNight: 75 },
];

const SummaryByCity = () => {
  const groupByCity = bookings.reduce((acc, booking) => {
    if (!acc[booking.city]) {
      acc[booking.city] = {
        users: {},
        totalNights: 0,
        totalAmount: 0,
      };
    }
    const cityGroup = acc[booking.city];
    const userGroup = cityGroup.users;
    if (!userGroup[booking.user]) {
      userGroup[booking.user] = {
        nights: 0,
        totalAmount: 0,
      };
    }

    acc[booking.city].totalNights += booking.nights;
    acc[booking.city].totalAmount += booking.pricePerNight * booking.nights;
    userGroup[booking.user].nights += booking.nights;
    userGroup[booking.user].totalAmount +=
      booking.pricePerNight * booking.nights;
    return acc;
  }, {} as CityGroup);

  return (
    <div>
      {Object.entries(groupByCity).map(([city, stats]) => (
        <CityTable name={city} cityInfo={stats} key={city} />
      ))}
    </div>
  );
};

export default SummaryByCity;
