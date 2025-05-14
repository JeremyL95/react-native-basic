import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('');
  const [lists, setLists] = useState([]);

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setGoal(enteredText);
  }

  function addGoalHandler() {
    // console.log(goal);
    setLists((prev => [...prev, { text: goal, id: Math.random().toString() }]));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="your goal" onChangeText={goalInputHandler} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lists of goals</Text>

        <FlatList
          data={lists}
          renderItem={(itemData) => {
            return (
              <Text style={styles.listText}>{itemData.item.text}</Text>
            )
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccc',
    width: '80%',
    padding: 8,
    marginRight: 8
  },
  listContainer: {
    flex: 5,
  },
  listTitle: {
    marginBottom: 8
  },
  listText: {
    borderRadius: 8,
    backgroundColor: 'skyblue',
    padding: 8,
    marginBottom: 8,
    color: '#fff'
  }
});
