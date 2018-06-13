import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import {Overlay} from "../../PageRouter/PageRouter";
import {words} from "../../../Stores/words";
import {Levier} from "./levier";
import {Vaches} from "./vaches";
import {Bouteilles} from "./bouteilles";

import Decor from "../../../Assets/Images/Pages/Page2/decor.png";

import Sound from 'react-native-sound';
Sound.setCategory('PlayAndRecord');
import resolveAssetSource from "resolveAssetSource";
import SoundVaches from  "../../../Assets/Sound/ROUE_MACHINE_VACHE.mp3";

const {height, width} = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height,
        backgroundColor: "#fff1d0"
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end",
        position: 'absolute',
    }
};
const fondSonoreVaches = new Sound(resolveAssetSource(SoundVaches).uri, null, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    fondSonoreVaches.setNumberOfLoops(-1);
});
export class Page2 extends React.Component {


    static componentVisible() {
        fondSonoreVaches.play();
    }

    static componentWillDisapear() {
        fondSonoreVaches.stop();
        Levier.stopSound();
        Bouteilles.stopSound();
        Vaches.stopSound();
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