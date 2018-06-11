import * as React from "react";
import {Image, View, Animated} from "react-native";

const radius = 44;

export class RoundedArrow extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        animated: new Animated.Value(0)
    };

    bounceAnimation() {
        Animated.spring(this.state.animated, {
            toValue: {x: 0, y: 0},
            friction: 2,
            //easing: Easing.elastic(2)
        }).start();
    }

    render() {
        return (
            <Animated.View
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
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
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
                        source={props.fleche}
                    />
                </View>
            </Animated.View>
        )
    }
}
