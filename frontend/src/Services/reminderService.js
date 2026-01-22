const API_BASE = process.env.REACT_APP_BACKEND_API_BASE;

const getAllReminders = async (token) => {
  const res = await fetch(`${API_BASE}/api/reminders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

const addreminder = async (token, reminder) => {
  const res = await fetch(`${API_BASE}/api/reminders/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reminder),
  });

  return res.json();
};

const updateReminder = async (token, reminder) => {
  const res = await fetch(`${API_BASE}/api/reminders/update`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reminder),
  });

  return res.json();
};

const deleteReminder = async (token, reminderId) => {
  const res = await fetch(`${API_BASE}/api/reminders/delete`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(reminderId),
  });

  return res.json();
};

export { getAllReminders, addreminder, deleteReminder, updateReminder };
