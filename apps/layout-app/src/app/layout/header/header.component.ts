import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbar,
    MatIcon,
    MatButtonModule,
    MatMenuModule,
    MatDivider,
    TitleCasePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
//  themeService = inject(ThemeService);

  responsiveService = inject(ResponsiveService);

  router = inject(Router);

  readonly sidenav = viewChild.required(MatSidenav);

  collapsed = this.responsiveService.isCollapsed;
  barOpen = this.responsiveService.isMenuBarOpen;

  // darkMode = signal(false);

  // setDarkModeClass = effect(() => {
  //   document.documentElement.classList.toggle('dark', this.darkMode());
  // });


  toggleMenu() {
    if(!this.barOpen()){
      this.barOpen.set(!this.barOpen());
    } else {
      if(!this.collapsed()){
        this.collapsed.set(!this.collapsed());

      } else {
        this.barOpen.set(!this.barOpen());
        this.collapsed.set(!this.collapsed());
      }
    }
  }

  navigate(route: string) {
    this.router.navigate([`/${route}`]);
  }


}
