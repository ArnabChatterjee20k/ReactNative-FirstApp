import { createContext, useContext, useState } from "react";

const GoalContextProvider = createContext();

export const useGoalContext = () => useContext(GoalContextProvider);

export default function GoalContext({ children }) {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");
  return (
    <GoalContextProvider.Provider value={{goals,setGoals,input,setInput}}>{children}</GoalContextProvider.Provider>
  );
}
