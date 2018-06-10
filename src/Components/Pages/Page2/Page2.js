import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import {Overlay} from "../../PageRouter/PageRouter";

import Sound from 'react-native-sound';
import {words} from "../../../Stores/words";

import Decor from "../../../Assets/Images/Pages/Page2/decor.png";
import {Levier} from "./levier";
import {Vaches} from "./vaches";
import {Bouteilles} from "./bouteilles";

const {height, width} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end",
        position: 'absolute',
    }
};

export class Page2 extends React.Component {

    fondSonoreVaches = new Sound('Sound/FOND_SONORE_MACHINE_VACHE.mp3', Sound.MAIN_BUNDLE);

    componentDidMount() {
        this.fondSonoreVaches.play();
    }

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

                    <Bouteilles/>
                    <Vaches/>
                    <Levier/>
                </View>
            </Overlay>
        )
    }
}

Page2.navigationOptions = {
    header: null
};