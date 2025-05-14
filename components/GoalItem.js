import { StyleSheet, Text } from 'react-native';

export default function GoalItem(props) {
    return <Text style={styles.listText}>{props.text}</Text>
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