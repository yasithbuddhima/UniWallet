import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getUserBudget, updateUserBudget } from "../Services/userService";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [budget, setBudget] = useState(20000);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      const token = await auth.currentUser.getIdToken();
      const data = await getUserBudget(token);
      setBudget(data.budget || 20000);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const updateBudget = async (newBudget) => {
    setBudget(newBudget);
    const token = await auth.currentUser.getIdToken();
    updateUserBudget(token, newBudget);
  };

  return (
    <UserContext.Provider value={{ user, loading, budget, updateBudget }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
