import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";

import Pots from "../../../Assets/Images/Pages/Page2/pots.png";
import LevierImg from "../../../Assets/Images/Pages/Page2/levier.png";

import Sound from "react-native-sound/";
Sound.setCategory('Playback');
import resolveAssetSource from "resolveAssetSource";
import TapisRoulant from "../../../Assets/Sound/TAPIS_ROULANT.mp3";
import LevierSound from "../../../Assets/Sound/LEVIER.mp3";
import {SCREEN_RATIO} from "../../../Modules/ration";
const tapisRoulant = new Sound(resolveAssetSource(TapisRoulant).uri, null);
const levier = new Sound(resolveAssetSource(LevierSound).uri, null);

export class Levier extends React.Component {

    static stopSound() {
        tapisRoulant.stop();
        levier.stop();
    }

    state = {
        moveLevier: new Animated.Value(0),
    };

    levierAnimation() {
        levier.play();
        tapisRoulant.play();

        Animated.sequence([
            Animated.timing(this.state.moveLevier, {
                toValue: 1,
                duration: 2715,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            }),
            Animated.timing(this.state.moveLevier, {
                toValue: 0,
                duration: 2715,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            })
        ]).start();
    }



    render() {
        return(
            <View>
                <Animated.Image
                    source={Pots}
                    style={{
                        width: 1074 * SCREEN_RATIO,
                        height: 347 * SCREEN_RATIO,
                        position: 'absolute',
                        left: this.state.moveLevier.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-508 * SCREEN_RATIO , -1200 * SCREEN_RATIO],
                        }),
                        top: 329 * SCREEN_RATIO,
                    }}
                />

                <TouchableWithoutFeedback
                    onPress={() => this.levierAnimation()}
                >
                    <Animated.View style={{
                        width: 130 * SCREEN_RATIO,
                        height: 200 * SCREEN_RATIO,
                        left: 565 * SCREEN_RATIO,
                        top: 515 * SCREEN_RATIO,
                        alignItems: "flex-end",
                        transform: [{
                            rotate: this.state.moveLevier.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg" , "-50deg"],
                            }),
                        }],
                    }}>
                        <Image
                            source={LevierImg}
                            style={{
                                width: 65 * SCREEN_RATIO,
                                height: 100 * SCREEN_RATIO,
                                position: 'absolute',
                            }}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}