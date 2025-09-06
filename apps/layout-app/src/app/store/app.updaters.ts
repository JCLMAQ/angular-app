import { PartialStateUpdater } from "@ngrx/signals";
import { Dictionary } from "../data/dictionaries";
import { AppSlice } from "./app.slice";

export function changeLanguageDictionary(languages: string[]): PartialStateUpdater<AppSlice> {
  // select the next language in the list one after another
    return state => {
        const index = languages.indexOf(state.selectedLanguage) ?? -1;
        const nextIndex = (index + 1) % languages.length;
        const selectedLanguage = languages[nextIndex];
        return { selectedLanguage };
    }
}

export function resetLanguagesDictionaries(languages: string[]): PartialStateUpdater<AppSlice> {
  // reset the languages store
    return _ => ({
        possibleLanguages: languages,
        selectedLanguage: languages[0]
    })
}

export function setDictionary(dictionary: Dictionary): PartialStateUpdater<AppSlice> {
  // Define the selected dictionary
    return _ => ({ selectedDictionary: dictionary });
}

export function switchLanguageDictionary(language: string): PartialStateUpdater<AppSlice> {
  // Change the dictionary to the selected language
    return state => {
        if (state.possibleLanguages.includes(language)) {
            return { selectedLanguage: language };
        }
        throw new Error(`Language ${language} is not supported`);
    }
}
