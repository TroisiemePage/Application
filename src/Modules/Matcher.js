import distance from "jaro-winkler";
import doubleMetaphone from "double-metaphone";


export default class Matcher{
    wordlist = [];

    config = {
        threshold: 0.65
    };

    add(word) {
        this.wordlist.push(word)
    }

    find(wordToFind) {
        return this.wordlist
            .map((registeredWord, i) => {
                let wordToFindMetaphone = doubleMetaphone(wordToFind)[0];
                let registeredWordMetaphone = doubleMetaphone(registeredWord)[0];
                const matchingCoeff = Math.floor(distance(wordToFindMetaphone, registeredWordMetaphone) * 100) / 100;
               return {
                    word: registeredWord,
                    matching: matchingCoeff,
                    metaphones: [
                        wordToFindMetaphone,
                        registeredWordMetaphone
                    ]
                };

            })
            .filter((result) => result.matching > this.config.threshold)
            .sort((a, b) => a.matching - b.matching)
            .reverse();
    }
}