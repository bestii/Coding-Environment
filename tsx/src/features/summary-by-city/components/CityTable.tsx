import { City } from "../types";

interface CityTableProps {
  cityInfo: City;
  name: string;
}

const CityTable = ({ name, cityInfo }: CityTableProps) => {
  console.log("🚀 ~ CityTable ~ cityInfo:", cityInfo);

  return (
    <div>
      <h2>{name}</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nights</th>
            <th>Total Amount (€)</th>
            <th>Contribution %</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CityTable;
