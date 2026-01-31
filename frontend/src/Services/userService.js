const API_BASE = process.env.REACT_APP_BACKEND_API_BASE;

const getUserBudget = async (token) => {
  const res = await fetch(`${API_BASE}/api/user/budget`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

const updateUserBudget = async (token, budget) => {
  const res = await fetch(`${API_BASE}/api/user/budget`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ budget }),
  });
  return res.json();
};

export { getUserBudget, updateUserBudget };
