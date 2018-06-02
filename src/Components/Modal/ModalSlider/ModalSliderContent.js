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
        //resizeMode: "center",
    },
};

export default props => (
    <View>
        <View style={styles.close}>
            <TouchableOpacity onPress={props.closeEvent}>
                <Image
                    style={styles.closeButton}
                    source={require('../../../Assets/Images/Elements/close_button.png')}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            {props.children}
        </View>
    </View>
);


