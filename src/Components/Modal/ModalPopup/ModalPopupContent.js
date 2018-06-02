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
        fontSize: 18,
        marginVertical: 0,
        marginHorizontal: 10,
        textAlign: "center",
        fontWeight: "600",
        color: "#0E0637",
        fontFamily: "Gotham Rounded",
    },
    text: {
        fontSize: 16,
        marginVertical: 15,
        marginHorizontal: 10,
        lineHeight: 18,
        fontFamily: "Gotham Rounded",
        color: "#050A3A"
    },
});