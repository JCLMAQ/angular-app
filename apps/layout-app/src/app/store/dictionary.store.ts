import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { withBusy } from '../custom-store-features/with-busy/with-busy.feature';
import { Dictionary } from '../data/dictionaries';
import { DictionariesService } from '../services/dictionaries.service';
import { NotificationsService } from '../services/notifications.service';
import { DICTIONARIES_TOKEN } from '../tokens/dictionaries.token';
import { initialDictionarySlice } from './dictionary.slice';
import {
  changeLanguageDictionary,
  resetLanguagesDictionaries,
  switchLanguageDictionary
} from './dictionary.updaters';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialDictionarySlice),
  withBusy(),
  withProps((_) => {
    const _dictionariesService = inject(DictionariesService);
    const _languages = _dictionariesService.languages;
    const _dictionaries = inject(DICTIONARIES_TOKEN);

    return {
      _dictionariesService,
      _dictionaries,
      _languages,
      _notifications: inject(NotificationsService),
    };
  }),
  withMethods((store) => {
      const dictionaries = inject(DICTIONARIES_TOKEN);
      const languages = Object.keys(dictionaries);
        return {
            changeLanguage: () => patchState(store, changeLanguageDictionary(languages)),
            switchLanguage: (language: string) => patchState(store,  switchLanguageDictionary(language) ),
            setDictionary: (dictionary: Dictionary) => patchState(store, { selectedDictionary: dictionary }),
            _resetLanguages: () => patchState(store, resetLanguagesDictionaries(languages))
        }
  }),
  withHooks((store) => ({
    onInit: () => {
     const dictionaries = inject(DICTIONARIES_TOKEN);
            const languages = Object.keys(dictionaries);
            patchState(store, {
                possibleLanguages: languages,
                selectedLanguage: languages[0]
            })
    },
  })),
  withDevtools('dictionary-store')
);
