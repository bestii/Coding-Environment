const UniqueCities = () => {
  const hotels = [
    { name: "Hotel A", city: "Berlin" },
    { name: "Hotel B", city: "Paris" },
    { name: "Hotel C", city: "Berlin" },
  ];
  const uniqueCities = Array.from(new Set(hotels.map((hotel) => hotel.city)));
  return (
    <ul>
      {uniqueCities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export default UniqueCities;
