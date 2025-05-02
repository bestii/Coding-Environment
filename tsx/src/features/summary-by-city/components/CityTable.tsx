import { City } from "../types";

interface CityTableProps {
  cityInfo: City;
  name: string;
}

const HIGH_DEMAND_THRESHOLD = 1000;
const HIGH_CONTRIBUTION = 30;

const CityTable = ({ name, cityInfo }: CityTableProps) => {
  const isHighDemand = cityInfo.totalAmount >= HIGH_DEMAND_THRESHOLD;

  return (
    <div>
      <h2>{name + (isHighDemand ? " (HIGH DEMAND)" : "")}</h2>
      <table border={1} cellPadding={5} style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nights</th>
            <th>Total Amount (€)</th>
            <th>Contribution %</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cityInfo.users)
            .sort(([, a], [, b]) => b.totalAmount - a.totalAmount)
            .map(([name, userStats]) => {
              const contribution =
                (userStats.totalAmount / cityInfo.totalAmount) * 100;

              const contributionText = `${contribution.toFixed(2)}% ${
                contribution > HIGH_CONTRIBUTION ? " 🔥" : ""
              }`;
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{userStats.nights}</td>
                  <td>{userStats.totalAmount}</td>
                  <td>{contributionText}</td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{cityInfo.totalNights}</td>
            <td>{cityInfo.totalAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CityTable;
