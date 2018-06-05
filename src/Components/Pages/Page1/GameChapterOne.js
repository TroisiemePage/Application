import React, {Component} from 'react';
import {PanResponder, Animated, View, Text, Dimensions, Easing} from 'react-native';
import Svg, {G, Path, Circle, Rect, Text as SVGText} from 'react-native-svg';
import {computed} from "mobx";
import DrawerActions from "react-navigation/src/routers/DrawerActions";

const MAGFIELD = 80;
const scale = 1;

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedG= Animated.createAnimatedComponent(G);
const AnimatedRect= Animated.createAnimatedComponent(Rect);
const AnimatedCircle= Animated.createAnimatedComponent(Circle);

const {height} = Dimensions.get('window');
const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        margin: 10,
        backgroundColor: '#FDFBEF',
    },
    titleView: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        alignItems: 'center',
        marginTop: 70,
    },
    titleViewAchieved: {
        position: "absolute",
        right: 80,
        top: height / 2 - 70,
        alignItems: 'flex-start',
    },
    title: {
        color: '#282D45',
        fontSize: 22,
        padding: 2,
        textAlign: 'center',
        fontFamily: 'GothamRounded-Book',
    },
    titleAchieved: {
        color: '#282D45',
        fontSize: 30,
        padding: 2,
        textAlign: 'left',
        fontFamily: 'GothamRounded-Book',
    },
    description: {
        paddingVertical: 10,
        fontSize: 18,
        color: '#14173D',
        width: 250,
        textAlign: 'left',
        fontFamily: 'GothamRounded-Book',
        lineHeight: 24,
    },
    svg: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    textSvg: {
        fontFamily:'GothamRounded-Medium',
        fontSize: 23,
        width: 150,
        color: 'black',
    },
    titleSvg: {
        fontFamily:'GothamRounded-Medium',
        fontSize: 49,
        color: "rgba(255,92,69,1)",
    }
};

export default class GameChapterOneLetterA extends Component {
    previousPos = [];

    static navigationOptions = {
        drawerLabel: 'Game'
    };

    constructor() {
        super();

        const pieces = [
            {
                scale: {x: 1, y: 0},
                rotation: {x: 0, y: 1},
                initPos: {x: 298, y: 379},
                initDelta: {
                    dx: 949.236 - 298,
                    dy: 463.687 - 379
                },
                path: "M198.262,3.447L199.259,2.542C199.94,75.375 199.259,141.4 199.259,201.981C199.41,201.83 199.57,201.673 199.723,201.521L199.259,203.342C199.259,302.041 199.94,377.596 203.343,395.974L102.603,487.186L81.502,504.883L81.502,109.409L81.615,109.307C77.853,26.193 68.704,16.785 3.028,13.65C88.192,13.325 161.923,7.003 198.262,3.447Z"
            }, {
                scale: {x: 0.93308, y: 0.35967},
                rotation: {x: -0.35967, y: 0.93308},
                initPos: {x: 496.189, y: 865.76},
                initDelta: {
                    dx: 1217.6 - 496.189,
                    dy: 808.684 - 865.76
                },
                path: "M0,-402.27C-26.017,-392.173 -40.688,-379.178 -55.471,-355.187C-74.769,-322.147 -92.939,-288.086 -102.648,-266.064L-101.907,-265.247L-101.905,-265.245C-93.896,-279.818 -86.915,-289.683 -80.009,-292.363C-24.168,-314.035 45.854,-301.053 100.527,-160.179C132.922,-76.708 134.27,-9.882 132.456,20.241L132.262,23.183L135.406,23.889C138.373,17.501 141.271,11.1 144.081,4.723C185.203,-84.981 218.851,-173.244 180.432,-272.236C137.826,-382.016 61.553,-426.159 0,-402.27"
            }, {
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
                }, pieces[i])
            }),
            animated: {
                title: new Animated.Value(0),
                description: new Animated.Value(0),
                lines: new Array(4).fill("").map(() => new Animated.Value(0)),
                text: new Array(8).fill("").map(() => new Animated.Value(0))
            },
        };

        this.animatedArrayLines = [];
        this.animatedArrayLines = this.state.animated.lines.map((animationValue) => {
            return Animated.timing(animationValue, {
                toValue: 1,
                duration: 990,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })
        });

        this.animatedArrayText = [];
        this.animatedArrayText = this.state.animated.text.map((animationValue) => {
            return Animated.timing(animationValue, {
                toValue: 1,
                duration: 400,
                delay: 0,
                easing: Easing.inOut(Easing.cubic)
            })
        });
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
                    x: this.previousPos[i].x + gesture.dx * (1 + scale),
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

    @computed get didSucceed() {
        return this.state.puzzlePiece.filter((piece) => piece.placed).length === this.state.puzzlePiece.length;
    }

    animateTitle() {
        Animated.timing(this.state.animated.title, {
            toValue: 1,
            duration: 1000,
            delay: 0,
            easing: Easing.inOut(Easing.cubic)
        }).start();
    }

    animateLines() {
        Animated.sequence(this.animatedArrayLines).start();
    }

    animateTextFadeIn() {
        Animated.sequence(this.animatedArrayText).start();
    }

    render() {
        let greetings, typography;
        const opacity = this.state.animated.title.interpolate({inputRange: [0,1], outputRange: [0,1]});
        const translateY = this.state.animated.title.interpolate({inputRange: [0,1], outputRange: [-15,0]});
        const transform = [{translateY}];

        if (this.didSucceed) {

            this.animateLines();
            this.animateTextFadeIn();
            this.animateTitle();

            greetings = (

                <View style={styles.titleViewAchieved}>
                    <Animated.Text style={[styles.titleAchieved, {opacity, transform}]}>
                        Bien joué !
                    </Animated.Text>
                    <Animated.Text style={[styles.description, {opacity, transform}]}>
                        Frère Augustin te remercie.
                        Il sera plus patient
                        la prochaine fois..
                    </Animated.Text>
                </View>

            );

            typography = (

                <G>
                    <G id="delie" transform="matrix(1,0,0,1,172.653,466.421)">
                        <G transform="matrix(-0.52968,0.148123,-0.148123,-0.52968,1805.38,299.018)">
                            <G transform="matrix(0.79311,-0.191132,0.341725,1.418,-31.8794,-70.0615)">
                                <AnimatedRect
                                    x="640.793"
                                    y="369.647"
                                    width={this.state.animated.lines[3].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "4.566"]
                                    })}
                                    height={this.state.animated.lines[3].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "109.292"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                            <G transform="matrix(1,0,0,1,1,-2)">
                                <AnimatedCircle
                                    cx="642.143"
                                    cy="484.71"
                                    r={this.state.animated.lines[3].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "17.842"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                        </G>
                        <AnimatedG
                            opacity={this.state.animated.text[7].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.565498,0,0,0.565498,1050.75,147.876)"
                        >
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,211.925)"  >
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        Partie la plus ﬁne d'une lettre
                                    </SVGText>
                                </G>
                            </G>
                        </AnimatedG>
                        <AnimatedG
                            opacity={this.state.animated.text[6].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.58543,0,0,0.58543,1038.65,147.459)"
                        >
                            <G transform="matrix(1,0,0,1,641.473,173.901)">
                                <SVGText
                                    fontSize={styles.titleSvg.fontSize}
                                    fontFamily={styles.titleSvg.fontFamily}
                                    fill={styles.titleSvg.color}
                                >
                                    Délié
                                </SVGText>
                            </G>
                        </AnimatedG>
                    </G>
                    <G id="plein" transform="matrix(1,0,0,1,316.567,346.674)">
                        <G transform="matrix(-0.52968,0.148123,-0.148123,-0.52968,1805.38,299.018)">
                            <G transform="matrix(0.815816,-6.45625e-19,0,1.4586,118.024,-219.64)">
                                <AnimatedRect
                                    x="640.793"
                                    y="369.647"
                                    width={this.state.animated.lines[2].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "4.566"]
                                    })}
                                    height={this.state.animated.lines[2].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "109.292"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                            <G transform="matrix(1,0,0,1,1,-2)">
                                <AnimatedCircle
                                    cx="642.143"
                                    cy="484.71"
                                    r={this.state.animated.lines[2].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "17.842"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                        </G>
                        <AnimatedG
                            opacity={this.state.animated.text[5].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.565498,0,0,0.565498,1050.75,149.876)"
                        >
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,211.925)" >
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        Partie la plus large d'une lettre
                                    </SVGText>
                                </G>
                            </G>
                        </AnimatedG>
                        <AnimatedG
                            opacity={this.state.animated.text[4].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.58543,0,0,0.58543,1038.65,149.459)"
                        >
                            <G transform="matrix(1,0,0,1,641.473,173.901)">
                                <SVGText
                                    fontSize={styles.titleSvg.fontSize}
                                    fontFamily={styles.titleSvg.fontFamily}
                                    fill={styles.titleSvg.color}
                                >
                                    Plein
                                </SVGText>
                            </G>
                        </AnimatedG>
                    </G>
                    <G id="fut" transform="matrix(1,0,0,1,178.11,179.473)">
                        <G transform="matrix(0.00179016,0.549998,-0.549998,0.00179016,1656.67,-215.948)">
                            <G transform="matrix(0.815816,-6.45625e-19,0,1.4586,118.024,-219.64)">
                                <AnimatedRect
                                    x="640.793"
                                    y="369.647"
                                    width={this.state.animated.lines[1].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "4.566"]
                                    })}
                                    height={this.state.animated.lines[1].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "109.292"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                            <G transform="matrix(1,0,0,1,1,-2)">
                                <AnimatedCircle
                                    cx="642.143"
                                    cy="484.71"
                                    r={this.state.animated.lines[1].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "17.842"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                        </G>
                        <AnimatedG
                            opacity={this.state.animated.text[3].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.565498,0,0,0.565498,1124,5.51554)"
                        >
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,211.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        Trait principal, vertical
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,239.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        ou oblique.
                                    </SVGText>
                                </G>
                            </G>
                        </AnimatedG>
                        <AnimatedG
                            opacity={this.state.animated.text[2].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.58543,0,0,0.58543,1111.91,5.09903)"
                        >
                            <G transform="matrix(1,0,0,1,641.473,173.901)">
                                <SVGText
                                    fontSize={styles.titleSvg.fontSize}
                                    fontFamily={styles.titleSvg.fontFamily}
                                    fill={styles.titleSvg.color}
                                >
                                    Fût
                                </SVGText>
                            </G>
                        </AnimatedG>
                    </G>
                    <G id="empattement" transform="matrix(1,0,0,1,17.1687,20.5025)">
                        <G transform="matrix(0.550001,0,0,0.550001,1139.31,12.4713)">
                            <AnimatedRect
                                x="640.793"
                                y="369.647"
                                width={this.state.animated.lines[0].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "4.566"]
                                })}
                                height={this.state.animated.lines[0].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "109.292"]
                                })}
                                fill="rgb(255,92,69)"
                            />
                            <G transform="matrix(1,0,0,1,1,-2)">
                                <AnimatedCircle
                                    cx="642.143"
                                    cy="484.71"
                                    r={this.state.animated.lines[0].interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0", "17.842"]
                                    })}
                                    fill="rgb(255,92,69)"
                                />
                            </G>
                        </G>
                        <AnimatedG
                            opacity={this.state.animated.text[1].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.565498,0,0,0.565498,1128,4.51554)"
                        >
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,211.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        Embout qui vient terminer
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,239.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        l'extrémité d'un fût.
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,267.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        Son rôle est de faciliter la
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,295.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        lecture en guidant l'oeil du
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,323.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        lecteur d'une lettre à
                                    </SVGText>
                                </G>
                            </G>
                            <G>
                                <G transform="matrix(1,0,0,1,645.568,351.925)">
                                    <SVGText
                                        fontSize={styles.textSvg.fontSize}
                                        fontFamily={styles.textSvg.fontFamily}
                                        fill={styles.textSvg.color}
                                    >
                                        l'autre.
                                    </SVGText>
                                </G>
                            </G>
                        </AnimatedG>
                        <AnimatedG
                            opacity={this.state.animated.text[0].interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })}
                            transform="matrix(0.58543,0,0,0.58543,1113.91,4.09903)">
                            <G transform="matrix(1,0,0,1,641.473,173.901)">
                                <SVGText
                                    fontSize={styles.titleSvg.fontSize}
                                    fontFamily={styles.titleSvg.fontFamily}
                                    fill={styles.titleSvg.color}
                                >
                                    Empattement
                                </SVGText>
                            </G>
                        </AnimatedG>
                    </G>
                </G>
            );

            setTimeout(() => this.props.navigation.dispatch({ type: DrawerActions.CLOSE_DRAWER }), 10000);

        } else {
            greetings = (

                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        Frère Augustin a perdu patience et a fini par déchirer son manuscrit !
                    </Text>
                    <Text style={styles.title}>
                        Peux-tu l'aider à reconstituer la lettre?
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                {greetings}
                <Svg style={styles.svg} >
                    <G transform="matrix(1,0,0,1,-1401.51,0)" scale={scale}>
                        <G transform="matrix(0.570564,0,0,0.570564,1313.99,70.7588)">
                            {
                                (() => {
                                    return this.state.puzzlePiece.map((piece, i) => {
                                        return (
                                            <G key={i}
                                               transform={`matrix(${piece.scale.x},${piece.scale.y},${piece.rotation.x},${piece.rotation.y},${piece.initPos.x},${piece.initPos.y})`}>
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
                                            <G key={i}
                                               transform={`matrix(${piece.scale.x},${piece.scale.y},${piece.rotation.x},${piece.rotation.y},${piece.movingPos.x},${piece.movingPos.y})`}>
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
                        <G>
                            {typography}
                        </G>
                    </G>
                </Svg>
            </View>
        );
    }
};