import React, {Component} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import WhiteManicule from "../../Assets/Images/Elements/WhiteManicule.png";
import BlackManicule from "../../Assets/Images/Elements/BlackManicule.png";

export default class Manicule extends Component {

    state = {
        moveManicule: new Animated.Value(0),
    };

    componentDidMount() {
        this.animateManicule();
    }

    animateManicule() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.moveManicule, {
                    toValue: 1,
                    duration: 1000,
                    delay: 0,
                    easing: Easing.bezier(0,.53,.47,1),
                }),
                Animated.timing(this.state.moveManicule, {
                    toValue: 0,
                    duration: 1000,
                    delay: 0,
                    easing: Easing.bezier(0,.53,.47,1),
                })
            ])
        ).start();
    }

    render() {
        return(
            <Animated.View
                style={{
                    left: this.props.x,
                    top: this.state.moveManicule.interpolate({
                        inputRange: [0, 1],
                        outputRange: [this.props.y , this.props.y - 10]
                    }),
                    flex: 1,
                    position: 'absolute',
                }}
            >
                <Image
                    style={{
                        position: "absolute",
                        width: 49.1,
                        height: 80.99,
                    }}
                    source={this.props.color === 'black' ? BlackManicule : WhiteManicule}
                />
            </Animated.View>
        )
    }
}