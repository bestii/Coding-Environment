const FilterByRatings = () => {
  const hotels = [
    { name: "Hotel A", rating: 4.5 },
    { name: "Hotel B", rating: 3.2 },
    { name: "Hotel C", rating: 4.8 },
  ];
  const filteredHotels = hotels.filter((hotel) => hotel.rating > 4);
  return <div>{`${JSON.stringify(filteredHotels)}`}</div>;
};

export default FilterByRatings;
