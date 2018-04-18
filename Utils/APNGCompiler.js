global["Observable"] = require("any-observable/register")('rxjs');
const Listr = require('listr');
const Assembler = require('apng-assembler');
const fs = require("fs");
const path = require("path");
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    {name: 'input', alias: 'i', type: String},
    {name: 'output', alias: 'o', type: String}
];

const options = commandLineArgs(optionDefinitions, {stopAtFirstUnknown: true});

let assembler = new Assembler.Assembler(1, 33, Assembler.COMPRESS_7ZIP);

animationToCompile = fs
    .readdirSync(options.input, {encoding: "utf8"})
    .filter((dirEl) => {
        const stats = fs.lstatSync(path.join(options.input, dirEl));
        return stats.isDirectory();
    })
    .map((animDir) => {
        return {
            title: `${animDir}`,
            task: () => {
                    return assembler
                        .assemble(path.join(options.input, animDir, "./*"), path.join(options.output, animDir + ".png"));
            }
        }
    });

const tasks = new Listr([{
    title: 'Compile animations',
    task: () => {
        return new Listr(animationToCompile, {
            concurrent: true
        });
    }
}]);

tasks.run();
