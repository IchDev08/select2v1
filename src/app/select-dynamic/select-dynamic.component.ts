import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ElementRef,
  HostListener,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SelectContentComponent} from "./select-content/select-content.component";

@Component({
  selector: 'app-select-dynamic',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SelectContentComponent
  ],
  templateUrl: './select-dynamic.component.html',
  styleUrl: './select-dynamic.component.css'
})
export class SelectDynamicComponent {

  items = ['ngô huy ich', 'tran thi kim oanh', 'ngo dien vi', 'ngo hong vin']
  txtInput = ''

  @ViewChild('createSelect', {read: ViewContainerRef}) select2!: ViewContainerRef
  @ViewChild('search') iptSearch!: ElementRef

  componentRef!: ComponentRef<any>

  constructor() {
  }

  onFocus() {
    if (!this.txtInput) {
      this.select2.clear()
      this.componentRef = this.select2?.createComponent(SelectContentComponent)
      this.componentRef?.setInput('items', this.items)
    }

    if (this.componentRef && this.componentRef.instance?.choose) {
      this.componentRef.instance?.choose.subscribe((res: string) => {
        this.iptSearch.nativeElement.value = res
      })
    }
  }


  onKeyUp(ipt: string) {
    this.txtInput = ipt.trim()
    this.componentRef?.setInput('txtInput', this.txtInput)
  }

  @HostListener('document:click')
  clickOut() {
    // console.log('s')
  }


}
