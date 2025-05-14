import { StyleSheet, Text, Pressable, View } from 'react-native';

export default function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Pressable
                android_ripple={{ color: '#cfecf' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.listText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        backgroundColor: 'skyblue',
        padding: 8,
        marginBottom: 8,
    },
    listText: {
        color: '#fff'
    },
    pressedItem: {
        opacity: 0.5,
    }
})