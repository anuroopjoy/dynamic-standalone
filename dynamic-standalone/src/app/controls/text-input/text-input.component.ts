import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../control-base';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export default class TextInputComponent implements OnInit {
  @Input() meta!: ControlBase;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
