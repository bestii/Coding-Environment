const hotels = [
  { id: 1, name: "Hotel A", price: 120 },
  { id: 2, name: "Hotel B", price: 90 },
  { id: 3, name: "Hotel C", price: 150 },
];

const HotelTable = () => {
  const sortedHotels = hotels.toSorted((a, b) => a.price - b.price);

  return (
    <table>
      <thead>
        <tr>
          <th>Hotel Name</th>
          <th>Price (€)</th>
        </tr>
      </thead>
      <tbody>
        {sortedHotels.map((hotel) => (
          <tr key={hotel.id}>
            <td>{hotel.name}</td>
            <td style={{ color: hotel.price > 100 ? "red" : "green" }}>
              {hotel.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HotelTable;
