import { NgSwitch, NgSwitchCase } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../controls/control-base';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
})
export class ControlComponent implements OnInit {
  @Input() control!: ControlBase;
  @Input() form!: FormGroup;
  @ViewChild('placeholder', { static: true, read: ViewContainerRef })
  placeholder!: ViewContainerRef;

  #componentLookup: Record<string, { loader: () => Promise<any> }> = {
    dropdown: {
      loader: () => import('../controls/dropdown/dropdown.component'),
    },
    checkbox: {
      loader: () => import('../controls/checkbox/checkbox.component'),
    },
    textinput: {
      loader: () => import('../controls/text-input/text-input.component'),
    },
    label: {
      loader: () => import('../controls/label/label.component'),
    },
  };

  ngOnInit() {
    this.#componentLookup[this.control.controlType].loader().then((m) => {
      const componentClass = m.default;
      const component: any = this.placeholder.createComponent(componentClass);
      component.instance.meta = this.control;
      component.instance.form = this.form;
    });
  }
}
