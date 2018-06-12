export const words = [
    {
        word: "Barytonner",
        gender: "verbe.",
        definition: "« Barytonnant », participe présent de barytonner, verbe formé à partir du mot « baryton » qui désigne une voix masculine assez grave. Dans le texte, le verbe désigne le fait de péter. François Rabelais suggère ici le caractère musical des pets de son héros.",
        animation: [
            require("../Assets/Animations/Words/compiled/barytonner_intro.png"),
            require("../Assets/Animations/Words/compiled/barytonner_loop.png")
        ],
        synonyms: [
            {
                word: "Flatuler",
                gender: "verbe.",
                definition: "Avoir des flatulences, c’est à dire des gaz ou tout simplement péter !",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/flatuler_loop.png")
                ]
            },
            {
                word: "Chanter",
                gender: "verbe.",
                definition: "Faire entendre un chant, produire par la voix des sons mélodieux.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/chanter_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Barútonos",
                gender: "n. masc.",
                definition: "Cet adjectif grec signifiait «à la voix grave»."
            },
            {
                word: "Baryton",
                gender: "n. masc.",
                definition: "En grammaire grecque il désigne les mots dont la dernière syllabe est grave."
            }
        ]
    },
    {
        word: "Arc-boutant",
        gender: "n, masc.",
        definition: "Structure des églises gothiques du Moyen-Âge.\nAu fur et à mesure que les églises gagnaient en hauteur, les architectes ont du faire preuve d’intelligence pour soutenir le poids des pierres accumulées.",
        animation: [
            require("../Assets/Animations/Words/compiled/arc-boutant_intro.png"),
            require("../Assets/Animations/Words/compiled/arc-boutant_loop.png")
        ],
        synonyms: [
            {
                word: "Pilier",
                gender: "n. masc.",
                definition: "Support vertical dans une construction. Il assure la solidité et la stabilité de l’ensemble.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/pilier_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Arc",
                gender: "n. masc.",
                definition: "Arc vient du latin «arcus» qui signifait «arme à lancer des flèches»."
            },
            {
                word: "Boutant",
                gender: "n. masc.",
                definition: "Bouter signifait «pousser, repousser»."
            }
        ]
    },
    {
        word: "Onagre",
        gender: "n. masc.",
        definition: "Âne sauvage de grande taille.",
        animation: [
            require("../Assets/Animations/Words/compiled/onagre_intro.png"),
            require("../Assets/Animations/Words/compiled/onagre_loop.png")
        ],
        synonyms: [
            {
                word: "Âne",
                gender: "n. masc.",
                definition: "Animal voisin du cheval, à longues oreilles et au pelage généralement gris, domestiqué comme " +
                "bête de somme, c’est à dire pour porter des charges.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/ane_loop.png")
                ]
            },
            {
                word: "Bourrique",
                gender: "n. fém.",
                definition: "Terme familier pour désigner une ânesse. L’expression désigne un animal têtu.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/bourrique_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Onager",
                gender: "n. masc.",
                definition: "Dès 1284 ce terme latin est utilisé pour décrire\n" +
                "une catapulte, une machine de guerre destinée à lancer des pierres. " +
                "Dans son livre Bestiaire (1827), Philippe de Thaon utilise ce terme pour désigner un «âne sauvage»."
            }
        ]
    },
    {
        word: "Chausses",
        gender: "n. fém.",
        definition: "Vêtement couvrant les jambes comme des collants.\nAu Moyen-Âge elles sont très populaires et deviennent\nun élément essentiel du costume. Elles se portent comme de grandes chaussettes jusqu’au XIVème siècle où elles se rassemblent en une seule pièce de tissu.",
        animation: [
            require("../Assets/Animations/Words/compiled/chausses_intro.png"),
            require("../Assets/Animations/Words/compiled/chausses_loop.png")
        ],
        synonyms: [
            {
                word: "Botte",
                gender: "n. fém.",
                definition: "Chaussure généralement en cuir, qui enferme le pied et la jambe et quelquefois le bas de la cuisse " +
                "ou même la cuisse entière.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/botte_loop.png")
                ]
            },
            {
                word: "Chaussure",
                gender: "n. fém.",
                definition: "Objet vestimentaire destiné à habiller le pied et éventuellement la jambe.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/chaussures_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Calx",
                gender: "latin.",
                definition: "Il désigne le talon ou le pied en latin."
            },
            {
                word: "Calceus",
                gender: "latin.",
                definition: "En latin ce terme signifie «soulier»."
            }
        ]
    },
    {
        word: "Mule",
        gender: "n. fém.",
        definition: "Animal femelle issu d’un croisement entre\nun âne et une jument (ou un cheval et une ânesse)\n" +
        "généralement incapable d’avoir des enfants.",
        animation: [
            require("../Assets/Animations/Words/compiled/mule_intro.png"),
            require("../Assets/Animations/Words/compiled/mule_loop.png")
        ],
        synonyms: [
            {
                word: "Âne",
                gender: "n. masc.",
                definition: "Animal voisin du cheval, à longues oreilles et au pelage généralement gris, domestiqué comme " +
                "bête de somme, c’est à dire pour porter des charges.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/ane_loop.png")
                ]
            },
            {
                word: "Bourrique",
                gender: "n. fém.",
                definition: "Terme familier pour désigner une ânesse. L’expression désigne un animal têtu.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/bourrique_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Mula",
                gender: "latin.",
                definition: "Ce mot apparait vers 1100 et du latin «mulet femelle»."
            },
            {
                word: "Mullus",
                gender: "latin.",
                definition: "Au XIIème siècle, «mullus» est le diminituf du latin «mulleus» qui signifie «surmulet», ou «rouget». Il s’agit d’un poisson de couleur rouge avec deux longues barbes sous la mâchoire inférieure."
            }
        ]
    },
    {
        word: "Pressoir",
        gender: "n. masc.",
        definition: "Appareil permettant de presser le raisin,\nles pommes, les olives et d'autres fruits\npour en extraire le jus.",
        animation: [
            require("../Assets/Animations/Words/compiled/pressoir_intro.png"),
            require("../Assets/Animations/Words/compiled/pressoir_loop.png")
        ],
        synonyms: [
            {
                word: "Cuve",
                gender: "n. fém.",
                definition: "Grand récipient destiné à recevoir un liquide\n(eau, vin, huile…).",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/cuve_loop.png")
                ]
            },
            {
                word: "Machine",
                gender: "n. fém.",
                definition: "Appareil technique qui sert à effectuer certaines tâches, certains travaux.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/machine_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Pressorium",
                gender: "latin.",
                definition: "En 1190, pressorium vient du latin premere qui signifie «presser»."
            }
        ]
    },
    {
        word: "Logis",
        gender: "n. masc.",
        definition: "Endroit où l'on habite.",
        animation: [
            require("../Assets/Animations/Words/compiled/logis_intro.png"),
            require("../Assets/Animations/Words/compiled/logis_loop.png")
        ],
        synonyms: [
            {
                word: "Maison",
                gender: "n. fém.",
                definition: "Endroit où s’abritent et vivent les hommes. C’est généralement une construction à un ou deux étages.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/maison_loop.png")
                ]
            },
            {
                word: "Logement",
                gender: "n. fém.",
                definition: "Endroit où se loger, s'habiter.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/logement_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "laubja",
                gender: "vieux francique.",
                definition: "Ce terme signifiait en vieux francique (ancienne langue allemande) un abri de feuillages."
            },
            {
                word: "loge",
                gender: "n. fém.",
                definition: "La loge peut désigner à la fois une petite cabane, cabanon, hutte. Ainsi qu’un petit logement situé habituellement au rez-de-chaussée d’une habitation près de la porte d’entrée, et destiné au concierge."
            }
        ]
    },
    {
        word: "Fourrier",
        gender: "n. masc.",
        definition: "Autrefois, officier ou sous-officier chargé de\ndistribuer la nourriture et d’assurer le logement\nde la Cour en déplacement et de ses militaires.",
        animation: [
            require("../Assets/Animations/Words/compiled/fourrier_intro.png"),
            require("../Assets/Animations/Words/compiled/fourrier_loop.png")
        ],
        synonyms: [
            {
                word: "Officier",
                gender: "n. masc.",
                definition: "Personne membre de l’armée, de la marine, qui a une position de responsabilité et d’encadrement.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/officier_loop.png")
                ]
            },
            {
                word: "Avant-coureur",
                gender: "n. masc.",
                definition: "Qui précède et annonce un événement prochain.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/avant-coureur_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Fodar",
                gender: "n. masc.",
                definition: "Ce terme vieux-francique nous vient des Francs Saliens, un peuple qui vivait entre la France et l’Allemagne au Vème siècle. Il signifiait alors «fourrage pour les animaux»."
            },
            {
                word: "Fuere",
                gender: "n. masc.",
                definition: "Ancien français de fourrage. Il désigne plusieurs espèces d’herbes comme la paille et le foin qu’on donne comme nourriture aux animaux lorsqu’on ne les fait pas brouter l’herbe."
            },
            {
                word: "Feurre",
                gender: "n. masc.",
                definition: "Ancien français de fourrage. Il désigne plusieurs espèces d’herbes comme la paille et le foin qu’on donne comme nourriture aux animaux lorsqu’on ne les fait pas brouter l’herbe."
            },
            {
                word: "Fourrage",
                gender: "n. masc.",
                definition: "La paille, le foin et toutes autres espèces d’herbes qu’on donne comme nourriture aux bestiaux, aux chevaux, etc..."
            }
        ]
    },
    {
        word: "Autour-tiercelet",
        gender: "n. masc.",
        definition: "L’autour est un rapace (c’est à dire un oiseau carnivore)\n à grande queue vivant dans les régions tempérées (ni trop chaudes, ni trop froides). On dit qu’il est « tiercelet » puisque le mâle est plus petit d’un tiers que la femelle.",
        animation: [
            require("../Assets/Animations/Words/compiled/autour-tiercelet_intro.png"),
            require("../Assets/Animations/Words/compiled/autour-tiercelet_loop.png")
        ],
        synonyms: [
            {
                word: "Faucon",
                gender: "n. masc.",
                definition: "Rapace qui peut atteindre 50cm de long. Il est adroit, puissant et rapide. Au Moyen-Âge ils étaient\n" +
                "dressés pour la chasse par des fauconniers.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/faucon_loop.png")
                ]
            },
            {
                word: "Oiseau",
                gender: "n. masc.",
                definition: "Animal à plumes muni d’un bec pouvant généralement voler. Les oiseaux pondent des oeufs, ils sont ovipares.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/oiseau_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Ostur",
                gender: "ancien français.",
                definition: "En 1100, il designe un oiseau de proies."
            },
            {
                word: "Acceptor",
                gender: "Latin",
                definition: "Il signifie «autour, épervier». Ce sont généralement de petits oiseaux de proie."
            }
        ]
    },
    {
        word: "Épagneul",
        gender: "n. masc.",
        definition: "Type de chien à poil long importé d’Espagne au XIVème siècle, couramment utilisé pour la chasse.",
        animation: [
            require("../Assets/Animations/Words/compiled/epagneul_intro.png"),
            require("../Assets/Animations/Words/compiled/epagneul_loop.png")
        ],
        synonyms: [
            {
                word: "Chien",
                gender: "n. masc.",
                definition: "Animal descendant du loup, facilement domestiqué par l’Homme. Il se caractérise par une course rapide, un excellent odorat et par son cri spécifique, l'aboiement.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/chien_loop.png")
                ]
            },
            {
                word: "lévrier",
                gender: "n. masc.",
                definition: "Chien très fin à la tête allongée et à la musculature puissante. Il est très rapide et des courses de lévriers sont souvent organisées.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/levrier_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Espeigner",
                gender: "verbe.",
                definition: "En vieux français, Espeigner est le fait de se coucher devant le gibier afin de le bloquer et ainsi de permettre aux chasseurs de le recouvrir d’un filet qui piégeait le gibier du même coup."
            },
            {
                word: "Espainholz",
                gender: "espagnol",
                definition: "Ce mot signifie «qui vient d’Espagne». Les épagneuls auraient été ramenés d’Espagne au XIVème siècle."
            },
            {
                word: "Chiens d’Oysel",
                gender: "\nn. masc.",
                gender: "\nn. masc.",
                definition: "Race de chien originaire d'Allemagne utilisée pour la chasse d'oiseaux."
            }
        ]
    },
    {
        word: "Lévrier",
        gender: "n. masc.",
        definition: "Chien très fin à la tête allongée et à la musculature\npuissante. Il est très rapide et des courses de lévriers\nsont souvent organisées.",
        animation: [
            require("../Assets/Animations/Words/compiled/levrier_intro.png"),
            require("../Assets/Animations/Words/compiled/levrier_loop.png")
        ],
        synonyms: [
            {
                word: "Chien",
                gender: "n. masc.",
                definition: "Animal descendant du loup, facilement domestiqué par l’Homme. Il se caractérise par une course rapide, un excellent odorat et par son cri spécifique, l'aboiement.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/chien_loop.png")
                ]
            },
            {
                word: "Épagneul",
                gender: "n. masc.",
                definition: "Type de chien à poil long importé d’Espagne au XIVème siècle, couramment utilisé pour la chasse.",
                animation: [
                    require("../Assets/Animations/Words/compiled/epagneul_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Lĕpŏrem",
                gender: "Latin",
                definition: "En latin il signifie «lièvre». À la différence du lapin il est plus grand et fin avec de longues oreilles."
            },
            {
                word: "lièvre",
                gender: "n. masc.",
                definition: "Mammifère sauvage aux pattes de derrière plus longues que celles de devant, ce qui le rend très rapide à la course."
            }
        ]
    },
    {
        word: "Perdrix",
        gender: "n. fém.",
        definition: "Oiseau ressemblant à une poule. Il a la queue courte et est souvent de couleur grise ou brune.",
        animation: [
            require("../Assets/Animations/Words/compiled/perdrix_intro.png"),
            require("../Assets/Animations/Words/compiled/perdrix_loop.png")
        ],
        synonyms: [
            {
                word: "Oiseau",
                gender: "n. masc.",
                definition: "Animal à plumes muni d’un bec pouvant généralement voler. Les oiseaux pondent des oeufs, ils sont ovipares.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/oiseau_loop.png")
                ]
            },
            {
                word: "Gallinacé",
                gender: "n. masc.",
                definition: "Gros oiseau terrestre volant mal, comme la poule, le faisan, la perdrix… Les jeunes marchent dès l’éclosion et le mâle a de vives couleurs sur son plumage.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/gallinace_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Perdīcem",
                gender: "latin.",
                definition: "Perdīcem est le mot latin pour perdrix."
            }
        ]
    },
    {
        word: "Loti",
        gender: "expression.",
        definition: "Toujours précedée de bien ou mal, cette expression souvent ironique employée pour se féliciter ou se plaindre de ce qu’il nous arrive.",
        animation: [
            require("../Assets/Animations/Words/compiled/lotis_intro.png"),
            require("../Assets/Animations/Words/compiled/lotis_loop.png")
        ],
        synonyms: [
            {
                word: "(dé)favorisé",
                gender: "adjectif.",
                definition: "Personne à qui la chance. Pour qui la situation est favorable.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/favorise_defavorise_loop.png")
                ]
            },
            {
                word: "(mal)Chanceux",
                gender: "adjectif.",
                definition: "Qui a ou n’a pas de chance.",
                animation: [
                    require("../Assets/Animations/Synonyms/compiled/chanceux-malchanceux_loop.png")
                ]
            }
        ],
        etymology: [
            {
                word: "Lot",
                gender: "n. masc.",
                definition: "«Loti» viens du mot français «lot» qui a lui même donnée «loterie» ou «loto»."
            }
        ]
    }
];
