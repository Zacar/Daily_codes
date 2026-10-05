const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [num, setNum] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("EUR");
  const conversion = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const currencyOptions = Object.keys(conversion);

  const amountInUSD = useMemo(() => {
    return num / conversion[fromCurr];
  }, [num, fromCurr]);

  const finalAmount = amountInUSD * conversion[toCurr];
  const convertedAmount = isNaN(finalAmount) ? "0.00" : finalAmount.toFixed(2);

  return (
    <div>
      <label>
        {fromCurr} to {toCurr}:{" "}
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </label>

      <label>
        From:
        <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)}>
          {currencyOptions.map((key) => (
            <option key={key} valye={key}>
              {key}
            </option>
          ))}
        </select>
      </label>

      <label>
        To:
        <select value={toCurr} onChange={(e) => setToCurr(e.target.value)}>
          {currencyOptions.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>

      <h3>
        Result: {num} {fromCurr} to {convertedAmount} {toCurr}
      </h3>
    </div>
  );
}
