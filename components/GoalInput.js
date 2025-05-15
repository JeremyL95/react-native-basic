import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

export default function GoalInput(props) {
    const [goal, setGoal] = useState('');

    function goalInputHandler(enteredText) {
        setGoal(enteredText);
    }

    function addGoalHandler() {
        if (goal !== "") {
            props.addGoal(goal);
            setGoal('');
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Enter your goal" onChangeText={goalInputHandler} value={goal} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Close" onPress={props.closeModal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccc',
        width: '100%',
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})