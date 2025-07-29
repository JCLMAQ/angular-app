import { ENGLISH_DICTIONARY, FRENCH_DICTIONARY } from "../data/dictionaries";


export function translate(key: string, language: string): string {
    if (language.toLowerCase() === 'sp')
        return FRENCH_DICTIONARY[key]
    else
        return ENGLISH_DICTIONARY[key];
}
