import * as React from "react";
import {Button, Dimensions, Image, Text, View, Animated, Easing} from "react-native";

const {height, width} = Dimensions.get('window');
import {words} from "../../Stores/words.js";
import {Definition} from "./Definition";
import flecheDroite from "../../Assets/Images/Elements/fleche_02.png"
import flecheGauche from "../../Assets/Images/Elements/fleche_01.png"

const RoundedArrow = (props) => {
    return (<View
        style={{
            backgroundColor: "#fd5641",
            borderRadius: 50,
            minWidth: 50,
            maxWidth: 50,
            minHeight: 50,
            maxHeight: 50,
            height: 50,
            width: 50,
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
                    width: 20,
                    height: 20,
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
      panelOffset: new Animated.Value(0)
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
                        paddingBottom: 50,
                        transform: [{
                            translateY: this.state.panelOffset.interpolate({
                                inputRange: [0, 1],
                                outputRange: [height , 0]
                            })
                        }]
                    }}>

                    <Text
                        style={{
                            fontSize: 25,
                            fontFamily: "GothamRounded-Medium",
                            color: "#999999",
                            marginLeft: 10,
                            marginRight: 10
                        }}>Ethymologie</Text>
                    <RoundedArrow
                        fleche={flecheDroite}
                        side={"right"}
                        style={{
                        marginRight: -25
                    }}/>
                </Animated.View>
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
                        paddingTop: 50,
                        transform: [{
                            translateY: this.state.panelOffset.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-height , 0]
                            })
                        }]

                    }}>
                        <RoundedArrow
                            fleche={flecheGauche}
                            side={"left"}
                            style={{
                                marginTop: -10,
                            marginLeft: -25
                        }}/>
                        <Text
                            style={{
                                fontSize: 25,
                                fontFamily: "GothamRounded-Medium",
                                color: "#999999",
                                marginLeft: 10,
                                marginRight: 10
                            }}>Synonymes</Text>
                    </Animated.View>


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