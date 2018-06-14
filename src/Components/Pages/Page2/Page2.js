import * as React from "react";
import {Dimensions, Image, View} from "react-native";
import {Overlay} from "../../PageRouter/PageRouter";
import {words} from "../../../Stores/words";
import {Levier} from "./levier";
import {Vaches} from "./vaches";
import {Bouteilles} from "./bouteilles";

import Decor from "../../../Assets/Images/Pages/Page2/decor.png";

import Sound from 'react-native-sound';
Sound.setCategory('PlayAndRecord');
import resolveAssetSource from "resolveAssetSource";
import SoundVaches from  "../../../Assets/Sound/FOND_SONORE_MACHINE_VACHE.mp3";
import Manicule from "../../Manicule/Manicule";

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
export class Page2 extends React.Component {

    static componentVisible() {
    }

    static componentWillDisapear() {
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
                    <Manicule
                        x={440}
                        y={285}
                        scale={0.7}
                        rotation="0deg"
                        color="black"
                    />
                    <Manicule
                        x={655}
                        y={417}
                        scale={0.7}
                        rotation="180deg"
                        color="black"
                    />
                    <Manicule
                        x={885}
                        y={320}
                        scale={0.7}
                        rotation="90deg"
                        color="black"
                    />
                </View>
            </Overlay>
        )
    }
}

Page2.navigationOptions = {
    header: null
};