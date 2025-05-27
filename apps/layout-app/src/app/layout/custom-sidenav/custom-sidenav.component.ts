import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ResponsiveService } from '../../services/responsive.service';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { menuItems } from './menu-items';
import { SidenavHeaderComponent } from './sidenav-header/sidenav-header.component';

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    MenuItemComponent,
    SidenavHeaderComponent
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {

 responsiveService = inject(ResponsiveService);

  collapsed = computed(() => this.responsiveService.isCollapsed());

  menuItems = menuItems;

}
