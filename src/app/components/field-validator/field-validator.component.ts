import { Component, OnInit, Input } from '@angular/core';

import { NgControl } from "@angular/forms";

@Component({
  selector: 'app-field-validator',
  templateUrl: './field-validator.component.html',
  styleUrls: ['./field-validator.component.css']
})
export class FieldValidatorComponent implements OnInit {

  @Input() control: NgControl;
  @Input() submitted: boolean;
  @Input() required: string = 'Campo obligatorio';
  @Input() pattern: string = 'Formato de campo inválido';
  @Input() compare: string = 'Los campos deben ser iguales';


  constructor() {

  }

  ngOnInit(): void {
  }

}
