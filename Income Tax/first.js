const form = document.querySelector("form");
const result = document.querySelector("#result");
const input = document.querySelector("#income");
const standardDeduction = 75000;

function taxSlab(income) {
  if (income <= 400000) return 0;
  else if (income > 400000 && income <= 800000) return 5;
  else if (income > 800000 && income <= 1200000) return 10;
  else if (income > 1200000 && income <= 1600000) return 15;
  else if (income > 1600000 && income <= 2000000) return 20;
  else if (income > 2000000 && income <= 2400000) return 25;
  else return 30;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const income = Number(input.value);
  if (income < 0) {
    result.textContent = `Enter a valid income`;
    return;
  }
  const taxableIncome = income - standardDeduction;

  const tax = taxSlab(taxableIncome);
  const taxAmount = Math.floor((taxableIncome * tax) / 100);

  result.textContent = `Your tax amount: ${taxAmount}`;
});

input.addEventListener("input", () => {
  result.textContent = "";
});
