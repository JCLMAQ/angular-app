import { Component, computed, input } from '@angular/core';


@Component({
    selector: 'app-progress',
    imports: [],
    templateUrl: './progress.component.html',
    styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  readonly value = input.required<number>();

  readonly max = input.required<number>();

  readonly ratio = computed(() => this.value() / this.max());

}
