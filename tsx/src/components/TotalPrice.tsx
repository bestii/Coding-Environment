const TotalPrice = () => {
  const bookings = [
    { id: 1, price: 120 },
    { id: 2, price: 80 },
    { id: 3, price: 150 },
  ];
  const totalPrice = bookings.reduce((sum, booking) => {
    sum += booking.price;
    return sum;
  }, 0);
  return <div>{`TotalPrice: ${totalPrice}`}</div>;
};

export default TotalPrice;
