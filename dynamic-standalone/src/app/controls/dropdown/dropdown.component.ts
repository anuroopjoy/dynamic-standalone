import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropDownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
})
export default class DropdownComponent implements OnInit {
  @Input() meta!: DropDownControl;
  @Input() form!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
