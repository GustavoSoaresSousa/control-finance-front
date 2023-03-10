import { useContext } from "react";
import { FinanceContext } from "../contexts/FinanceContext";

export function useFinance(){
  const value = useContext(FinanceContext)
  return value
}