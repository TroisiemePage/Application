import Voice from "react-native-voice";
import Matcher from "./Matcher";


export const WordDetector = new class WordDetector {
    matcher = new Matcher();

    constructor() {
        Voice.onSpeechRecognized = this.reset.bind(this)
    }

    setWordList(wordList) {
        wordList
            .forEach((word) => this.matcher.add(word))
    }

    recognizeWord() {
        Voice.start("fr-FR");
        return new Promise((resolve, reject) => {
            Voice.onSpeechResults = (e) => {
                console.log(e);
                e.value
                    .forEach((result) => {
                        console.log(result);
                        let searchResult = this.matcher.find(result);
                        if (searchResult.length === 0) {
                            reject(new Error("no result found"));
                        } else {
                            resolve(searchResult);
                        }
                    });
            };
        });
    }

    async reset() {
        Voice.onSpeechResults = () => {
        };
        await Voice.stop()
    }
};