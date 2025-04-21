const data = {
  transactions: [{ "total": "2.99", "tag": "drinks" }, { "total": "9.5", "tag": "groceries" }, { "total": "12.99", "tag": "restaurant" }, { "total": "4.20", "tag": "drinks" }]
}

const transformTransactions = (data) => {
  const chartData = {};
  const transactions = data.transactions;

  transactions.forEach((
    { tag, total }
  ) => {
    const amount = parseFloat(total);

    if (!chartData[tag]) {
      chartData[tag] = { total: 0, totalTransactions: 0 };
    }

    chartData[tag].total += amount;
    chartData[tag].totalTransactions += 1;
  });

  for (const key in chartData) {
    chartData[key].total = chartData[key].total.toFixed(2);
  }

  return chartData;
}


const transformedData = transformTransactions(data)
console.log(transformedData);


