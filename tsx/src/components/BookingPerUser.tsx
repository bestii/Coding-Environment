const BookingPerUser = () => {
  const bookings = [
    { id: 1, user: "Alice", hotel: "Hotel A", nights: 3 },
    { id: 2, user: "Bob", hotel: "Hotel B", nights: 2 },
    { id: 3, user: "Alice", hotel: "Hotel C", nights: 1 },
  ];

  const bookingsPerUser = bookings.reduce((acc, booking) => {
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

  console.log("🚀 ~ bookingsPerUser ~ bookingsPerUser:", bookingsPerUser);
  return (
    <div>
      <ul>
        {Object.entries(bookingsPerUser).map(([user, value]) => (
          <li key={user}>{`${user} Booked ${value.nights} night/nights`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPerUser;
