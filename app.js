const array = ["10-02-2020", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function filterAndFormatDates(arr) {
  const newArray = [];

  arr.forEach((date) => {

    if (!date.split("/").length === 3 || !date.split("-").length === 3) return;

    let [day, month, year] = "";

    if (date.split("-").length === 3) {
      [day, month, year] = date.split("-");
    }

    if (date.split("/").length === 3) {
      [month, day, year] = date.split("/");
    }

    const isOk = checkDate(day, month, year);
    if (isOk) newArray.push([day, month, year].join("-"));
  });

  return newArray;
}

function checkDate(day, month, year) {
  const dayIsCorrect = day >= 1 && day <= 31;
  const monthIsCorrect = month >= 1 && month <= 12;
  const yearIsCorrect = year >= 2000;

  return dayIsCorrect && monthIsCorrect && yearIsCorrect;
}

console.log(filterAndFormatDates(array));
