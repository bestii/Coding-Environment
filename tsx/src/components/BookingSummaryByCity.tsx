const bookings = [
  { user: "Alice", nights: 3, city: "Berlin", pricePerNight: 120 },
  { user: "Bob", nights: 2, city: "Paris", pricePerNight: 150 },
  { user: "Alice", nights: 1, city: "Berlin", pricePerNight: 130 },
  { user: "Charlie", nights: 5, city: "Rome", pricePerNight: 80 },
  { user: "Bob", nights: 2, city: "Rome", pricePerNight: 90 },
];

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
            </table>
          </div>
        ))}
    </div>
  );
};

export default BookingSummaryByCity;
