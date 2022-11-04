import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/control-base';
import { componentLookup } from './control.constants';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
})
export class ControlComponent implements OnInit {
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;
  @ViewChild('placeholder', { static: true, read: ViewContainerRef })
  placeholder!: ViewContainerRef;

  ngOnInit() {
    componentLookup[this.control.controlType].loader().then((m) => {
      const componentClass = m.default;
      const component: any = this.placeholder.createComponent(componentClass);
      component.instance.meta = this.control;
      component.instance.form = this.form;
    });
  }
}
