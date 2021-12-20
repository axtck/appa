export interface IUsernameParameters {
    username: string;
    usernameLength: number;
    letters: Array<string>;
    numbers: Array<string>;
    otherCharacters: Array<string>;
    upperCaseCharacters: Array<string>;
    lowerCaseCharacters: Array<string>;
    vowels: Array<string>;
    consonants: Array<string>;
    firstCharacter: string;
    created: Date;
}

export enum Casing {
    High = "H",
    Low = "L"
} 
