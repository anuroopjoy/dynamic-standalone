import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from '../control/control.component';
import { ControlBase } from '../controls/control-base';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, ControlComponent],
})
export class DynamicFormComponent implements OnChanges {
  @Input() meta: ControlBase[] = [];
  @Input() data: any = {};
  form!: FormGroup;
  payLoad = '';

  constructor(private metaService: MetaService) {}

  ngOnChanges() {
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
