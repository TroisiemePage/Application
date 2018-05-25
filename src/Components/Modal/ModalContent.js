import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default props => (
    <View style={styles.card}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.children}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 10,
        color: "#000",
    },
});