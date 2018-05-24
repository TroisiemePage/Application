import React, {Component} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, ScrollView, Animated, Easing, } from 'react-native';
import Svg,{Rect, LinearGradient, Defs, Stop} from 'react-native-svg';

import Modal from "react-native-modal";
import Card from "./Card";

export default class ModalView extends Component {
    state = {
        scrollOffset: 0,
        modalVisible: false,
        isOpen: true,
    };

    buttonAnimation = Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 300,
        delay: 0,
        easing: Easing.inOut(Easing.ease)
    });

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    toggleAnimation() {
        if(this.state.isOpen) {
            Animated.timing(this.animatedValue, {
                toValue: 1,
                duration: 100,
                delay: 0,
                easing: Easing.inOut(Easing.ease)
            }).start();
        } else {
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 100,
                delay: 0,
                easing: Easing.inOut(Easing.ease)
            }).start();
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    toggleModal() {
        this.toggleAnimation();
        this.setState({ modalVisible: !this.state.modalVisible});
        console.log(this.state.animated);
    };

    handleOnScroll = (e) => {
        this.setState({scrollOffset: e.nativeEvent.contentOffset.y});
    };

    handleScrollTo = (p) => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };

    render() {
        const interpolateRotation = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg' ]
        });
        const animatedStyle = { transform: [{ rotate: interpolateRotation }] }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
                    <Animated.Image
                        style={[styles.button, animatedStyle ]}
                        source={require('../../Assets/Images/Elements/INFO.png')}
                    />
                </TouchableWithoutFeedback>
                <Modal
                    isVisible={this.state.modalVisible}
                    onSwipe={() => this.setState({ isVisible: false })}
                    onBackdropPress={() => this.toggleModal()}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300}
                    backdropOpacity={0}
                    style={styles.modal}
                >
                    <View style={{height: 300, position: 'relative', overflow: 'hidden'}}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                            style={styles.scrollView}
                        >
                            <Card title="ABBAYE ROYALE DE FONTEVRAUD" >
                                Sacrée Abbaye ! Dès sa création en 1101, son fondateur, Robert d’Abrissel,
                                ouvre les portes de l’abbaye royale aux hommes mais aussi aux femmes
                                ainsi qu’à des personnes de toutes origines sociales. De la mixité au Moyen-
                                Âge ! Quel visionnaire ! À partir de 1189 l’abbaye devient nécropole royale,
                                c’est-à-dire qu’elle abrite les tombeaux d’Henri II, d’Aliénor d’Aquitaine et
                                de Richard Cœur de Lion. En 7 siècles, 36 abbesses se succèdent à la tête
                                de l’abbaye mais tout dérape à la Révolution Française (1789) ! Napoléon
                                Bonaparte aux commandes de la France, l’Abbaye est réquisitionnée
                                comme prison ! 2 000 hommes seront prisonniers et l’abbaye deviendra
                                l’une des plus dures prisons de France. Il faudra attendre 1963 pour qu’elle
                                soit fermée et 1975 pour que tu puisses enfin la visiter !
                            </Card>
                        </ScrollView>
                        <Svg style={styles.gradientHide}>
                            <Defs>
                                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="40">
                                    <Stop offset="0" stopColor="#FEFBED" stopOpacity="0" />
                                    <Stop offset="1" stopColor="#FEFBED" stopOpacity="1" />
                                </LinearGradient>
                            </Defs>
                            <Rect x="0" y="0" rx="20" ry="20" height="50" width="300" fill="url(#grad)" />
                        </Svg>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    button: {
        height: 50,
        width: 50,
        position: 'absolute',
        left: 750,
        top: 330,
    },
    modal: {
        backgroundColor: "transparent",
        width: 300,
        height: 300,
        justifyContent: 'flex-start',
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowRadius: 20,
        elevation: 3,
        position: 'absolute',
        left: 410,
        top: 0,
    },
    scrollView: {
        borderRadius: 20,
        backgroundColor: "#FEFBED",
    },
    gradientHide: {
        height: 50,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }
});