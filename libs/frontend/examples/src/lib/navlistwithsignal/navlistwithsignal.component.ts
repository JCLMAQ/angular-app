import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';
import { ITEMS } from './items';

@Component({
  selector: 'lib-navlistwithsignal',
  imports: [JsonPipe],
  templateUrl: './navlistwithsignal.component.html',
  styleUrl: './navlistwithsignal.component.scss',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavlistwithsignalComponent {

  readonly items = signal(['Apple', 'Banana', 'Cherry']);

  readonly selectedItem = linkedSignal<string[], string>({
    source: this.items,
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;
      return prod[0];
    }
  })

  addItem() {
    this.items.update(items => [...items, ITEMS[items.length]]);
  }

  removeItem() {
    this.items.update(items => items.slice(0, -1));
  }

  nextItem() {
    this.selectedItem.update(selected => {
      const index = this.items().indexOf(selected);
      return this.items()[(index + 1) % this.items().length];
    });
  }

  prevItem() {
    this.selectedItem.update(selected => {
      const index = this.items().indexOf(selected);
      return this.items()[(index - 1 + this.items().length) % this.items().length];
    });
  }


}
