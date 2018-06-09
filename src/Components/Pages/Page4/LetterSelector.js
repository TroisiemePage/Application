import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const LETTER_SIZE = 400;
const Letters = ["b", "c", "d"];

export class LetterSelector extends Component {

    styles = {
        container: {
            width: LETTER_SIZE,
            height: LETTER_SIZE,
            overflow: "hidden"
        },
        wrapper: {
            flexDirection: "row",
        },
        slide: {
            width: LETTER_SIZE,
            height: LETTER_SIZE,
            alignContent: "center",
            justifyContent: "center",
        },
        text: {
            textAlign: "center",
            fontSize: LETTER_SIZE,
            lineHeight: LETTER_SIZE + 100,
            fontFamily: "Respira-Black",
            color: "#fd5641"
        }
    };

    swipe_config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    sliding = false;

    state = {
        leftOffset: new Animated.Value(0),
        selectedLetter: Letters[0]
    };

    onSwipe(gestureName, gestureState) {
        const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        new Promise(
            (resolve) => {
                switch (gestureName) {
                    case SWIPE_LEFT:
                        resolve(Letters[this.intervalize(Letters.indexOf(this.state.selectedLetter) + 1, Letters.length)])
                        break;
                    case SWIPE_RIGHT:
                        resolve(Letters[this.intervalize(Letters.indexOf(this.state.selectedLetter) - 1, Letters.length)]);
                        break;
                    default:
                        break;
                }
            })
            .then((selectedLetter) => {
                Animated.timing(this.state.leftOffset, {
                    toValue: -(LETTER_SIZE * Letters.indexOf(selectedLetter)),
                    duration: 200
                }).start();
                this.setState({
                    selectedLetter: selectedLetter
                })
            });
    }

    intervalize(number, max, min = 0) {
        return (number >= min ? (number < max ? number : (max - 1)) : min);
    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                config={this.swipe_config}>
                <View style={{...this.styles.container, ...this.props.style}}>
                    <Animated.View style={{...this.styles.wrapper, marginLeft: this.state.leftOffset}}>
                        {Letters.map((letter, i) => {
                            return (
                                <View style={this.styles.slide} key={i}>
                                    <Text style={this.styles.text}>
                                        {letter}
                                    </Text>
                                </View>
                            );
                        })}
                    </Animated.View>
                </View>
            </GestureRecognizer>
        );
    }
}
