import * as React from "react";
import {Dimensions, Image, View} from "react-native";
import Decor from "../../Assets/Images/Pages/Page1/01_EcranIpad_DEVELOPPEUR.png";
import {Overlay} from "../PageRouter/PageRouter";
import {words} from "../../Stores/words";
import ModalView from '../Modal/ModalPopup/ModalPopupView';

import Nobles from "../../Assets/Images/Pages/Page1/nobles.png";
import Paysans from "../../Assets/Images/Pages/Page1/paysans.png";
import Clerc from "../../Assets/Images/Pages/Page1/clerc.png";

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

export class Page1 extends React.Component {
    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <View style={styles.container}>
                    <Image
                        source={Decor}
                        style={styles.image}
                        resizeMode={"contain"}
                        resizeMethod={"scale"}
                    />
                    <ModalView
                        x={150}
                        y={380}
                        title="ABBAYE ROYALE DE FONTEVRAUD"
                        popupImage={Clerc}
                    >
                        Au Moyen Âge, les paysans forment les neuf dixièmes de la population.
                        On distingue deux sortes de paysans au Moyen Âge : les serfs et les paysans libres (les
                        vilains). Les serfs appartiennent au seigneur qui a donc tous les droits sur eux tandis que les
                        vilains doivent travailler pour lui et lui payer des impôts.
                        Les gens modestes avaient des vêtements assez semblables entre eux. La robe courte était le
                        costume ordinaire des paysans avec les chaussures à la poulaine, autrement dit celles ayant un
                        bout pointu et relevé. Ils portaient le plus souvent les couleurs les moins nobles comme le
                        gris, obtenu à l'aide d'écorce d'aulne, un arbre poussant en milieu humide.
                    </ModalView>
                    <ModalView
                        x={405}
                        y={250}
                        title="ABBAYE ROYALE DE FONTEVRAUD"
                        popupImage={Paysans}
                    >
                        Au Moyen Âge, les paysans forment les neuf dixièmes de la population.
                        On distingue deux sortes de paysans au Moyen Âge : les serfs et les paysans libres (les
                        vilains). Les serfs appartiennent au seigneur qui a donc tous les droits sur eux tandis que les
                        vilains doivent travailler pour lui et lui payer des impôts.
                        Les gens modestes avaient des vêtements assez semblables entre eux. La robe courte était le
                        costume ordinaire des paysans avec les chaussures à la poulaine, autrement dit celles ayant un
                        bout pointu et relevé. Ils portaient le plus souvent les couleurs les moins nobles comme le
                        gris, obtenu à l'aide d'écorce d'aulne, un arbre poussant en milieu humide.
                    </ModalView>
                    <ModalView
                        x={685}
                        y={300}
                        title="ABBAYE ROYALE DE FONTEVRAUD"
                        popupImage={Nobles}
                    >
                        Au Moyen Âge, les paysans forment les neuf dixièmes de la population.
                        On distingue deux sortes de paysans au Moyen Âge : les serfs et les paysans libres (les
                        vilains). Les serfs appartiennent au seigneur qui a donc tous les droits sur eux tandis que les
                        vilains doivent travailler pour lui et lui payer des impôts.
                        Les gens modestes avaient des vêtements assez semblables entre eux. La robe courte était le
                        costume ordinaire des paysans avec les chaussures à la poulaine, autrement dit celles ayant un
                        bout pointu et relevé. Ils portaient le plus souvent les couleurs les moins nobles comme le
                        gris, obtenu à l'aide d'écorce d'aulne, un arbre poussant en milieu humide.
                    </ModalView>
                    <ModalView
                        x={635}
                        y={30}
                        title="ABBAYE ROYALE DE FONTEVRAUD"
                    >
                        Au Moyen Âge, les paysans forment les neuf dixièmes de la population.
                        On distingue deux sortes de paysans au Moyen Âge : les serfs et les paysans libres (les
                        vilains). Les serfs appartiennent au seigneur qui a donc tous les droits sur eux tandis que les
                        vilains doivent travailler pour lui et lui payer des impôts.
                        Les gens modestes avaient des vêtements assez semblables entre eux. La robe courte était le
                        costume ordinaire des paysans avec les chaussures à la poulaine, autrement dit celles ayant un
                        bout pointu et relevé. Ils portaient le plus souvent les couleurs les moins nobles comme le
                        gris, obtenu à l'aide d'écorce d'aulne, un arbre poussant en milieu humide.
                    </ModalView>

                </View>
            </Overlay>
        )
    }
}
Page1.navigationOptions = {
    header: null
};