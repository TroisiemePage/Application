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
import resolveAssetSource from "resolveAssetSource";
import RoueQuiTournent from "../../../Assets/Sound/ROUE_QUI_TOURNE.mp3";
import SoundVache1 from "../../../Assets/Sound/VACHE_01.mp3";
import LaitVache1 from "../../../Assets/Sound/LAIT_VACHE.mp3";
import SoundVache2 from "../../../Assets/Sound/VACHE_02.mp3";
import LaitVache2 from "../../../Assets/Sound/LAIT_VACHE_2.mp3";

export class Vaches extends React.Component {

    vaches = [Vache1, Vache2, Vache1, Vache2, Vache2];

    offsetValues = [width, 900, 635, 350, 0];

    state = {
        vacheAnimValues: new Array(this.offsetValues.length).fill("").map((v, i) => new Animated.Value(i)),
        generalStep: 1,
        moveRoues: new Animated.Value(0),
        vacheCliqued: false
    };

    rouesQuiTournent = new Sound(resolveAssetSource(RoueQuiTournent).uri, null);
    laitVache1 = new Sound(resolveAssetSource(LaitVache1).uri, null);
    soundVache1 = new Sound(resolveAssetSource(SoundVache1).uri, null);
    laitVache2 = new Sound((resolveAssetSource(LaitVache2).uri, null);
    soundVache2 = new Sound(resolveAssetSource(SoundVache2).uri, null);

    rouesAnimation() {
        this.setState({
            generalStep: this.state.generalStep + 1,
            vacheCliqued: false
        });
        this.rouesQuiTournent.play();

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
                            onPress={() => {
                                if(((this.state.generalStep + i) % (this.vaches.length)) === 4) {
                                    this.setState({vacheCliqued: true});
                                    this.laitVache1.play();
                                }
                                this.soundVache1.play();
                            }}
                        >
                            <Animated.Image
                                key={i}
                                source={vacheImage}
                                style={{
                                    width: 178,
                                    height: 178,
                                    position: "absolute",
                                    left: this.state.vacheAnimValues[i].interpolate({
                                        inputRange: [0, 1, 2, 3, 4],
                                        outputRange: this.offsetValues
                                    }),
                                    top: 92
                                }}
                            />
                        </TouchableOpacity>
                    );
                })}

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
                    onPress={() => this.rouesAnimation()}>
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
                                    outputRange: ["0deg", "-360deg"],
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
                {(() => {
                    if(this.state.vacheCliqued) {
                        return (
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    top: 186,
                                    width: 100,
                                    height: height / 1.7,
                                    left: 399,
                                }}
                            >
                                <ApngPlayer
                                    ref={"lait"}
                                    scale={0.45}
                                    maxFrameSize={height / 1.7}
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