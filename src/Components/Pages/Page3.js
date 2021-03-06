import {words} from "../../Stores/words";
import * as React from "react";
import {Overlay} from "../PageRouter/PageRouter";
import {Dimensions, Image, ScrollView} from "react-native";

import costume from "../../Assets/Images/Pages/Page3/Gargantua_Page_3_COSTUME.png";
import costume1 from "../../Assets/Images/Pages/Page3/Gargantua_Page_3_COSTUME2.png";
import costume2 from "../../Assets/Images/Pages/Page3/Gargantua_Page_3_COSTUME3.png";

import ModalView from "../Modal/ModalPopup/ModalPopupView";
import SlidingManicule from "../Manicule/SlidingManicule";
import {SCREEN_RATIO} from "../../Modules/ration";

const {height, width} = Dimensions.get('window');

export class Page3 extends React.Component {


    static componentWillDisapear() {
    }
    static componentVisible() {
    }
    render() {
        return (
            <Overlay {...this.props} wordList={words}>
                <ScrollView
                    ref={(ref) => (ref !== null) ? ref.scrollTo({x: 0, y: height * 2, animated: false}) : ""}
                    showsVerticalScrollIndicator={false}
                    pagingEnabled={true}
                    bounces={false}>
                    <Image
                        style={{
                            width: width,
                            height: height
                        }}
                        resizeMode={"contain"}
                        source={costume}
                    />
                    <Image
                        style={{
                            width: width,
                            height: height
                        }}
                        resizeMode={"contain"}
                        source={costume1}
                    />
                    <Image
                        style={{
                            width: width,
                            height: height
                        }}
                        resizeMode={"contain"}
                        source={costume2}
                    />
                    <ModalView
                        x={744 * SCREEN_RATIO}
                        y={25 * SCREEN_RATIO}
                        title="PLUME"
                    >
                        Une belle plume blanche, prise à un pélican sauvage d’Orient, vient joliment décorer son chapeau.
                    </ModalView>
                    <ModalView
                        x={529 * SCREEN_RATIO}
                        y={15 * SCREEN_RATIO}
                        title="CHAPEAU"
                    >
                        Son bonnet est en velours bleu et de forme large et ronde. Son père n’en est pas ravi et compare ces chapeaux à des croûtes de pâté !
                    </ModalView>
                    <ModalView
                        x={389 * SCREEN_RATIO}
                        y={483 * SCREEN_RATIO}
                        title="CHAÎNE"
                    >
                        Autour du cou, il porte une chaine d’or pesant plusieurs centaines de kilos d’or ! J’ai entendu dire qu’un ancien roi égyptien en portait une semblable il y a plusieurs siècles déjà...
                    </ModalView>
                    <ModalView
                        x={159 * SCREEN_RATIO}
                        y={553 * SCREEN_RATIO}
                        title="LE POURPOINT"
                    >
                        Le pourpoint est une partie du vêtement porté au niveau du torse. C’est une veste courte matelassée qui couvre le cou jusqu’à la ceinture. Il était souvent porté sous l’armure pour protéger le corps. Les fabricants de pourpoints s’appelaient des gipponiers. Le pourpoint de Gargantua est taillé dans plus de 450 pieds de satin blanc !
                    </ModalView>
                    <ModalView
                        x={587 * SCREEN_RATIO}
                        y={917 * SCREEN_RATIO}
                        title="BAGUE"
                    >
                        Sa bague préférée, est portée à l’index de la main gauche et est aussi grosse qu’un oeuf d’autruche !
                    </ModalView>
                    <ModalView
                        x={97 * SCREEN_RATIO}
                        y={965 * SCREEN_RATIO}
                        title="BOURSE"
                    >
                        On raconte que la bourse de Gargantua a été taillée dans un testicule d’éléphant tout droit venu de Lybie ! Quel coquin !
                    </ModalView>
                    <ModalView
                        x={788 * SCREEN_RATIO}
                        y={927 * SCREEN_RATIO}
                        title="CHEMISE"
                    >
                        La chemise de Gargantua est composée de neuf-cent aunes de toile venant de la ville de Châtellerault. Elle est parfaitement lisse, contrairement à ces chemises pliées qui ont été inventées lorsque les lingères se sont mises à travailler des fesses !
                    </ModalView>
                    <ModalView
                        x={687 * SCREEN_RATIO}
                        y={1023 * SCREEN_RATIO}
                        title="GANTS"
                    >
                        Les gants de Gargantua sont taillés dans seize peaux de lutins et trois de loups-garous !
                    </ModalView>
                    <ModalView
                        x={277 * SCREEN_RATIO}
                        y={1103 * SCREEN_RATIO}
                        title="BRAGUETTE"
                    >
                        La braguette est composée de seize aunes un quart du même drap. Elle est décorée d’un bel émeraude de la grosseur d’une orange.
                    </ModalView>
                    <ModalView
                        x={547 * SCREEN_RATIO}
                        y={1248 * SCREEN_RATIO}
                        title="CASAQUE"
                    >
                        Sa veste est faite de velours bleu teinté de rouge cochenille. Il s’agit ici d’une petite variété de chenille qui une fois broyée devient rouge bordeaux. Sur les bords de beaux dessins sont brodés au fil d’or et entrelacés de perles.
                    </ModalView>
                    <ModalView
                        x={38 * SCREEN_RATIO}
                        y={1289 * SCREEN_RATIO}
                        title="ÉPÉE"
                    >
                        Gargantua n’a pas encore de véritable épée ! Néanmoins son père, le roi Grandgousier, a insisté pour qu’on lui offre une belle épée de bois.
                    </ModalView>
                    <ModalView
                        x={260 * SCREEN_RATIO}
                        y={1656 * SCREEN_RATIO}
                        title="CHAUSSES"
                    >
                        Son collant est cousu dans onze cent cinq aunes un tiers d’étamine blanche. Un tissu souple fait de crin, de soie et de fil. Un confort inégalable !
                    </ModalView>
                    <ModalView
                        x={157 * SCREEN_RATIO}
                        y={1938 * SCREEN_RATIO}
                        title="SOULIERS"
                    >
                        Les souliers de Gargantua sont d’un beau velours violacé et sont taillés en barbe d’écrevisse. On appelle ces chaussures des poulaines. Plus l’extrémité de la chaussure est grande, plus son propriétaire est riche ! On raconte que les semelles furent taillées dans once cent peaux de vache brune, taillées en queue de poisson.
                    </ModalView>
                    <ModalView
                        x={454 * SCREEN_RATIO}
                        y={2048 * SCREEN_RATIO}
                        title="L'AUNE"
                    >
                        L'aune est une unité de mesure instaurée par François Ier. Elle correspond à 4 pieds ou soixante-quatre doigts ! Si tu mesures 1m20, tu es aussi haut qu’une aune et que quatre pieds. Combien cela doit faire en pouces… ?
                    </ModalView>
                    <ModalView
                        x={350 * SCREEN_RATIO}
                        y={2135 * SCREEN_RATIO}
                        title="LES COULEURS"
                    >
                        Les couleurs de Gargantua sont le blanc et le bleu. C’est son père qui les lui choisit ! Le blanc représente la joie, les plaisirs, les délices, les réjouissances et le bleu les choses célestes.
                    </ModalView>
                    <SlidingManicule
                        x={width - 100}
                        y={(height * 2) + 50}
                        color={"white"}
                    />
                </ScrollView>

            </Overlay>
        );
    }
}
Page3.navigationOptions = {
    header: null
};