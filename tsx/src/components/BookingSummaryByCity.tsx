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
];

interface TFooterProps {
  userList: Record<
    string,
    {
      nights: number;
      totalAmount: number;
    }
  >;
}

const TFooter = ({ userList }: TFooterProps) => {
  const cityTotal = Object.entries(userList).reduce(
    (total, [, stats]) => {
      total["totalNights"] += stats.nights;
      total["totalAmount"] += stats.totalAmount;
      return total;
    },
    { totalNights: 0, totalAmount: 0 }
  );
  return (
    <tfoot>
      <tr>
        <td>Total</td>
        <td>{cityTotal.totalNights}</td>
        <td>{cityTotal.totalAmount}</td>
      </tr>
    </tfoot>
  );
};

const BookingSummaryByCity = () => {
  const groupedbyCity = bookings.reduce(
    (acc, booking) => {
      if (!acc[booking.city]) {
        acc[booking.city] = {};
      }
      if (!acc[booking.city][booking.user]) {
        acc[booking.city][booking.user] = {
          nights: 0,
          totalAmount: 0,
        };
      }
      acc[booking.city][booking.user].nights += booking.nights;
      acc[booking.city][booking.user].totalAmount +=
        booking.pricePerNight * booking.nights;
      return acc;
    },
    {} as Record<
      string,
      Record<
        string,
        {
          nights: number;
          totalAmount: number;
        }
      >
    >
  );
  console.log(Object.entries(groupedbyCity));
  return (
    <div>
      {Object.entries(groupedbyCity)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([city, userList]) => (
          <div key={city}>
            <h2>{city}</h2>
            <table border={1} cellPadding={5} style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th># Nights</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(userList).map(([user, stats]) => (
                  <tr key={user}>
                    <td>{user}</td>
                    <td>{stats.nights}</td>
                    <td
                      style={{
                        fontWeight: stats.totalAmount > 300 ? "bold" : "normal",
                      }}
                    >
                      {stats.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
              <TFooter userList={userList} />
            </table>
          </div>
        ))}
    </div>
  );
};

export default BookingSummaryByCity;
