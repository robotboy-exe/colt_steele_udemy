const income = [{Desc: 'salary', Amount: 30}, {Desc: 'jackpot', Amount: 500}];

addIncome = (incType, amt) => {
  const inc= {Desc: incType, Amount: amt};
  income.push(inc)
  return `Income: '${incType}' has been Added`
}

const expenses = [{Desc: 'oscroh', Amount: 809}, {Desc: 'food', Amount: 59}]

addExpense = (expType, amt) => {
  const exp = {Desc: expType, Amount: amt};
  expenses.push(exp)
  return `Expense: '${expType}' has been Recorded`
}

showBalance = () => {
  let inTotal = 0
  let outTotal = 0
  for (let inflow of income) {
    inTotal += inflow.Amount
  }
  for (let outflow of expenses) {
    outTotal += outflow.Amount
  }
  let balance = inTotal - outTotal
  return `$${balance}`
}