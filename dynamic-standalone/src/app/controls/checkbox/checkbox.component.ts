import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export default class CheckboxComponent implements OnInit {
  @Input() meta!: CheckBoxControl;
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
