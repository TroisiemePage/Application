import {words} from "../../Stores/words";
import * as React from "react";
import {Overlay} from "../PageRouter/PageRouter";
import {Dimensions, Image, ScrollView} from "react-native";
import costume from "../../Assets/Images/Pages/Page3/Gargantua_Page_3_COSTUME.png";
import ModalView from "../Modal/ModalPopup/ModalPopupView";

const {height, width} = Dimensions.get('window');
export class Page3 extends React.Component {

    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <ScrollView
                    ref={(ref) => ref.scrollTo({x: 0, y: height * 2, animated: false})}
                    showsVerticalScrollIndicator={false}
                    pagingEnabled={true}
                    bounces={false}>
                    <Image
                        style={{
                            width: width,
                            height: 3 * height
                        }}
                        resizeMode={"contain"}
                        source={costume}
                    />
                    <ModalView
                        x={420}
                        y={350}
                        title="MOINES COPISTES"
                    >
                        {"Au XIIème siècle, l’Église a encore le monopole de la connaissance et du savoir."+
                        " Elle les diffuse par le biais d’ouvrages réalisés au sein des scriptoria "+
                        "monastiques.\nEt oui l’imprimerie n’existe pas encore ! Faces à leur pupitre, "+
                        "armés d’une plume et d’un calame, les moines recopient des ouvrages "+
                        "pendant de longues heures. \nPas le droit à l’erreur ! Ils écrivent mais "+
                        "dessinent aussi ! On appelle ça des enluminures. Cela consiste à mettre en "+
                        "lumière et en couleur les textes copiés. Encrer à la plume, habiller d’or une "+
                        "lettrine : un vrai travail d’orfèvre !"}
                    </ModalView>
                </ScrollView>
            </Overlay>
        );
    }
}
Page3.navigationOptions = {
    header: null
};