import React from 'react';
import {Animated, Easing} from 'react-native';
import Svg, {G, Path, Text as SVGText, Ellipse} from 'react-native-svg';

const AnimatedEllipse = Animated.createAnimatedComponent(Ellipse);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const styles = {
    svg: {
        width: "90%",
        height: "100%",
    },
};


export default class CarteSVG extends React.Component {

    achieved = "rgb(235,71,57)";
    toExplore = "rgb(128,128,128)";
    toExploreLighter= "rgb(102,102,102)";
    backgroundColor = '#FDFAEA';

    state = {
        circleRadius : new Animated.Value(0),
        animatedPath: new Animated.Value(-1000),
    };

    componentWillMount() {
        this.animate();
    }

    animate() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.animatedPath, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.inOut(Easing.cubic)
                }),
                Animated.timing(this.state.animatedPath, {
                    toValue: 1000,
                    duration: 2000,
                    easing: Easing.inOut(Easing.cubic)
                }),
            ])
        ).start();
    }

    render() {
        const currentPage = (this.props.currentLevel + 1);
        return(
            <Svg style={styles.svg} viewBox="0 0 2224 1668" >
                <G>
                    <G transform="matrix(0.275378,0,0,0.275378,70.853,496.758)">
                        <G id="chemin" transform="matrix(0.691754,0,0,0.691754,-210.641,-1920.55)" fill="none"
                           strokeWidth="4">
                            <G currentLevel="2" >
                                <G transform="matrix(-3.66765,-0.00131737,-0.00199548,5.55556,2607.31,5347.84)">
                                    <Path
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 2 ? this.achieved : this.toExplore}
                                    />
                                    <AnimatedPath
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 2 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="3" stroke={currentPage >= 3 ? this.achieved : this.toExplore}>
                                <G transform="matrix(5.5082,0,-2.78839e-19,5.44354,5293.73,4600.3)">
                                    <Path
                                        stroke={currentPage >= 3 ? this.achieved : this.toExplore}
                                        d="M0,137.654C38.012,137.654 68.827,106.839 68.827,68.827C68.827,30.815 38.012,0 0,0L-102.509,0.416"
                                    />
                                    <AnimatedPath
                                        d="M0,137.654C38.012,137.654 68.827,106.839 68.827,68.827C68.827,30.815 38.012,0 0,0L-102.509,0.416"
                                        fill="none"
                                        stroke={currentPage >= 3 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(1.90917,0.000685747,-0.00199548,5.55556,5308.88,5348.81)">
                                    <Path
                                        d="M-484.429,0.087L0,0.087"
                                        stroke={currentPage >= 3 ? this.achieved : this.toExplore}
                                    />
                                    <AnimatedPath
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 3 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="4" stroke={currentPage >= 4 ? this.achieved : this.toExplore}>
                                <G transform="matrix(5.50102,2.81783e-19,0,5.55556,4360.51,4050.74)">
                                    <Path
                                        d="M0,96.5C-26.326,96.5 -47.667,74.993 -47.667,48.667C-47.667,22.341 -26.326,1 0,1L499.667,0"
                                    />
                                    <AnimatedPath
                                        d="M0,96.5C-26.326,96.5 -47.667,74.993 -47.667,48.667C-47.667,22.341 -26.326,1 0,1L499.667,0"
                                        fill="none"
                                        stroke={currentPage >= 4 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(0.767708,0.00027575,-0.00199548,5.55556,4725.9,4586.39)">
                                    <Path
                                        d="M-484.429,0.087L0,0.087"
                                    />
                                    <AnimatedPath
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 4 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="5" stroke={currentPage >= 5  ? this.achieved : this.toExplore}>
                                <G transform="matrix(5.55556,0,0,5.55556,7730.57,3226.26)">
                                    <Path
                                        d="M0,40.001C0,17.908 17.909,0 40.001,0L95.668,0.236"
                                    />
                                    <AnimatedPath
                                        d="M0,40.001C0,17.908 17.909,0 40.001,0L95.668,0.236"
                                        fill="none"
                                        stroke={currentPage >= 5 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(-3.98271,3.98271,4.19075,4.19075,7437.81,4187.95)">
                                    <Path
                                        d="M-130.368,-54C-88.191,-11.824 -19.809,-11.824 22.368,-54"
                                    />
                                    <AnimatedPath
                                        d="M-130.368,-54C-88.191,-11.824 -19.809,-11.824 22.368,-54"
                                        fill="none"
                                        stroke={currentPage >= 5 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="6" stroke={currentPage >= 6  ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.767708,0.00027575,-0.00199548,5.55556,8883.39,3235.56)">
                                    <Path
                                        d="M-484.429,0.087L0,0.087"
                                    />
                                    <AnimatedPath
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 6 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="7" stroke={currentPage >= 7  ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.767708,0.00027575,-0.00199548,5.55556,9486.79,3237.3)">
                                    <Path
                                        d="M-484.429,0.087L0,0.087"
                                    />
                                    <AnimatedPath
                                        d="M-484.429,0.087L0,0.087"
                                        fill="none"
                                        stroke={currentPage >= 7 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="8" stroke={currentPage >= 8 ? this.achieved : this.toExplore}>
                                <G transform="matrix(5.55556,0,0,5.55556,9780.7,4621.55)">
                                    <Path
                                        d="M-9.308,-248.856C63.692,-252.84 135.051,-204.169 135.051,-122.371C135.051,-51.471 82.5,3.984 4,3.984"
                                    />
                                    <AnimatedPath
                                        d="M-9.308,-248.856C63.692,-252.84 135.051,-204.169 135.051,-122.371C135.051,-51.471 82.5,3.984 4,3.984"
                                        fill="none"
                                        stroke={currentPage >= 8 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="9" stroke={currentPage >= 9  ? this.achieved : this.toExplore}>
                                <G transform="matrix(-5.55555,0.00486055,0.00486055,5.55555,3943.56,6244.46)">
                                    <Path
                                        d="M-377.186,-0.165L0,-0.165"
                                    />
                                    <AnimatedPath
                                        d="M-377.186,-0.165L0,-0.165"
                                        fill="none"
                                        stroke={currentPage >= 9 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(3.92643,-3.93031,-3.93031,-3.92643,6452.11,6412.45)">
                                    <Path
                                        d="M-30.807,74.324C27.157,16.301 121.286,16.36 179.307,74.324"
                                    />
                                    <AnimatedPath
                                        d="M-30.807,74.324C27.157,16.301 121.286,16.36 179.307,74.324"
                                        fill="none"
                                        stroke={currentPage >= 9 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(-3.92643,3.93031,3.93031,3.92643,7277.11,5639.83)">
                                    <Path
                                        d="M-179.307,-74.324C-121.343,-132.346 -27.214,-132.287 30.807,-74.324"
                                    />
                                    <AnimatedPath
                                        d="M-179.307,-74.324C-121.343,-132.346 -27.214,-132.287 30.807,-74.324"
                                        fill="none"
                                        stroke={currentPage >= 9 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(-5.55556,-0.0010623,-0.0010623,5.55556,7689.03,4643.07)">
                                    <Path
                                        d="M-387,0.037L0,0.037"
                                    />
                                    <AnimatedPath
                                        d="M-387,0.037L0,0.037"
                                        fill="none"
                                        stroke={currentPage >= 9? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="10" stroke={currentPage >= 10 ? this.achieved : this.toExplore}>
                                <G transform="matrix(-3.92641,3.93033,3.93033,3.92641,1274.35,7506.7)">
                                    <Path
                                        d="M-227.542,-94.318C-153.985,-167.948 -34.535,-167.874 39.095,-94.318"
                                    />
                                    <AnimatedPath
                                        d="M-227.542,-94.318C-153.985,-167.948 -34.535,-167.874 39.095,-94.318"
                                        fill="none"
                                        stroke={currentPage >= 10 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(-5.55556,0.000890311,0.000890311,5.55556,1765.91,6242.21)">
                                    <Path
                                        d="M-349.441,-0.028L0,-0.028"
                                    />
                                    <AnimatedPath
                                        d="M-349.441,-0.028L0,-0.028"
                                        fill="none"
                                        stroke={currentPage >= 10 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                                <G transform="matrix(5.55556,0,0,5.55556,750.145,8345.84)">
                                    <Path
                                        d="M0,-190.047C0,-85.971 84.558,-1.601 188.634,-1.601L333.722,-1.066"
                                    />
                                    <AnimatedPath
                                        d="M0,-190.047C0,-85.971 84.558,-1.601 188.634,-1.601L333.722,-1.066"
                                        fill="none"
                                        stroke={currentPage >= 10 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="11" stroke={currentPage >= 11 ? this.achieved : this.toExplore}>
                                <G transform="matrix(-5.55556,0.000890311,0.000890311,5.55556,2760.97,8337.69)">
                                    <Path
                                        d="M-349.441,-0.028L0,-0.028"
                                    />
                                    <AnimatedPath
                                        d="M-349.441,-0.028L0,-0.028"
                                        fill="none"
                                        stroke={currentPage >= 11 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="12" stroke={currentPage >= 12 ? this.achieved : this.toExplore}>
                                <G transform="matrix(-5.55556,0.000890311,0.000890311,5.55556,6777.46,8342.42)">
                                    <Path
                                        d="M-349.441,-0.028L0,-0.028"
                                    />
                                    <AnimatedPath
                                        d="M-349.441,-0.028L0,-0.028"
                                        fill="none"
                                        stroke={currentPage >= 12 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                            <G currentLevel="13" stroke={currentPage >= 13 ? this.achieved : this.toExplore}>
                                <G transform="matrix(-5.55556,0.000890311,0.000890311,5.55556,4719.87,8335)">
                                    <Path
                                        d="M-349.441,-0.028L0,-0.028"
                                    />
                                    <AnimatedPath
                                        d="M-349.441,-0.028L0,-0.028"
                                        fill="none"
                                        stroke={currentPage >= 13 ? this.achieved : this.toExplore}
                                        strokeMiterlimit={1}
                                        strokeDasharray="1000"
                                        strokeDashoffset={this.state.animatedPath}
                                    />
                                </G>
                            </G>
                        </G>
                        {/*
                          <G id="bouton" transform="matrix(4.24458,0,0,4.24458,-155.065,-2120.79)">
                            <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                <G transform="matrix(1,0,0,1,807.358,962.739)">
                                    <AnimatedEllipse
                                        cx="-48.549"
                                        cy="0.002"
                                        rx={"48"}//"48.548"
                                        ry={"48"} //"48.549"
                                        stroke={this.achieved}
                                        strokeWidth="4"
                                        strokeDasharray="11.56,8.67"
                                        fill="none"
                                    />
                                </G>
                            </G>
                        </G>
                        */}

                        <G id="cercles" transform="matrix(4.24458,0,0,4.24458,-249.065,-2120.79)" strokeWidth="4"
                           fill="rgb(253,250,234)">
                            <G currentLevel="1" stroke={currentPage >= 1 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,494.453,962.739)">
                                        <Path
                                            d="M0,0.002C0,12.401 -10.053,22.454 -22.453,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.453,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 1 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="2" stroke={currentPage >= 2 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,807.358,962.739)">
                                        <Path
                                            d="M0,0.002C0,12.401 -10.052,22.454 -22.453,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.453,-22.452C-10.052,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 2 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="3" stroke={currentPage >= 3 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,895.577,831.331)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.052,22.454 -22.453,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.453,-22.452C-10.052,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 3 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="4" stroke={currentPage >= 4 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1280.41,729.999)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 4 ? this.achieved : this.backgroundColor }
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="5" stroke={currentPage >= 5 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1531.88,583.879)">
                                        <Path
                                            d="M0,0.001C0,12.401 -10.053,22.454 -22.453,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.001C-44.906,-12.4 -34.854,-22.453 -22.453,-22.453C-10.053,-22.453 0,-12.4 0,0.001"
                                            fill={currentPage == 5 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="6" stroke={currentPage >= 6 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1640.94,583.879)">
                                        <Path
                                            d="M0,0.001C0,12.401 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.001C-44.906,-12.4 -34.854,-22.453 -22.452,-22.453C-10.053,-22.453 0,-12.4 0,0.001"
                                            fill={currentPage == 6 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="7" stroke={currentPage >= 7 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1750,583.879)">
                                        <Path
                                            d="M0,0.001C0,12.401 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.001C-44.906,-12.4 -34.854,-22.453 -22.452,-22.453C-10.053,-22.453 0,-12.4 0,0.001"
                                            fill={currentPage == 7 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="8" stroke={currentPage >= 8 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,1686.17,794.502)">
                                    <Path
                                        d="M0,0.001C0,12.401 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.401 -44.906,0.001C-44.906,-12.4 -34.854,-22.453 -22.452,-22.453C-10.053,-22.453 0,-12.4 0,0.001"
                                        fill={currentPage == 8 ? this.achieved : this.backgroundColor}
                                    />
                                </G>
                            </G>
                            <G currentLevel="9" stroke={currentPage >= 9 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,710.999,1123.88)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 9 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="10" stroke={currentPage >= 10 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,497.878,1501.29)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 10 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="11" stroke={currentPage >= 11 ? this.achieved : this.toExploreLighter} >
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,873.999,1501.38)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 11 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="12" stroke={currentPage >= 12 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1225,1501.38)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 12 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="13" stroke={currentPage >= 13 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1613.94,1505.12)">
                                        <Path
                                            d="M0,0.002C0,12.402 -10.053,22.454 -22.452,22.454C-34.854,22.454 -44.906,12.402 -44.906,0.002C-44.906,-12.399 -34.854,-22.452 -22.452,-22.452C-10.053,-22.452 0,-12.399 0,0.002"
                                            fill={currentPage == 13 ? this.achieved : this.backgroundColor}
                                        />
                                    </G>
                                </G>
                            </G>
                        </G>
                        <G id="nombres" transform="matrix(4.24458,0,0,4.24458,-249.065,-2120.79)" fontSize="25"
                           fontWeight="500">
                            <G currentLevel="1" stroke={currentPage >= 1 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,456.715,1023.46)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,475.973,1023.46)">
                                        <SVGText>1</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="2" stroke={currentPage >= 2 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,767.865,1023.46)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,786.973,1023.46)">
                                        <SVGText>2</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="3" stroke={currentPage >= 3 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,856.79,887.907)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,875.898,887.907)">
                                        <SVGText>3</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="4" stroke={currentPage >= 4 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1239.89,787.457)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1259.25,787.457)">
                                        <SVGText>4</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="5" stroke={currentPage >= 5 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1492.09,644.957)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1511.45,644.957)">
                                        <SVGText>5</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="6" stroke={currentPage >= 6 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1600.72,645.957)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1620.07,645.957)">
                                        <SVGText>6</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="7" stroke={currentPage >= 7  ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1710.77,644.957)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1729.42,644.957)">
                                        <SVGText>7</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="8" stroke={currentPage >= 8 ? this.achieved : this.toExplore}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,1811.87,900.907)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1831.47,900.907)">
                                        <SVGText>8</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="9" stroke={currentPage >= 9 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(0.905408,0,0,0.905408,9.07626,47.2954)">
                                    <G transform="matrix(1,0,0,1,670.765,1184.38)">
                                        <SVGText>0</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,690.123,1184.38)">
                                        <SVGText>9</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="10" stroke={currentPage >= 10 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(1,0,0,1,-37.0962,-92.6021)">
                                    <G transform="matrix(1,0,0,1,461.84,1562.36)">
                                        <SVGText>1</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,472.298,1562.36)">
                                        <SVGText>0</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="11" stroke={currentPage >= 11 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(1,0,0,1,-78.3831,-97.6382)">
                                    <G transform="matrix(1,0,0,1,843.04,1563.33)">
                                        <SVGText>1</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,853.498,1563.33)">
                                        <SVGText>1</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="12" stroke={currentPage >= 12 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(1,0,0,1,-108.22,-97.23)">
                                    <G transform="matrix(1,0,0,1,1189.84,1562.33)">
                                        <SVGText>1</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1200.3,1562.33)">
                                        <SVGText>2</SVGText>
                                    </G>
                                </G>
                            </G>
                            <G currentLevel="13" stroke={currentPage >= 13 ? this.achieved : this.toExploreLighter}>
                                <G transform="matrix(1,0,0,1,-144.004,-91.6984)">
                                    <G transform="matrix(1,0,0,1,1580.14,1562.33)">
                                        <SVGText>1</SVGText>
                                    </G>
                                    <G transform="matrix(1,0,0,1,1590.6,1562.33)">
                                        <SVGText>3</SVGText>
                                    </G>
                                </G>
                            </G>
                        </G>
                    </G>
                </G>
            </Svg>
        )
    }
}