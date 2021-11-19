import { Component, OnInit } from '@angular/core';
import { ohm } from '../test/ohm.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  v: any = 'Voltios'
  r: any = 'Resistencia eléctrica'
  i: any = 'Intensidad de corriente'

  resultado: any = ''

  calcular() {
    this.resultado = ohm(this.r, this.i)
    
    this.v = this.resultado + ' v'
  }
}
