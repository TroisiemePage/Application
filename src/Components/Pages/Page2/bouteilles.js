import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";

import Bouteille3 from "../../../Assets/Images/Pages/Page2/bouteille3.png";
import Bouteilles4 from "../../../Assets/Images/Pages/Page2/bouteilles4.png";
import Bouteille5 from "../../../Assets/Images/Pages/Page2/bouteille5.png";
import Bouteille6 from "../../../Assets/Images/Pages/Page2/bouteille6.png";
import Bouteille7 from "../../../Assets/Images/Pages/Page2/bouteille7.png";
import Bouteille8 from "../../../Assets/Images/Pages/Page2/bouteille8.png";
import Bouteilles9 from "../../../Assets/Images/Pages/Page2/bouteilles9.png";
import Bouteille10 from "../../../Assets/Images/Pages/Page2/bouteille10.png";
import Passerelle from "../../../Assets/Images/Pages/Page2/passerelle.png";
import Meuble from "../../../Assets/Images/Pages/Page2/meuble.png";

import Sound from 'react-native-sound';
Sound.setCategory('Playback');
import resolveAssetSource from "resolveAssetSource";
import Glass1 from "../../../Assets/Sound/GLASS_01.mp3";
import Glass2 from "../../../Assets/Sound/GLASS_02.mp3";
import Glass3 from "../../../Assets/Sound/GLASS_03.mp3";
import Glass4 from "../../../Assets/Sound/GLASS_04.mp3";
import Glass5 from "../../../Assets/Sound/GLASS_05.mp3";
import Glass6 from "../../../Assets/Sound/GLASS_06.mp3";
import {SCREEN_RATIO} from "../../../Modules/ration";
const glass1 = new Sound(resolveAssetSource(Glass1).uri, null);
const glass2 = new Sound(resolveAssetSource(Glass2).uri, null);
const glass3 = new Sound(resolveAssetSource(Glass3).uri, null);
const glass4 = new Sound(resolveAssetSource(Glass4).uri, null);
const glass5 = new Sound(resolveAssetSource(Glass5).uri, null);
const glass6 = new Sound(resolveAssetSource(Glass6).uri, null);
export class Bouteilles extends React.Component {

    static stopSound() {
        glass1.stop();
        glass2.stop();
        glass3.stop();
        glass4.stop();
        glass6.stop();
    }

    state = {
        moveBottles: new Array(6).fill("").map(() => new Animated.Value(0)),
    };

    animatedBottlesArray = [];
    animatedBottlesArray = this.state.moveBottles.map((animationValue) => {
        return (
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 290,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })
        );
    });

    bottlesAnimation() {
        Animated.sequence(this.animatedBottlesArray).start();
    }



    render() {
        return(
            <View>
                <TouchableOpacity
                    onPress={ () => {
                            glass1.play()
                        }
                    }
                    style={{zIndex: 1}}
                >
                    <Animated.Image
                        source={Bouteille10}
                        style={{
                            width: 49 * SCREEN_RATIO,
                            height: 89 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 932 * SCREEN_RATIO,
                            top: 451 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[0].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <Image
                    source={Bouteilles9}
                    style={{
                        width: 310 * SCREEN_RATIO,
                        height: 393 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 724 * SCREEN_RATIO,
                        top: 409 * SCREEN_RATIO
                    }}
                />

                <TouchableOpacity
                    onPress={ () => {
                            this.bottlesAnimation();
                            glass2.play();
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille8}
                        style={{
                            width: 41 * SCREEN_RATIO,
                            height: 63 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 918 * SCREEN_RATIO,
                            top: 481 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[1].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={
                        () => {
                            this.bottlesAnimation();
                            glass3.play();
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille7}
                        style={{
                            width: 31 * SCREEN_RATIO,
                            height: 112 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 1000 * SCREEN_RATIO,
                            top: 689 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[2].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => {
                            this.bottlesAnimation();
                            glass4.play()
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille6}
                        style={{
                            width: 69 * SCREEN_RATIO,
                            height: 110 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 738 * SCREEN_RATIO,
                            top: 556 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[3].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => {
                            this.bottlesAnimation();
                            glass5.play()
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille5}
                        style={{
                            width: 40 * SCREEN_RATIO,
                            height: 117 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 817 * SCREEN_RATIO,
                            top: 678 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[4].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <Image
                    source={Bouteilles4}
                    style={{
                        width: 314 * SCREEN_RATIO,
                        height: 393 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 744 * SCREEN_RATIO,
                        top: 403 * SCREEN_RATIO
                    }}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.bottlesAnimation(),
                        glass6.play()
                    }}
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille3}
                        style={{
                            width: 73 * SCREEN_RATIO,
                            height: 105 * SCREEN_RATIO,
                            position: 'absolute',
                            left: 922 * SCREEN_RATIO,
                            top: 682 * SCREEN_RATIO,
                            transform: [{
                                rotate: this.state.moveBottles[5].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg" , "-10deg"],
                                }),
                            }],
                        }}
                    />
                </TouchableOpacity>

                <Image
                    source={Passerelle}
                    style={{width: 67,
                        height: 30 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 910 * SCREEN_RATIO,
                        top: 636 * SCREEN_RATIO
                    }}
                />

                <Image
                    source={Meuble}
                    style={{
                        width: 476 * SCREEN_RATIO,
                        height: 279 * SCREEN_RATIO,
                        position: 'absolute',
                        left: 601 * SCREEN_RATIO,
                        top: 538 * SCREEN_RATIO
                    }}
                />
            </View>
        )
    }
}