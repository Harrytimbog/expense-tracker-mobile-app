import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
