import { inject, Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Dictionary } from "../data/dictionaries";
import { getDictionaryHelper } from "../store/app.helpers";
import { DICTIONARIES_TOKEN } from "../tokens/dictionaries.token";


@Injectable({providedIn: 'root'})
export class DictionariesService {
    readonly translate = inject(TranslateService);

    readonly #dictionaries = inject(DICTIONARIES_TOKEN);

    readonly languages = Object.keys(this.#dictionaries);

    private dictionaryOf(language: string) {
        return getDictionaryHelper(language, this.#dictionaries);
    }

    getDictionary(language: string): Dictionary {
        if (!this.languages.includes(language)) {
            throw new Error(`Language ${language} not found in dictionaries`);
        }
        this.translate.use(language)
        return this.dictionaryOf(language);
    }

}
