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
        fontSize: 19,
        marginVertical: 5,
        marginHorizontal: 10,
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "GothamRounded-Book",
        color: "#050A3A"
    },
    text: {
        fontSize: 15,
        marginVertical: 10,
        marginHorizontal: 10,
        lineHeight: 17,
        fontFamily: "GothamRounded-Light",
        color: "#050A3A"
    },
});