import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function GoalInput(props) {
    const [goal, setGoal] = useState('');

    function goalInputHandler(enteredText) {
        setGoal(enteredText);
    }

    function addGoalHandler() {
        props.addGoal(goal);
        setGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Enter your goal" onChangeText={goalInputHandler} value={goal} />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})