function exchange(money, currencyFrom, currencyTo) {
  switch (currencyFrom) {
    case "RUB":
      return convertRUBTo(money, currencyTo);

    case "USD":
      return convertUSDTo(money, currencyTo);

    case "EUR":
      return convertEURTo(money, currencyTo);

    default:
      return null;
  }
}

function convertRUBTo(money, currencyTo) {
  switch (currencyTo) {
    case "USD":
      return money * 0.01;

    case "EUR":
      return money * 0.0096;

    default:
      return null;
  }
}

function convertUSDTo(money, currencyTo) {
  switch (currencyTo) {
    case "RUB":
      return money * 96.02;

    case "EUR":
      return money * 0.92;

    default:
      return null;
  }
}

function convertEURTo(money, currencyTo) {
  switch (currencyTo) {
    case "RUB":
      return money * 104.23;

    case "USD":
      return money * 1.09;

    default:
      return null;
  }
}

console.log(exchange(1000, "RUB", "USD"));
console.log(exchange(500, "USD", "RUB"));
console.log(exchange(200, "USD", "EUR"));
console.log(exchange(1700, "EUR", "RUB"));
console.log(exchange(600, "CNY", "RUB"));
console.log(exchange(800, "EUR", "CHF"));
