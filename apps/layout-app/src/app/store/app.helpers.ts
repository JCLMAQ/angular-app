import { Dictionaries, Dictionary } from "../data/dictionaries";

export function getDictionaryHelper(language: string, dictionaries: Dictionaries): Dictionary {
    return dictionaries[language] ?? Object.values(dictionaries)[0];
}


export function translateFromDictionary(key: string, dictionary: Dictionary | null): string {
    if (!dictionary) return key;
    return dictionary[key] ?? key;
}

export function translateFromDictionaryToPair(key: string, dictionary: Dictionary | null): {key:string, name: string} {
    return { key, name: translateFromDictionary(key, dictionary) };
}

export function translateFromDictionaryToPairs(keys: string[], dictionary: Dictionary | null): {key:string, name: string}[] {
    return keys.map(key => translateFromDictionaryToPair(key, dictionary));
}
