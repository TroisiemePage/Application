import {StyleSheet} from "react-native";

const HomeStyle = StyleSheet.create({
    button: {
        width: 150,
        height: 150,
    },
    pageContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: '#FEFBEB'
    },
    pageNavBar: {
        width: 400,
        marginTop: 50
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'stretch'
    },
    featureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEFBEB'
    },
    animationContainer: {
        width: 300,
        height: 300
    },
    backgroundVideo: {
        width: 400,
        height: 400,
        backgroundColor: "transparent"
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    action: {
        textAlign: 'center',
        color: '#0000FF',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#999',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#333',
        fontSize: 80,
    },
});

export default HomeStyle;