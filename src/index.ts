import { Constants } from "./Constants";
import { Casing, IParameters } from "./types";

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

export const getParameters = (username: string): IParameters => {
    if (!validateUsername(username)) throw new Error("invalid username was passed");

    const characters: Array<string> = username.split("").filter(x => x);

    const letters = filterChars(characters, Constants.regexPatterns.letter);

    const parameters: IParameters = {
        usernameLength: characters.length,
        letters: letters,
        numbers: filterChars(characters, Constants.regexPatterns.number),
        otherCharacters: filterChars(characters, Constants.regexPatterns.other),
        upperCaseCharacters: filterCasing(letters, Casing.High),
        lowerCaseCharacters: filterCasing(letters, Casing.Low),
        vowels: filterChars(characters, Constants.regexPatterns.vowel, true),
        consonants: filterChars(characters, Constants.regexPatterns.consonant, true),
        firstCharacter: characters[0]
    };

    return parameters;
};
