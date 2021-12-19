import { IParameters } from "./types";

enum Casing {
    High = "H",
    Low = "L"
}

const filterChars = (characters: Array<string>, regex: RegExp, compareLow: boolean = false): Array<string> => {
    return compareLow ? characters.filter(c => regex.test(c.toLowerCase())) : characters.filter(c => regex.test(c));
};

const filterCasing = (characters: Array<string>, casing: Casing): Array<string> => {
    return casing === Casing.High ? characters.filter(c => c === c.toUpperCase()) : characters.filter(c => c === c.toLowerCase());
};

const validateUsername = (username: string): boolean => {
    const notEmpty: boolean = username.length !== 0;
    const noSpaces: boolean = username.indexOf(" ") <= 0;
    const startsWithLetter: boolean = !/[\W_]/.test(username.charAt(0));
    return notEmpty && noSpaces && startsWithLetter;
};

export const getParameters = (username: string): IParameters => {
    if (!validateUsername(username)) throw new Error("invalid username was passed");
    const characters: Array<string> = username.split("").filter(x => x);
    const lettersRegex = new RegExp(/\w/);
    const numbersRegex = new RegExp(/\d/);
    const otherCharactersRegex = new RegExp(/\W/);
    const vowelsRegex = new RegExp(/[aeiou]/);
    const consonantsRegex = new RegExp(/[bcdfghjklmnpqrstvwxyz]/);

    const parameters: IParameters = {
        usernameLength: characters.length,
        letters: filterChars(characters, lettersRegex),
        numbers: filterChars(characters, numbersRegex),
        otherCharacters: filterChars(characters, otherCharactersRegex),
        upperCaseCharacters: filterCasing(characters, Casing.High),
        lowerCaseCharacters: filterCasing(characters, Casing.Low),
        vowels: filterChars(characters, vowelsRegex, true),
        consonants: filterChars(characters, consonantsRegex, true),
        firstCharacter: characters[0]
    };

    return parameters;
};
