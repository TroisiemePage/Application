import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Animated, Easing} from 'react-native';
import Svg, {Rect, LinearGradient, Defs, Stop} from 'react-native-svg';
import ModalContent from "./ModalPopupContent";

const styles = {
    gradientHideBottom: {
        height: 50,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    gradientHideTop: {
        height: 25,
        position: 'absolute',
        top: 0,
        width: '100%'
    }
};

export default class ModalView extends Component {
    state = {
        animatedValue: new Animated.Value(0),
        scrollOffset: 0
    };

    isOpen = false;

    toggleModal() {
        if (this.isOpen) {
            if(this.props.onPress !== void 0) {
                this.props.onPress();
            }
            Animated.timing(this.state.animatedValue, {
                toValue: 0,
                duration: 200,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            }).start(() => {
                this.isOpen = !this.isOpen;
                this.forceUpdate();
            });
        } else {
            Animated.timing(this.state.animatedValue, {
                toValue: 1,
                duration: 200,
                delay: 0,
                easing: Easing.bezier(0,.53,.47,1),
            }).start();
            this.isOpen = !this.isOpen;
            this.forceUpdate();
        }
    };

    handleOnScroll = (e) => {
        this.setState({scrollOffset: e.nativeEvent.contentOffset.y});
    };

    render() {
        return (
            <View style={{
                width: this.isOpen ? 270 : 40,
                height: this.isOpen ? 240 : 40,
                left: this.props.x + (this.isOpen ? 0 : 230),
                top: this.props.y + (this.isOpen ? 0 : 200),
                position: 'absolute',
                overflow: this.isOpen ? "visible" : "hidden",
            }}>
                <Animated.Image
                    source={this.props.popupImage}
                    style={{
                        width: this.isOpen ? 100 : 0,
                        height: this.isOpen ? 100 : 0,
                        zIndex: 2,
                        position: "absolute",
                        left: -60,
                        top: -60,
                        opacity: this.state.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1]
                        }),
                        transform: [{
                            scale: this.state.animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.6, 1]
                            })
                        }],
                    }}
                />
                <Animated.View
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        backgroundColor: "transparent",
                        width: this.state.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [220, 250]
                        }),
                        height: this.state.animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [200, 220]
                        }),
                        shadowOffset: {width: 0, height: 0},
                        shadowColor: 'black',
                        shadowOpacity: 0.15,
                        shadowRadius: 20,
                        elevation: 3,
                        opacity: this.state.animatedValue,
                    }}
                >
                    <View style={{
                        height: 220,
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 20,
                        backgroundColor: '#FEFBEB',
                    }}>

                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                        >
                            <ModalContent title={this.props.title}>
                                {this.props.children}
                            </ModalContent>
                        </ScrollView>
                        <Svg style={styles.gradientHideTop}>
                            <Defs>
                                <Defs>
                                    <LinearGradient id="grad" x1={0} x2={0} y1={0} y2={"100%"}>
                                        <Stop offset="0%" stopColor="#FEFBED" stopOpacity="1"/>
                                        <Stop offset="100%" stopColor="#FEFBED" stopOpacity="0"/>
                                    </LinearGradient>
                                </Defs>
                            </Defs>
                            <Rect x="0" y="0" rx="20" ry="20" height="50" width="300" fill="url(#grad)"/>
                        </Svg>
                        <Svg style={styles.gradientHideBottom}>
                            <Defs>
                                <Defs>
                                    <LinearGradient id="grad" x1={0} x2={0} y1={0} y2={"100%"}>
                                        <Stop offset="0%" stopColor="#FEFBED" stopOpacity="0"/>
                                        <Stop offset="100%" stopColor="#FEFBED" stopOpacity="1"/>
                                    </LinearGradient>
                                </Defs>
                            </Defs>
                            <Rect x="0" y="0" rx="20" ry="20" height="50" width="300" fill="url(#grad)"/>
                        </Svg>
                    </View>
                </Animated.View>
                <TouchableWithoutFeedback onPress={() => {
                    this.toggleModal()
                }}>
                    <Animated.Image
                        style={{
                            height: 40,
                            width: 40,
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex: 0,
                            transform: [{
                                rotate: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '45deg'],
                                    extrapolate: 'clamp'
                                }),
                                /*scale: this.state.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.2]
                                })*/
                            }]
                        }}
                        source={require('../../../Assets/Images/Elements/INFO.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}