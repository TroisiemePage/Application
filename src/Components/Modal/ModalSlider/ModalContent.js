import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const styles = {
    container: {
        flex: 30,
        margin: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    close: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    closeButton: {
        width: 15,
        height: 15,
    },
    image: {
        width: 151.9,
        height: 238.14,
        alignContent: "center",
        //resizeMode: "center",
    },
    title: {
        fontSize: 20,
        fontFamily: "Adobe Garamond Pro",
        textAlign: "left",
        fontWeight: "100",
        color: "#0E0637",
        marginTop: 40,
    },
    text: {
        fontSize: 12,
        fontFamily: "Gotham Rounded",
        color: "#050A3A",
        marginVertical: 20,
    }
};

export default props => (
    <View>
        <View style={styles.close}>
            <TouchableOpacity onPress={this.setModalVisibility}>
                <Image
                    style={styles.closeButton}
                    source={require('../../../Assets/Images/Elements/close_button.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Image style={styles.image} source={props.image}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </View>
);


