const bookings = [
  { user: "Alice", nights: 3, city: "Berlin", pricePerNight: 120 },
  { user: "Bob", nights: 2, city: "Paris", pricePerNight: 150 },
  { user: "Alice", nights: 1, city: "Berlin", pricePerNight: 130 },
  { user: "Charlie", nights: 5, city: "Rome", pricePerNight: 80 },
];

const TopCustomerList = () => {
  const userBookings = bookings.reduce(
    (acc, booking) => {
      if (!acc[booking.user]) {
        acc[booking.user] = {
          nights: 0,
          totalAmount: 0,
        };
      }
      acc[booking.user].nights += booking.nights;
      acc[booking.user].totalAmount += booking.pricePerNight * booking.nights;
      return acc;
    },
    {} as Record<
      string,
      {
        nights: number;
        totalAmount: number;
      }
    >
  );
  const sortedSummary = Object.entries(userBookings).toSorted(
    (a, b) => b[1].totalAmount - a[1].totalAmount
  );
  return (
    <table
      border={1}
      cellPadding={5}
      style={{ width: "100%", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th>Username</th>
          <th>Total Nights Stayed</th>
          <th>Total Amount Paid (€)</th>
        </tr>
      </thead>
      <tbody>
        {sortedSummary.map(([user, stats]) => (
          <tr key={user}>
            <td>{user}</td>
            <td>{stats.nights}</td>
            <td
              style={{
                fontWeight: stats.totalAmount > 500 ? "bold" : "normal",
              }}
            >
              {stats.totalAmount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopCustomerList;
