const getUnique = (hotels: { name: string; city: string }[]): string[] => {
  const uniqueSet = new Set<string>();
  for (const hotel of hotels) {
    uniqueSet.add(hotel.city);
  }

  return Array.from(uniqueSet);
};

const UniqueCities = () => {
  const hotels = [
    { name: "Hotel A", city: "Berlin" },
    { name: "Hotel B", city: "Paris" },
    { name: "Hotel C", city: "Berlin" },
  ];
  const uniqueCities = getUnique(hotels);
  return (
    <ul>
      {uniqueCities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export default UniqueCities;
