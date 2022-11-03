import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ControlBase } from './controls/control-base';
import { DataService } from './data.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIf, DynamicFormComponent]
})
export class AppComponent implements OnInit {
  title = 'dynamic-form-app';
  meta!: ControlBase[];
  data!: any;
  constructor(
    private metaService: MetaService,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as ControlBase[];
  }
}
