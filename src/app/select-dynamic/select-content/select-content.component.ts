import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-select-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf],
  templateUrl: './select-content.component.html',
  styleUrl: './select-content.component.css'
})
export class SelectContentComponent implements OnChanges, OnInit {
  @Input() items = []
  @Input() txtInput = ''

  @Output() choose: EventEmitter<string> = new EventEmitter()

  list = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['txtInput'] && changes['txtInput'].currentValue) {
      const value = changes['txtInput'].currentValue

      // Tìm kiếm theo tiếng việt
      this.list = this.items.filter((item: string) => item.toLowerCase().includes(value.toLowerCase()))
    } else {
      this.list = this.items
    }
  }

  ngOnInit() {
  }


  onClick(value: string) {
    this.choose.emit(value)
  }

}
