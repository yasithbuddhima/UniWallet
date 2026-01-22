const API_BASE = process.env.REACT_APP_BACKEND_API_BASE;

// Method to get all Expenses
const getAllExpenses = async (token) => {
  const res = await fetch(`${API_BASE}/api/expense`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

const addExpense = async (token, expense) => {
  const res = await fetch(`${API_BASE}/api/expense/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expense),
  });

  return res.json();
};

const updateExpense = async (token, expense) => {
  const res = await fetch(`${API_BASE}/api/expense/update`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expense),
  });

  return res.json();
};

const deleteExpense = async (token, expenseId) => {
  const res = await fetch(`${API_BASE}/api/expense/delete`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(expenseId),
  });

  return res.json();
};

export { getAllExpenses, addExpense, deleteExpense, updateExpense };
