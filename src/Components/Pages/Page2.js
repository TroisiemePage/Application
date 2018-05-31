import * as React from "react";
import {Dimensions, Image, Text, View, StyleSheet} from "react-native";
import Decor from "../../Assets/Images/Pages/Page2/illuTemp.png";
import {Page1} from "./Page1/Page1";
import {Overlay} from "../PageRouter/PageRouter";

const {height, width} = Dimensions.get('window');
const styles ={
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end"
    }
};

export class Page2 extends React.Component {
    render() {
        return (
            <Overlay {...this.props}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />
                </View>
            </Overlay>
        )
    }
}
Page2.navigationOptions = {
    header: null
};