import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import Sound from "react-native-sound/";
const {height, width} = Dimensions.get('window');
import ApngPlayer from "../../ApngPlayer/ApngPlayer";

import Lait from "../../../Assets/Animations/Pages/compiled/LAIT.png";
import Roue1 from "../../../Assets/Images/Pages/Page2/roue1.png";
import Roue2 from "../../../Assets/Images/Pages/Page2/roue2.png";
import Roue3 from "../../../Assets/Images/Pages/Page2/roue3.png";
import Roue4 from "../../../Assets/Images/Pages/Page2/roue4.png";
import Roue5 from "../../../Assets/Images/Pages/Page2/roues5.png";
import Vache1 from "../../../Assets/Images/Pages/Page2/vache1.png";
import Vache2 from "../../../Assets/Images/Pages/Page2/vache2.png";
import Tuyeaux from "../../../Assets/Images/Pages/Page2/tuyeaux.png";

export class Vaches extends React.Component {

    state = {
        moveRoues: new Animated.Value(0),
        vache1Cliqued: false,
        vache2Cliqued: false,
        vache3Cliqued: false,
    };

    rouesQuiTournent = new Sound('Sound/ROUE_QUI_TOURNE.mp3', Sound.MAIN_BUNDLE);
    laitVache1 = new Sound('Sound/LAIT_VACHE.mp3', Sound.MAIN_BUNDLE);
    laitVache2 = new Sound('Sound/LAIT_VACHE_2.mp3', Sound.MAIN_BUNDLE);

    rouesAnimation() {
        this.rouesQuiTournent.play();
        Animated.sequence([
            Animated.timing(this.state.moveRoues, {
                toValue: 1,
                duration: 3000,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            }),
            Animated.timing(this.state.moveRoues, {
                toValue: 0,
                duration: 0,
                delay: 0,
                easing: Easing.bezier(.57,.31,.29,.93),
            })
        ]).start();
    }

    render() {
        let laitVache1, laitVache2;

        if (this.state.vache1Cliqued) {
            laitVache1 = (
                <Animated.View
                    style={{
                        position: "absolute",
                        width: 100,
                        height: height / 1.7,
                        top: 188,
                        left: 500,
                    }}
                >
                    <ApngPlayer
                        ref={"lait"}
                        scale={0.45}
                        maxFrameSize={ height / 1.7}
                        playlist={[Lait]}
                        onPress={() => console.log("pressed on lait")}
                        onPlaylistItemFinish={(playlistIndex) => {
                            this.setState({ vache1Cliqued : false})
                        }}
                    />
                </Animated.View>
            );
        }

        if (this.state.vache2Cliqued) {
            laitVache2 = (
                <Animated.View
                    style={{
                        position: "absolute",
                        top: 170,
                        width: 100,
                        height: height / 1.7,
                        left: 290,
                    }}
                >
                    <ApngPlayer
                        ref={"lait"}
                        scale={0.45}
                        maxFrameSize={ height / 1.7}
                        playlist={[Lait]}
                        onPlaylistItemFinish={(playlistIndex) => {
                            this.setState({ vache2Cliqued : false})
                        }}
                    />
                </Animated.View>
            );
        }

        return (
            <View>
                <TouchableWithoutFeedback
                    onPress={() => {
                            this.setState({ vache1Cliqued: true });
                            this.laitVache1.play();
                        }
                    }
                >
                    <Animated.Image
                        source={Vache1}
                        style={{
                            width: 178,
                            height: 178,
                            position: 'absolute',
                            left: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: [460, -100],
                            }),
                            top: 92
                        }}
                    />
                </TouchableWithoutFeedback>
                {laitVache1}


                <TouchableWithoutFeedback
                    onPress={() => {
                            this.setState({ vache2Cliqued: true });
                            this.laitVache2.play()
                    }}
                >
                    <Animated.Image
                        source={Vache2}
                        style={{
                            width: 177,
                            height: 173,
                            position: 'absolute',
                            left: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: [246, -400],
                            }),
                            top: 92
                        }}
                    />
                </TouchableWithoutFeedback>
                {laitVache2}


                <TouchableWithoutFeedback
                    onPress={() => {
                            this.setState({ vache3Cliqued: true });
                            this.laitVache1.play();
                        }
                    }
                >
                    <Animated.Image
                        source={Vache2}
                        style={{
                            width: 178,
                            height: 178,
                            position: 'absolute',
                            left: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: [560, -100],
                            }),
                            top: 92
                        }}
                    />
                </TouchableWithoutFeedback>

                <Image
                    source={Tuyeaux}
                    style={{
                        width: 782,
                        height:  358,
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
                                outputRange: ["60deg" , "300deg"],
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
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
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
                                outputRange: ["0deg" , "-360deg"],
                            }),
                        }],
                    }}
                />

            </View>



        )
    }
}