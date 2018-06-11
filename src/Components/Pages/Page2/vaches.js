import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";
import Sound from "react-native-sound/";

const {height, width} = Dimensions.get('window');

import Lait from "../../../Assets/Animations/Pages/compiled/LAIT.png";
import Roue1 from "../../../Assets/Images/Pages/Page2/roue1.png";
import Roue2 from "../../../Assets/Images/Pages/Page2/roue2.png";
import Roue3 from "../../../Assets/Images/Pages/Page2/roue3.png";
import Roue4 from "../../../Assets/Images/Pages/Page2/roue4.png";
import Roue5 from "../../../Assets/Images/Pages/Page2/roues5.png";
import Vache1 from "../../../Assets/Images/Pages/Page2/vache1.png";
import Vache2 from "../../../Assets/Images/Pages/Page2/vache2.png";
import Tuyeaux from "../../../Assets/Images/Pages/Page2/tuyeaux.png";

import RoueQuiTournent from "../../../Assets/Sound/ROUE_QUI_TOURNE.mp3";
import LaitVache1 from "../../../Assets/Sound/LAIT_VACHE.mp3";
import LaitVache2 from "../../../Assets/Sound/LAIT_VACHE_2.mp3";

export class Vaches extends React.Component {

    vaches = [Vache1, Vache2, Vache1, Vache2, Vache2];

    offsetValues = [230, 460, 690, 910, -200];
    vacheAnimStep = new Array(this.offsetValues.length).fill("").map((v, i) => i);
    state = {
        vacheAnimValues: new Array(this.offsetValues.length).fill("").map((v, i) => new Animated.Value(i)),
        moveRoues: new Animated.Value(0),
        vache1Cliqued: false,
        vache2Cliqued: false,
        vache3Cliqued: false,
    };

    rouesQuiTournent = new Sound(RoueQuiTournent, null);
    laitVache1 = new Sound(LaitVache1, null);
    laitVache2 = new Sound(LaitVache2, null);

    rouesAnimation() {
        this.rouesQuiTournent.play();
        this.vacheAnimStep.map((step) => step + 1);
        Animated.parallel(this.vacheAnimStep
            .map((step) => step + 1)
            .map((vacheStep, i) => {
                return Animated.timing(this.state.vacheAnimValues[i], {
                    toValue: vacheStep,
                    duration: (vacheStep === (this.offsetValues.length - 1)) ? 0 : 1000
                })
            })
        ).start();
    }

    render() {

        return (
            <View>

                {this.vaches.map((vacheImage, i) => {
                        this.offsetValues.push(this.offsetValues.shift());
                        return (
                            <TouchableWithoutFeedback key={i}>
                                <Animated.Image
                                    source={vacheImage}
                                    style={{
                                        width: 178,
                                        height: 178,
                                        position: 'absolute',
                                        right: this.state.vacheAnimValues[i].interpolate({
                                            inputRange: [0, 1, 2, 3, 4],
                                            outputRange: this.offsetValues,
                                        }),
                                        top: 92
                                    }}
                                />
                            </TouchableWithoutFeedback>
                        );
                    })
                }


                <Image
                    source={Tuyeaux}
                    style={{
                        width: 782,
                        height: 358,
                        position: 'absolute',
                        left: -560,
                        top: -40,
                        zIndex: 0
                    }}
                />

                <Animated.Image
                    source={Roue4}
                    style={{
                        width: 87,
                        height: 87,
                        position: 'absolute',
                        left: 1023,
                        top: 96,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["60deg", "300deg"],
                            }),
                        }],
                    }}
                />

                <TouchableWithoutFeedback
                    onPress={() => this.rouesAnimation()}
                >
                    <Animated.Image
                        source={Roue1}
                        style={{
                            width: 127,
                            height: 127,
                            position: 'absolute',
                            left: 960,
                            top: 285,
                            transform: [{
                                rotate: this.state.moveRoues.interpolate({
                                    inputRange: [0, 3],
                                    outputRange: ["0deg", "360deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.Image
                    source={Roue2}
                    style={{
                        width: 114,
                        height: 115,
                        position: 'absolute',
                        left: 1000,
                        top: 180,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue3}
                    style={{
                        width: 143,
                        height: 140,
                        position: 'absolute',
                        left: 887,
                        top: 97,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 220,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 351,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 491,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 621,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 756,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 887,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

                <Animated.Image
                    source={Roue5}
                    style={{
                        width: 63,
                        height: 60,
                        position: 'absolute',
                        left: 1026,
                        top: 36,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />

            </View>


        )
    }
}