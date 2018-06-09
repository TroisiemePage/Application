import * as React from "react";
import {Dimensions, Image, View} from "react-native";
import Decor from "../../Assets/Images/Pages/Page2/02_EcranIpad_DEVELOPPEUR.png";
import {Overlay} from "../PageRouter/PageRouter";
import {words} from "../../Stores/words";

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
            <Overlay {...this.props} wordList={words}>
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