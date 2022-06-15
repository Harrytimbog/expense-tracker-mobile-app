import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expense-tra-ad38d-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
