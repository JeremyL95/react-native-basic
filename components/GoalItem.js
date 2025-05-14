import { StyleSheet, Text, Pressable } from 'react-native';

export default function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.listText}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listText: {
        borderRadius: 8,
        backgroundColor: 'skyblue',
        padding: 8,
        marginBottom: 8,
        color: '#fff'
    }
})