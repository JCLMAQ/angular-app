import { ENGLISH_DICTIONARY, FRENCH_DICTIONARY } from "../data/dictionaries";

export function translateDictionary(key: string, language: string): string {
// Return the translation of the passed key according the language key
    if (language.toLowerCase() === 'fr')
        return FRENCH_DICTIONARY[key]
    else
        return ENGLISH_DICTIONARY[key];
}
