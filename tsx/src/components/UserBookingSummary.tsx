const bookings = [
  { id: 1, user: "Alice", nights: 3 },
  { id: 2, user: "Bob", nights: 2 },
  { id: 3, user: "Alice", nights: 1 },
];

const UserBookingSummary = () => {
  // TODO: Group bookings by user and sum nights
  const bookingsPerUser: Record<
    string,
    {
      nights: number;
    }
  > = bookings.reduce((acc, booking) => {
    // Recommend the below in JS Env
    // if (!acc[booking.user]) {
    //   acc[booking.user] = { nights: 0 };
    // }
    // acc[booking.user].nights += booking.nights;

    acc[booking.user] = {
      nights: acc[booking.user]?.nights ?? 0 + booking.nights,
    };
    return acc;
  }, {} as Record<string, { nights: number }>);

  return (
    <ul>
      {Object.entries(bookingsPerUser).map(([user, details]) => (
        <li key={user}>
          {user} - {details.nights} nights
        </li>
      ))}
    </ul>
  );
};

export default UserBookingSummary;
