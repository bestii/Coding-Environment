interface Transactions {
  total: string;
  tag: string;
}

interface Data {
  transactions: Transactions[];
}

const data: Data = {
  transactions: [
    { total: "2.99", tag: "drinks" },
    { total: "9.5", tag: "groceries" },
    { total: "12.99", tag: "restaurant" },
    { total: "4.20", tag: "drinks" },
  ],
};

const sumStrings = (a: string, b: string) => {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error(`Invalid number format: ${a} or ${b}`);
  }

  return (numA + numB).toFixed(2);
};

const transformTransactions = (
  data: Data
): Record<string, { total: string; totalTransactions: number }> => {
  if (!data.transactions || data.transactions.length === 0) {
    return {};
  }

  return data.transactions.reduce((acc, { tag, total }) => {
    if (!acc[tag]) {
      acc[tag] = { total: "0", totalTransactions: 0 };
    }

    acc[tag].total = sumStrings(acc[tag].total, total);
    acc[tag].totalTransactions += 1;

    return acc;
  }, {} as Record<string, { total: string; totalTransactions: number }>);
};

const transformedData = transformTransactions(data);
console.log(transformedData);
