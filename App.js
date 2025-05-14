import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [lists, setLists] = useState([]);

  function addGoalHandler(goal) {
    setLists((prev => [...prev, { text: goal, id: Math.random().toString() }]));
  }

  function removeGoalHandler(id) {
    setLists((currentLists) => {
      return currentLists.filter((currentList) => currentList.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoalHandler} />

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lists of goals</Text>

        <FlatList
          data={lists}
          renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={removeGoalHandler} />
          }}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  listContainer: {
    flex: 5,
  },
  listTitle: {
    marginBottom: 8
  }
});
