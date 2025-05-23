import { CommonModule } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ResponsiveService } from '../services/responsive.service';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    MatSidenavModule,
    CustomSidenavComponent,
    HeaderComponent,
    RouterOutlet,
    MatButtonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
 responsiveService = inject(ResponsiveService);
  readonly sidenav = viewChild.required(MatSidenav);

  backDrop() {
    if (this.responsiveService.isMobile()) {
      this.responsiveService.isMenuBarOpen.set(!this.responsiveService.isMenuBarOpen());
    }
  }

}
