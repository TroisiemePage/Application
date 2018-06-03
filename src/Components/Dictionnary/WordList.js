import React from "react";
import {ListView, Text, View} from "react-native";
import words from "../../Stores/words.json";

export default class WordList extends React.Component {

    formatData(data) {
        // We're sorting by alphabetically so we need the alphabet
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        // Need somewhere to store our data
        const dataBlob = {};
        const sectionIds = [];
        const rowIds = [];

        // Each section is going to represent a letter in the alphabet so we loop over the alphabet
        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            // Get the character we're currently looking for
            const currentChar = alphabet[sectionId];

            // Get users whose first name starts with the current letter
            const words = data.filter((word) => word.toUpperCase().indexOf(currentChar) === 0);

            // If there are any users who have a first name starting with the current letter then we'll
            // add a new section otherwise we just skip over it
            if (words.length > 0) {
                // Add a section id to our array so the listview knows that we've got a new section
                sectionIds.push(sectionId);

                // Store any data we would want to display in the section header. In our case we want to show
                // the current character
                dataBlob[sectionId] = currentChar;

                // Setup a new array that we can store the row ids for this section
                rowIds.push([]);

                // Loop over the valid users for this section
                for (let i = 0; i < words.length; i++) {
                    // Create a unique row id for the data blob that the listview can use for reference
                    const rowId = `${sectionId}:${i}`;

                    // Push the row id to the row ids array. This is what listview will reference to pull
                    // data from our data blob
                    rowIds[rowIds.length - 1].push(rowId);

                    // Store the data we care about for this row
                    dataBlob[rowId] = words[i];
                }
            }
        }

        return {dataBlob, sectionIds, rowIds};
    }

    constructor(props) {
        super(props);

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });
        console.log(words);
        const {dataBlob, sectionIds, rowIds} = this.formatData(words.map((word) => word.word));
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        };
    }

    render() {
        return (
            <ListView
                style={{
                    width: "100%",
                    backgroundColor: "#fdfaea"
                }}
                dataSource={this.state.dataSource}
                renderRow={(data) => {
                    return (
                        <Text
                            onPress={() => this.props.navigation.navigate("Dictionnary", {word: data})}
                            style={{
                            fontSize: 20,
                            fontFamily: "Gotham Rounded",
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>{data}</Text>
                    );
                }}
                renderSectionHeader={(sectionData) => (
                    <View style={{backgroundColor: "#fdfaea"}}>
                        <Text style={{
                            fontSize: 35,
                            fontFamily: "AGaramondPro-Bold",
                            color: "#fd5641",
                            marginTop: 20
                        }}>{sectionData}</Text>
                    </View>)
                }
            />
        )
    }
}