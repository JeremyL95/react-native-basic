import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [lists, setLists] = useState([]);

  function addGoalHandler(goal) {
    setLists((prev => [...prev, { text: goal, id: Math.random().toString() }]));
    hideModalVisibility();
  }

  function removeGoalHandler(id) {
    setLists((currentLists) => {
      return currentLists.filter((currentList) => currentList.id !== id)
    })
    hideModalVisibility();
  }

  function handleModalVisibility() {
    setModalVisible(prev => !prev)
  }

  function hideModalVisibility() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.btnAdd}>
          <Button
            title="Add New Goal"
            color="#87ceeb"
            onPress={handleModalVisibility} />
        </View>

        {modalVisible &&
          <GoalInput
            addGoal={addGoalHandler}
            visible={modalVisible}
            closeModal={hideModalVisibility} />
        }

        <View style={styles.listContainer}>
          <FlatList
            data={lists}
            renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={removeGoalHandler} />
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  listContainer: {
    flex: 5,
  },
  btnAdd: {
    marginBottom: 16
  }
});
