import * as React from "react";
import {Dimensions, Image, View, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing} from "react-native";
import Sound from "react-native-sound/";

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

import Glass1 from "../../../Assets/Sound/GLASS_01.mp3";
import Glass2 from "../../../Assets/Sound/GLASS_02.mp3";
import Glass3 from "../../../Assets/Sound/GLASS_03.mp3";
import Glass4 from "../../../Assets/Sound/GLASS_04.mp3";
import Glass5 from "../../../Assets/Sound/GLASS_05.mp3";
import Glass6 from "../../../Assets/Sound/GLASS_06.mp3";

export class Bouteilles extends React.Component {

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
            })/*,
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 290,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })*/
        );
    });

    bottlesAnimation() {
        Animated.sequence(this.animatedBottlesArray).start();
    }

    glass1 = new Sound(Glass1, null);
    glass2 = new Sound(Glass2, null);
    glass3 = new Sound(Glass3, null);
    glass4 = new Sound(Glass4, null);
    glass5 = new Sound(Glass5, null);
    glass6 = new Sound(Glass6, null);

    render() {
        return(
            <View>
                <TouchableOpacity
                    onPress={ () => {
                            console.log("pressed on bouteille10"),
                            this.glass1.play()
                        }
                    }
                    style={{zIndex: 1}}
                >
                    <Animated.Image
                        source={Bouteille10}
                        style={{
                            width: 49,
                            height: 89,
                            position: 'absolute',
                            left: 932,
                            top: 451,
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
                    style={{width: 310, height: 393, position: 'absolute', left: 724, top: 409}}
                />

                <TouchableOpacity
                    onPress={ () => {
                            console.log("pressed on bouteille8"),
                            this.bottlesAnimation(),
                            this.glass2.play()
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille8}
                        style={{
                            width: 41,
                            height: 63,
                            position: 'absolute',
                            left: 918,
                            top: 481,
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
                            console.log("pressed on bouteille7");
                            this.bottlesAnimation();
                            this.glass3.play();
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille7}
                        style={{
                            width: 31,
                            height: 112,
                            position: 'absolute',
                            left: 1000,
                            top: 689,
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
                            console.log("pressed on bouteille6"),
                            this.bottlesAnimation(),
                            this.glass4.play()
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille6}
                        style={{
                            width: 69,
                            height: 110,
                            position: 'absolute',
                            left: 738,
                            top: 556,
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
                            console.log("pressed on bouteille5"),
                            this.bottlesAnimation(),
                            this.glass5.play()
                        }
                    }
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille5}
                        style={{
                            width: 40,
                            height: 117,
                            position: 'absolute',
                            left: 817,
                            top: 678,
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
                    style={{width: 314, height: 393, position: 'absolute', left: 744, top: 403}}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.bottlesAnimation(),
                        this.glass6.play()
                    }}
                    style={{zIndex: 1}}
                    setOpacityTo={0.5,100}
                >
                    <Animated.Image
                        source={Bouteille3}
                        style={{
                            width: 73,
                            height: 105,
                            position: 'absolute',
                            left: 922,
                            top: 682,
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
                    style={{width: 67, height: 30, position: 'absolute', left: 910, top: 636}}
                />

                <Image
                    source={Meuble}
                    style={{width: 476, height: 279, position: 'absolute', left: 601, top: 538}}
                />
            </View>
        )
    }
}