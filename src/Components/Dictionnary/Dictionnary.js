import * as React from "react";
import {Button, Dimensions, Image, Text, View, Animated, TouchableWithoutFeedback} from "react-native";

const {height, width} = Dimensions.get('window');
import {words} from "../../Stores/words.js";
import {Definition} from "./Definition";
import flecheDroite from "../../Assets/Images/Elements/fleche_02.png"
import flecheGauche from "../../Assets/Images/Elements/fleche_01.png"
import {ModalSlider} from "../Modal/ModalSlider/ModalSlider";
import {Synonym} from "./Synonym";
import {Etymology} from "./Etymology";

const RoundedArrow = (props) => {
    const radius = 44;
    return (<View
        style={{
            backgroundColor: "#fd5641",
            borderRadius: radius,
            minWidth: radius,
            maxWidth: radius,
            minHeight: radius,
            maxHeight: radius,
            height: radius,
            width: radius,
            ...props.style
        }}>
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center"
            }}>
            <Image
                style={{
                    width: 13,
                    height: 13,
                    ...(props.side === "left" ? {
                        marginRight: 3
                    } : {
                        marginLeft: 3
                    }),
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center"
                }}
                resizeMode={"contain"}
                resizeMethod={"scale"}
                source={props.fleche}/>
        </View>
    </View>);
};

export class Dictionnary extends React.Component {

    state = {
        panelOffset: new Animated.Value(0),
        synonyms: false,
        etymology: false
    };

    panelAnimation = Animated.timing(this.state.panelOffset, {
        toValue: 1,
        duration: 1000,
        delay: 0
    });

    render() {
        let word = words.filter((word) => word.word === this.props.navigation.getParam("word", ""))[0];
        return (
            <View style={{
                width: width,
                height: height,
                backgroundColor: '#FEFBEB',
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden"
            }}>
                <View style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    zIndex: 10
                }}>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title={"Retour"}
                    />
                </View>


                <ModalSlider
                    open={this.state.synonyms}
                    side="right"
                    onClose={() => this.setState({synonyms: false})}
                    width={width}>
                    <Synonym word={word}/>
                </ModalSlider>
                <ModalSlider
                    open={this.state.etymology}
                    side="left"
                    onClose={() => this.setState({etymology: false})}
                    width={width}>
                    <Etymology word={word}/>

                </ModalSlider>

                <TouchableWithoutFeedback
                    onPress={() => this.setState({etymology: true})}>
                    <Animated.View
                        style={{
                            borderRightWidth: 1,
                            borderColor: "#999999",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "flex-end",
                            paddingBottom: 100,
                            transform: [{
                                translateY: this.state.panelOffset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [height, 0]
                                })
                            }]
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "GothamRounded-Medium",
                                color: "#999999",
                                marginLeft: 35,
                                marginRight: 35,
                                marginBottom: 0,
                                paddingTop: 5
                            }}>{"Étymologie".toUpperCase()}</Text>
                        <RoundedArrow
                            fleche={flecheDroite}
                            side={"right"}
                            style={{
                                marginRight: -22
                            }}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => this.setState({synonyms: true})}>
                    <Animated.View
                        style={{
                            borderLeftWidth: 1,
                            borderColor: "#999999",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            flex: 1,
                            flexDirection: "row",
                            alignItems: "flex-start",
                            paddingTop: 100,
                            transform: [{
                                translateY: this.state.panelOffset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-height, 0]
                                })
                            }]
                        }}
                    >
                        <RoundedArrow
                            fleche={flecheGauche}
                            side={"left"}
                            style={{
                                marginTop: -10,
                                marginLeft: -22
                            }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "GothamRounded-Medium",
                                color: "#999999",
                                marginLeft: 35,
                                marginRight: 35,
                                marginTop: 0
                            }}>
                            {"Synonymes".toUpperCase()}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>


                <Definition
                    word={word}
                    introFinished={() => this.panelAnimation.start()}/>
            </View>
        );
    }
}

Dictionnary.navigationOptions = {
    header: null
};