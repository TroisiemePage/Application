import React, {Component} from 'react';
import {StyleSheet, PanResponder, Animated, View, Text} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';

const MAGFIELD = 80;
const scale = 0.6;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        margin: 10,
        backgroundColor: '#FDFBEF',
    },
    title: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        marginTop: 70
    },
    text: {
        color: '#282D45',
        fontSize: 26,
        padding: 2,
        textAlign: 'center',
        //fontFamily
    },
    svg: {
        flex: 14,
        width: "100%",
        height: "100%",
        marginLeft: 200,
        marginTop: 100,

    }
});

export default class GameChapterOneLetterA extends Component {
    previousPos = [];

    static navigationOptions = {
        drawerLabel: 'Game'
    };

    constructor() {
        super();
        const pieces = [
            {
                scale: { x: 1, y: 0},
                rotation: {x: 0, y: 1},
                initPos: {x: 298, y: 379},
                initDelta: {
                    dx: 949.236 - 298,
                    dy: 463.687 - 379
                },
                path: "M198.262,3.447L199.259,2.542C199.94,75.375 199.259,141.4 199.259,201.981C199.41,201.83 199.57,201.673 199.723,201.521L199.259,203.342C199.259,302.041 199.94,377.596 203.343,395.974L102.603,487.186L81.502,504.883L81.502,109.409L81.615,109.307C77.853,26.193 68.704,16.785 3.028,13.65C88.192,13.325 161.923,7.003 198.262,3.447Z"
            },{
                scale: {x: 0.93308, y: 0.35967},
                rotation: {x: -0.35967, y: 0.93308},
                initPos: {x: 496.189, y: 865.76},
                initDelta: {
                    dx: 1217.6 - 496.189,
                    dy: 808.684 - 865.76
                },
                path: "M0,-402.27C-26.017,-392.173 -40.688,-379.178 -55.471,-355.187C-74.769,-322.147 -92.939,-288.086 -102.648,-266.064L-101.907,-265.247L-101.905,-265.245C-93.896,-279.818 -86.915,-289.683 -80.009,-292.363C-24.168,-314.035 45.854,-301.053 100.527,-160.179C132.922,-76.708 134.27,-9.882 132.456,20.241L132.262,23.183L135.406,23.889C138.373,17.501 141.271,11.1 144.081,4.723C185.203,-84.981 218.851,-173.244 180.432,-272.236C137.826,-382.016 61.553,-426.159 0,-402.27"
            },{
                scale: {x: 1, y: 0},
                rotation: {x: 0, y: 1},
                initPos: {x: 298, y: 379},
                initDelta: {
                    dx: 1129.41 - 298,
                    dy: 371.929 - 379
                },
                path: "M4.156,569.84L2.621,569.877L82.047,503.951L103.624,486.837C150.324,519.635 230.073,554.458 281.034,561.603L296.639,561.158C302.763,561.297 308.223,560.74 313.682,560.182L316.317,562.038C278.528,596.779 237.631,629.588 205.417,651.012C145.772,646.27 61.805,609.152 4.156,569.84Z"
            }
        ];

        this.state = {
            puzzlePiece: new Array(pieces.length).fill("").map((v, i) => {
                return Object.assign({
                    placed: false,
                    movingPos: {
                        x: pieces[i].initPos.x + pieces[i].initDelta.dx,
                        y: pieces[i].initPos.y + pieces[i].initDelta.dy
                    },
                    opacity: new Animated.Value(0.9)
                },pieces[i])
            })
        };
    }

    _panResponders = new Array(3).fill('').map((pr, i) => {
        return PanResponder.create({
            onStartShouldSetPanResponder: (evt, gesture) => !this.state.puzzlePiece[i].placed,
            onMoveShouldSetPanResponder: (evt, gesture) => !this.state.puzzlePiece[i].placed,
            onPanResponderGrant: (evt, gesture) => {
                this.previousPos[i] = this.state.puzzlePiece[i].movingPos;
                Animated.timing(this.state.puzzlePiece[i].opacity, {
                    toValue: 0.8,
                    duration: 200
                }).start();
            },
            onPanResponderMove: (evt, gesture) => {
                this.state.puzzlePiece[i].movingPos = {
                    x: this.previousPos[i].x + gesture.dx *  (1 + scale),
                    y: this.previousPos[i].y + gesture.dy * (1 + scale)
                };
                this.setState(this.state);
            },
            onPanResponderRelease: (evt, gesture) => {
                Animated.timing(this.state.puzzlePiece[i].opacity, {
                    toValue: 1,
                    duration: 200
                }).start();
                //console.log(this.state.puzzlePiece[i].movingPos, this.state.puzzlePiece[i].initPos);
                if (
                    (
                        (this.state.puzzlePiece[i].movingPos.x >= this.state.puzzlePiece[i].initPos.x - MAGFIELD)
                        &&
                        (this.state.puzzlePiece[i].movingPos.x <= this.state.puzzlePiece[i].initPos.x + MAGFIELD)
                    )
                    &&
                    (
                        (this.state.puzzlePiece[i].movingPos.y >= this.state.puzzlePiece[i].initPos.y - MAGFIELD)
                        &&
                        (this.state.puzzlePiece[i].movingPos.y <= this.state.puzzlePiece[i].initPos.y + MAGFIELD)
                    )
                ) {
                    this.state.puzzlePiece[i].movingPos = this.state.puzzlePiece[i].initPos;
                    this.state.puzzlePiece[i].placed = true;
                    this.setState(this.state);
                } else {
                    this.state.puzzlePiece[i].movingPos = {
                        x: this.state.puzzlePiece[i].initPos.x + this.state.puzzlePiece[i].initDelta.dx,
                        y: this.state.puzzlePiece[i].initPos.y + this.state.puzzlePiece[i].initDelta.dy
                    };
                    this.setState(this.state);
                }
            }
        });
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>
                        Frère Augustin a perdu patience et a fini par déchirer son manuscrit !
                    </Text>
                    <Text style={styles.text}>
                        Peux-tu l'aider à reconstituer la lettre?
                    </Text>
                </View>
                <Svg style={styles.svg}>
                    <G transform="matrix(1,0,0,1,-298.962,-379.365)" scale={scale}>
                        <G transform="matrix(1,0,0,1,0.961868,0.364709)">
                            {
                                (() => {
                                    return this.state.puzzlePiece.map((piece, i) => {
                                        return (
                                            <G key={i} transform={`matrix(${piece.scale.x},${piece.scale.y},${piece.rotation.x},${piece.rotation.y},${piece.initPos.x},${piece.initPos.y})`}>
                                                <AnimatedPath
                                                    d={piece.path}
                                                    fill={"#E76F54"}
                                                    fillOpacity={piece.opacity}
                                                />
                                            </G>
                                        )
                                    })
                                })()
                            }
                            {
                                (() => {
                                    return this.state.puzzlePiece.map((piece, i) => {
                                        return (
                                            <G key={i} transform={`matrix(${piece.scale.x},${piece.scale.y},${piece.rotation.x},${piece.rotation.y},${piece.movingPos.x},${piece.movingPos.y})`}>
                                                <AnimatedPath
                                                    d={piece.path}
                                                    fill={"#4258C8"}
                                                    fillOpacity={piece.opacity}
                                                    {...this._panResponders[i].panHandlers}
                                                />
                                            </G>
                                        )
                                    })
                                })()
                            }
                        </G>
                    </G>
                </Svg>
            </View>
        );
    }
};