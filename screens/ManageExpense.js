import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId; // Javascrpt trick to convert a value to a boolean (falsy value to false, truthy value to true)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>Manage Expense Screen</Text>;
};

export default ManageExpense;
