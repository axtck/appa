import { IUsernameParameters } from "./../types";
import { genSvg, getParameters } from "./../index";

describe("index", () => {
    describe("get parameters from username", () => {
        it("should throw (empty)", () => {
            expect(() => getParameters("")).toThrow();
        });

        it("should throw (space)", () => {
            expect(() => getParameters("ax tck")).toThrow();
        });

        it("should throw (doesn't start with letter)", () => {
            expect(() => getParameters("_axtck")).toThrow();
        });

        it("should succeed (lowercase characters)", () => {
            const username: string = "axtck";
            const expectedOutput: IUsernameParameters = {
                username: "axtck",
                usernameLength: 5,
                letters: ["a", "x", "t", "c", "k"],
                numbers: [],
                otherCharacters: [],
                upperCaseCharacters: [],
                lowerCaseCharacters: ["a", "x", "t", "c", "k"],
                vowels: ["a"],
                consonants: ["x", "t", "c", "k"],
                firstCharacter: "a",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });

        it("should succeed (some upercase characters)", () => {
            const username: string = "AxTck";
            const expectedOutput: IUsernameParameters = {
                username: "AxTck",
                usernameLength: 5,
                letters: ["A", "x", "T", "c", "k"],
                numbers: [],
                otherCharacters: [],
                upperCaseCharacters: ["A", "T"],
                lowerCaseCharacters: ["x", "c", "k"],
                vowels: ["A"],
                consonants: ["x", "T", "c", "k"],
                firstCharacter: "A",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });

        it("should succeed (some numbers)", () => {
            const username: string = "axtck98";
            const expectedOutput: IUsernameParameters = {
                username: "axtck98",
                usernameLength: 7,
                letters: ["a", "x", "t", "c", "k"],
                numbers: ["9", "8"],
                otherCharacters: [],
                upperCaseCharacters: [],
                lowerCaseCharacters: ["a", "x", "t", "c", "k"],
                vowels: ["a"],
                consonants: ["x", "t", "c", "k"],
                firstCharacter: "a",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });

        it("should succeed (some other characters)", () => {
            const username: string = "ax_tck_";
            const expectedOutput: IUsernameParameters = {
                username: "ax_tck_",
                usernameLength: 7,
                letters: ["a", "x", "t", "c", "k"],
                numbers: [],
                otherCharacters: ["_", "_"],
                upperCaseCharacters: [],
                lowerCaseCharacters: ["a", "x", "t", "c", "k"],
                vowels: ["a"],
                consonants: ["x", "t", "c", "k"],
                firstCharacter: "a",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });

        it("should succeed (random 1)", () => {
            const username: string = "Ax_Tck_98_";
            const expectedOutput: IUsernameParameters = {
                usernameLength: 10,
                letters: ["A", "x", "T", "c", "k"],
                numbers: ["9", "8"],
                otherCharacters: ["_", "_", "_"],
                upperCaseCharacters: ["A", "T"],
                lowerCaseCharacters: ["x", "c", "k"],
                vowels: ["A"],
                consonants: ["x", "T", "c", "k"],
                firstCharacter: "A",
                username: "Ax_Tck_98_",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });

        it("should succeed (random 2)", () => {
            const username: string = "a$X_t$C$K_9$8_";
            const expectedOutput: IUsernameParameters = {
                username: "a$X_t$C$K_9$8_",
                usernameLength: 14,
                letters: ["a", "X", "t", "C", "K"],
                numbers: ["9", "8"],
                otherCharacters: ["$", "_", "$", "$", "_", "$", "_"],
                upperCaseCharacters: ["X", "C", "K"],
                lowerCaseCharacters: ["a", "t"],
                vowels: ["a"],
                consonants: ["X", "t", "C", "K"],
                firstCharacter: "a",
                created: new Date()
            };

            const result: IUsernameParameters = getParameters(username);
            expect(result.username).toStrictEqual(expectedOutput.username);
            expect(result.usernameLength).toStrictEqual(expectedOutput.usernameLength);
            expect(result.letters).toStrictEqual(expectedOutput.letters);
            expect(result.numbers).toStrictEqual(expectedOutput.numbers);
            expect(result.otherCharacters).toStrictEqual(expectedOutput.otherCharacters);
            expect(result.upperCaseCharacters).toStrictEqual(expectedOutput.upperCaseCharacters);
            expect(result.lowerCaseCharacters).toStrictEqual(expectedOutput.lowerCaseCharacters);
            expect(result.vowels).toStrictEqual(expectedOutput.vowels);
            expect(result.consonants).toStrictEqual(expectedOutput.consonants);
            expect(result.firstCharacter).toStrictEqual(expectedOutput.firstCharacter);
        });
    });

    describe("generate Korra", () => {
        it("should throw (empty)", () => {
            expect(() => getParameters("")).toThrow();
        });

        it("should throw (space)", () => {
            expect(() => getParameters("ax tck")).toThrow();
        });

        it("should throw (doesn't start with letter)", () => {
            expect(() => getParameters("_axtck")).toThrow();
        });

        const username: string = "axtck";
        it("should succeed", async () => {
            await genSvg(username);
        });
    });
});