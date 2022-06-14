import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Get A clipper",
    amount: 59.99,
    date: new Date("2022-06-1"),
  },
  {
    id: "e2",
    description: "Go To Club",
    amount: 43.29,
    date: new Date("2021-12-19"),
  },
  {
    id: "e3",
    description: "Some Doughnuts",
    amount: 5.99,
    date: new Date("2022-06-13"),
  },
  {
    id: "e4",
    description: "Get A Book",
    amount: 19.79,
    date: new Date("2022-03-1"),
  },
  {
    id: "e5",
    description: "Buy A Charger",
    amount: 19.79,
    date: new Date("2022-05-1"),
  },
  {
    id: "e6",
    description: "Go To Club",
    amount: 43.29,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "Some Doughnuts",
    amount: 5.99,
    date: new Date("2022-06-13"),
  },
  {
    id: "e8",
    description: "Get A Book",
    amount: 19.79,
    date: new Date("2022-03-1"),
  },
  {
    id: "e9",
    description: "Buy A Charger",
    amount: 19.79,
    date: new Date("2022-05-1"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
