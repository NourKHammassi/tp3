import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'nou-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input("materiel") m:Materiel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
