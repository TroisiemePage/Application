import * as React from "react";
import {Dimensions, Image, Text, View, StyleSheet} from "react-native";
import Decor from "../../Assets/Images/Pages/Page2/decor.png";
import Roue1 from "../../Assets/Images/Pages/Page2/roue1.png";
import Roue2 from "../../Assets/Images/Pages/Page2/roue2.png";
import Roue3 from "../../Assets/Images/Pages/Page2/roue3.png";
import Roue4 from "../../Assets/Images/Pages/Page2/roue4.png";
import Roue5 from "../../Assets/Images/Pages/Page2/roues5.png";
import Levier from "../../Assets/Images/Pages/Page2/levier.png";
import Pots from "../../Assets/Images/Pages/Page2/pots.png";
import Vache1 from "../../Assets/Images/Pages/Page2/vache1.png";
import Vache2 from "../../Assets/Images/Pages/Page2/vache2.png";
import Bouteille1 from "../../Assets/Images/Pages/Page2/bouteille1.png";
import Bouteille2 from "../../Assets/Images/Pages/Page2/bouteille2.png";
import Bouteille3 from "../../Assets/Images/Pages/Page2/bouteille3.png";
import Bouteilles4 from "../../Assets/Images/Pages/Page2/bouteilles4.png";
import Bouteille5 from "../../Assets/Images/Pages/Page2/bouteille5.png";
import Bouteille6 from "../../Assets/Images/Pages/Page2/bouteille6.png";
import Bouteille7 from "../../Assets/Images/Pages/Page2/bouteille7.png";
import Bouteille8 from "../../Assets/Images/Pages/Page2/bouteille8.png";
import Bouteilles9 from "../../Assets/Images/Pages/Page2/bouteilles9.png";
import Bouteille10 from "../../Assets/Images/Pages/Page2/bouteille10.png";
import Passerelle from "../../Assets/Images/Pages/Page2/passerelle.png";
import Meuble from "../../Assets/Images/Pages/Page2/meuble.png";


import {Page1} from "./Page1/Page1";
import {Overlay} from "../PageRouter/PageRouter";

const {height, width} = Dimensions.get('window');
const styles ={
    container: {
        flex: 1,
        flexDirection: "row",
        width: width,
        height: height
    },
    image: {
        width: width,
        height: height,
        alignSelf: "flex-end"
    }
};

export class Page2 extends React.Component {
    render() {
        return (
            <Overlay {...this.props}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />
                    <Image
                        source={Roue1}
                        style={{width: 170, height: 154, position: 'absolute', left: 934, top: 275}}
                    />
                    <Image
                        source={Roue2}
                        style={{width: 114, height: 115, position: 'absolute', left: 1000, top: 180}}
                    />
                    <Image
                        source={Roue3}
                        style={{width: 143, height: 140, position: 'absolute', left: 887, top: 97}}
                    />
                    <Image
                        source={Roue4}
                        style={{width: 87, height: 93, position: 'absolute', left: 1025, top: 91}}
                    />
                    <Image
                        source={Roue5}
                        style={{width: 858, height: 60, position: 'absolute', left: 223, top: 36.5}}
                    />
                    <Image
                        source={Levier}
                        style={{width: 65, height: 100, position: 'absolute', left: 644, top: 510}}
                    />
                    <Image
                        source={Pots}
                        style={{width: 1074, height: 347, position: 'absolute', left: -508, top: 329}}
                    />
                    <Image
                        source={Vache1}
                        style={{width: 178, height: 178, position: 'absolute', left: 460, top: 88}}
                    />
                    <Image
                        source={Vache2}
                        style={{width: 177, height: 173, position: 'absolute', left: 249, top: 94}}
                    />
                    <Image
                        source={Passerelle}
                        style={{width: 67, height: 30, position: 'absolute', left: 910, top: 636}}
                    />
                    <Image
                        source={Bouteille10}
                        style={{width: 49, height: 89, position: 'absolute', left: 932, top: 451}}
                    />
                    <Image
                        source={Bouteilles9}
                        style={{width: 310, height: 393, position: 'absolute', left: 724, top: 409}}
                    />
                    <Image
                        source={Bouteille8}
                        style={{width: 41, height: 63, position: 'absolute', left: 918, top: 481}}
                    />
                    <Image
                        source={Bouteille7}
                        style={{width: 31, height: 112, position: 'absolute', left: 1000, top: 689}}
                    />
                    <Image
                        source={Bouteille6}
                        style={{width: 69, height: 110, position: 'absolute', left: 738, top: 556}}
                    />
                    <Image
                        source={Bouteille5}
                        style={{width: 40, height: 117, position: 'absolute', left: 817, top: 678}}
                    />
                    <Image
                        source={Bouteilles4}
                        style={{width: 314, height: 393, position: 'absolute', left: 744, top: 403}}
                    />
                    <Image
                        source={Bouteille3}
                        style={{width: 73, height: 105, position: 'absolute', left: 922, top: 682}}
                    />
                    <Image
                        source={Bouteille2}
                        style={{width: 47, height: 108, position: 'absolute', left: 1014, top: 555}}
                    />
                    <Image
                        source={Bouteille1}
                        style={{width: 36, height: 113, position: 'absolute', left: 897, top: 551}}
                    />
                    <Image
                        source={Meuble}
                        style={{width: 476, height: 279, position: 'absolute', left: 601, top: 538}}
                    />
                </View>
            </Overlay>
        )
    }
}
Page2.navigationOptions = {
    header: null
};