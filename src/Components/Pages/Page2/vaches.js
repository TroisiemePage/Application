import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import ApngPlayer from "../../ApngPlayer/ApngPlayer";

const {height, width} = Dimensions.get('window');

import Lait from "../../../Assets/Animations/Pages/compiled/LAIT.png";
import Roue1 from "../../../Assets/Images/Pages/Page2/roue1.png";
import Roue2 from "../../../Assets/Images/Pages/Page2/roue2.png";
import Roue3 from "../../../Assets/Images/Pages/Page2/roue3.png";
import Roue4 from "../../../Assets/Images/Pages/Page2/roue4.png";
import Roue5 from "../../../Assets/Images/Pages/Page2/roue5.png";
import Vache1 from "../../../Assets/Images/Pages/Page2/vache1.png";
import Vache2 from "../../../Assets/Images/Pages/Page2/vache2.png";
import Tuyeaux from "../../../Assets/Images/Pages/Page2/tuyeaux.png";

import Sound from 'react-native-sound';
Sound.setCategory('Playback');
import resolveAssetSource from "resolveAssetSource";
import RoueQuiTournent from "../../../Assets/Sound/ROUE_MACHINE_VACHE.mp3";
import SoundVache1 from "../../../Assets/Sound/VACHE_01.mp3";
import LaitVache1 from "../../../Assets/Sound/LAIT_VACHE.mp3";
import SoundVache2 from "../../../Assets/Sound/VACHE_02.mp3";
import LaitVache2 from "../../../Assets/Sound/LAIT_VACHE_2.mp3";
import {SCREEN_RATIO} from "../../../Modules/ration";


const rouesQuiTournent = new Sound(resolveAssetSource(RoueQuiTournent).uri, null);
const laitVache1 = new Sound(resolveAssetSource(LaitVache1).uri, null);
const soundVache1 = new Sound(resolveAssetSource(SoundVache1).uri, null);
const laitVache2 = new Sound(resolveAssetSource(LaitVache2).uri, null);
const soundVache2 = new Sound(resolveAssetSource(SoundVache2).uri, null);
export class Vaches extends React.Component {

    static stopSound() {
        rouesQuiTournent.stop();
        laitVache1.stop();
        soundVache1.stop();
        laitVache2.stop();
        soundVache2.stop();
    }

    vaches = [Vache1, Vache2, Vache1, Vache2, Vache2];

    offsetValues = [
        width,
        900 * SCREEN_RATIO,
        635 * SCREEN_RATIO,
        350 * SCREEN_RATIO,
        0
    ];

    state = {
        vacheAnimValues: new Array(this.offsetValues.length).fill("").map((v, i) => new Animated.Value(i)),
        generalStep: 1,
        moveRoues: new Animated.Value(0),
        vacheCliqued: false
    };

    rouesAnimation() {
        this.setState({
            generalStep: this.state.generalStep + 1,
            vacheCliqued: false
        });
        rouesQuiTournent.play();

        Animated.parallel([
            ...this.state.vacheAnimValues.map((val, i) => {
                let targetValue = ((this.state.generalStep + i) % (this.vaches.length));
                return Animated.timing(val, {
                    toValue: targetValue,
                    duration: targetValue > 0 ? 1000 : 0
                });
            }),
            Animated.sequence([
                Animated.timing(this.state.moveRoues, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(this.state.moveRoues, {
                    toValue: 0,
                    duration: 0
                })
            ])
        ]).start();

    }

    render() {
        return (
            <View>
                {this.vaches.map((vacheImage, i) => {
                    return (
                        <TouchableOpacity
                            key={i}
                            onPress={() => {
                                if(((this.state.generalStep + i) % (this.vaches.length)) === 4) {
                                    this.setState({vacheCliqued: true});
                                    laitVache1.play();
                                }
                                soundVache1.play();
                            }}
                        >
                            <Animated.Image
                                source={vacheImage}
                                style={{
                                    width: 178 * SCREEN_RATIO,
                                    height: 178 * SCREEN_RATIO,
                                    position: "absolute",
                                    left: this.state.vacheAnimValues[i].interpolate({
                                        inputRange: [0, 1, 2, 3, 4],
                                        outputRange: this.offsetValues
                                    }),
                                    top: 92 * SCREEN_RATIO
                                }}
                            />
                        </TouchableOpacity>
                    );
                })}

                <Image
                    source={Tuyeaux}
                    style={{
                        width: 782 * SCREEN_RATIO,
                        height: 358 * SCREEN_RATIO,
                        position: 'absolute',
                        left: -560 * SCREEN_RATIO,
                        top: -40 * SCREEN_RATIO,
                        zIndex: 0
                    }}
                />

                <Animated.Image
                    source={Roue4}
                    style={{
                        width: 87 * SCREEN_RATIO,
                        height: 87 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 1023 * SCREEN_RATIO,
                        top: 96 * SCREEN_RATIO,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["60deg", "300deg"],
                            }),
                        }],
                    }}
                />

                <TouchableWithoutFeedback
                    onPress={() => this.rouesAnimation()}>
                    <Animated.Image
                        source={Roue1}
                        style={{
                            width: 127 * SCREEN_RATIO,
                            height: 127 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 960 * SCREEN_RATIO,
                            top: 285 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveRoues.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "-360deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.Image
                    source={Roue2}
                    style={{
                        width: 114 * SCREEN_RATIO,
                        height: 115 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 1000 * SCREEN_RATIO,
                        top: 180 * SCREEN_RATIO,
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
                        width: 143 * SCREEN_RATIO,
                        height: 140 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 887 * SCREEN_RATIO,
                        top: 97 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 220 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 351 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 491 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 621 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 756 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 887 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
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
                        width: 63 * SCREEN_RATIO,
                        height: 60 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 1026 * SCREEN_RATIO,
                        top: 36 * SCREEN_RATIO,
                        transform: [{
                            rotate: this.state.moveRoues.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-360deg"],
                            }),
                        }],
                    }}
                />
                {(() => {
                    if(this.state.vacheCliqued) {
                        return (
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    top: 186 * SCREEN_RATIO,
                                    width: 100 * SCREEN_RATIO,
                                    height: (height / 1.7),
                                    left: 399 * SCREEN_RATIO,
                                }}
                            >
                                <ApngPlayer
                                    ref={"lait"}
                                    scale={0.45 * SCREEN_RATIO}
                                    maxFrameSize={(height / 1.7)}
                                    playlist={[Lait]}
                                    onPlaylistItemFinish={(playlistIndex) => {
                                        this.setState({vacheCliqued: false})
                                    }}
                                />
                            </Animated.View>
                        );
                    }
                })()}


            </View>


        )
    }
}