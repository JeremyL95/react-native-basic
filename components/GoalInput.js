import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

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
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput style={styles.textInput} placeholder="Enter your goal" onChangeText={goalInputHandler} value={goal} />

                <View style={styles.buttonContainer}>
                    <View style={styles.btnCancel}>
                        <Button title="Close" onPress={props.closeModal} color="#ff0000" />
                    </View>
                    <View style={styles.btnAdd}>
                        <Button title="Add" onPress={addGoalHandler} color="#87ceeb" />
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
    btnCancel: {
        width: 100,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    btnAdd: {
        width: 100,
        marginHorizontal: 8,
        borderRadius: 10
    },
    image: {
        width: 64,
        height: 64,
        margin: 20
    }
})