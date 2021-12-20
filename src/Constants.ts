export class Constants {
    public static readonly regexPatterns = {
        letter: new RegExp(/[a-zA-Z]/),
        number: new RegExp(/[0-9]/),
        other: new RegExp(/[\W_]/),
        vowel: new RegExp(/[aeiou]/),
        consonant: new RegExp(/[bcdfghjklmnpqrstvwxyz]/)
    };
}