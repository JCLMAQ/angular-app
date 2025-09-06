import { Dictionary } from "../data/dictionaries";

export interface DictionarySlice {
    readonly selectedLanguage: string;
    readonly possibleLanguages: string[];
    readonly selectedDictionary: Dictionary | null;
}

export const initialDictionarySlice: DictionarySlice = {
    selectedLanguage: '',
    possibleLanguages: [],
    selectedDictionary: null,
}
