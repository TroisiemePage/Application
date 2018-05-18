import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const LETTER_SIZE = 400;

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

    state = {
        leftOffset: new Animated.Value(0)
    };

    onSwipe(gestureName, gestureState) {
        const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        const oldLeftOffset = this.state.leftOffset._value;

        switch (gestureName) {
            case SWIPE_LEFT:
                console.log("SWIPE LEFT", oldLeftOffset);
                if(oldLeftOffset > -(LETTER_SIZE * 3)) {
                    Animated.timing(this.state.leftOffset, {
                        toValue: oldLeftOffset - LETTER_SIZE,
                        duration: 200
                    }).start();
                }
                break;
            case SWIPE_RIGHT:
                console.log("SWIPE RIGHT", oldLeftOffset);
                if(oldLeftOffset < 0) {
                    Animated.timing(this.state.leftOffset, {
                        toValue: oldLeftOffset + LETTER_SIZE,
                        duration: 200
                    }).start();
                }
                break;
            default:
            break;
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                config={this.swipe_config}>
                <View style={{...this.styles.container, ...this.props.style}}>
                    <Animated.View style={{...this.styles.wrapper, marginLeft: this.state.leftOffset}}>
                        <View style={this.styles.slide}>
                            <Text style={this.styles.text}>a</Text>
                        </View>
                        <View style={this.styles.slide}>
                            <Text style={this.styles.text}>b</Text>
                        </View>
                        <View style={this.styles.slide}>
                            <Text style={this.styles.text}>c</Text>
                        </View>
                        <View style={this.styles.slide}>
                            <Text style={this.styles.text}>d</Text>
                        </View>
                    </Animated.View>
                </View>
            </GestureRecognizer>
        );
    }
}
