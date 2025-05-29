import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-sidenav-header',
  imports: [CommonModule],
  templateUrl: './sidenav-header.component.html',
  styleUrl: './sidenav-header.component.scss',
})
export class SidenavHeaderComponent {

  collapsed = input(false);

  profilePicSize = computed(() => (this.collapsed() ? '32' : '100'));

}
