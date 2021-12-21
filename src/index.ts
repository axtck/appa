import { Constants } from "./Constants";
import { Casing, IUsernameParameters } from "./types";
import path from "path";
import fs from "fs/promises";

const filterChars = (characters: Array<string>, regex: RegExp, compareLow: boolean = false): Array<string> => {
    return compareLow ? characters.filter(c => regex.test(c.toLowerCase())) : characters.filter(c => regex.test(c));
};

const filterCasing = (letters: Array<string>, casing: Casing): Array<string> => {
    return casing === Casing.High ? letters.filter(c => c === c.toUpperCase()) : letters.filter(c => c === c.toLowerCase());
};

const validateUsername = (username: string): boolean => {
    const notEmpty: boolean = username.length !== 0;
    const noSpaces: boolean = username.indexOf(" ") <= 0;
    const startsWithLetter: boolean = Constants.regexPatterns.letter.test(username.charAt(0));

    return notEmpty && noSpaces && startsWithLetter;
};

export const getParameters = (username: string): IUsernameParameters => {
    if (!validateUsername(username)) throw new Error("invalid username was passed");

    const characters: Array<string> = username.split("").filter(x => x);

    const letters = filterChars(characters, Constants.regexPatterns.letter);

    const parameters: IUsernameParameters = {
        username: username,
        usernameLength: characters.length,
        letters: letters,
        numbers: filterChars(characters, Constants.regexPatterns.number),
        otherCharacters: filterChars(characters, Constants.regexPatterns.other),
        upperCaseCharacters: filterCasing(letters, Casing.High),
        lowerCaseCharacters: filterCasing(letters, Casing.Low),
        vowels: filterChars(characters, Constants.regexPatterns.vowel, true),
        consonants: filterChars(characters, Constants.regexPatterns.consonant, true),
        firstCharacter: characters[0],
        created: new Date()
    };

    return parameters;
};

const calculateValues = (username: string): string => {
    const parameters: IUsernameParameters = getParameters(username);
    const svgData: string = `${parameters.firstCharacter}`;

    return svgData;
};

export const genSvg = async (username: string): Promise<void> => {
    const parameters: IUsernameParameters = getParameters(username);

    const rootDir: string = path.join(path.resolve(__dirname), ".."); // root 
    const fileLoc: string = path.join(rootDir, "examples", "generated", `${parameters.username}.svg`);

    try {
        const data = `<svg>${calculateValues(parameters.username)}</svg>`;
        await fs.writeFile(fileLoc, data);
    } catch (e) {
        console.error("generating svg failed", e);
        return;
    }
};