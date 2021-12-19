import { IParameters } from "./../types";
import { getParameters } from "./../index";
describe("index", () => {
    it("should succeed", () => {
        const username: string = "axtck";
        const expectedOutput: IParameters = {
            usernameLength: 5,
            letters: ["a", "x", "t", "c", "k"],
            numbers: [],
            otherCharacters: [],
            upperCaseCharacters: [],
            lowerCaseCharacters: ["a", "x", "t", "c", "k"],
            vowels: ["a"],
            consonants: ["x", "t", "c", "k"],
            firstCharacter: "a"
        };

        const result: IParameters = getParameters(username);
        expect(result).toStrictEqual(expectedOutput);
    });
    it("should throw", () => {
        const empty: string = "";
        const space: string = "ax tck";
        const doesntStartWithLetter: string = "_axtck";
        expect(() => getParameters(empty)).toThrow();
        expect(() => getParameters(space)).toThrow();
        expect(() => getParameters(doesntStartWithLetter)).toThrow();
    });
});