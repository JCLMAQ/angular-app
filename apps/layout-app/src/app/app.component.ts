import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout-app';

  translateService = inject(TranslateService);
 constructor() {
    const translateService = this.translateService;
    translateService.addLangs(['en','fr']);
    // translateService.setDefaultLang(this.appStore.user()?.Language || 'en'); // default language

    translateService.use(translateService.getBrowserLang() || 'en'); // use browser language by default
  }
}
