import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from 'src/app/servises/estados/estados.service';
import { PaisesService } from 'src/app/servises/paises/paises.service';
import { PersonaService } from 'src/app/servises/persona/persona.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

  personaForm!: FormGroup;
  paises: any;
  estados: any;

  constructor(
  public fb: FormBuilder,
  public estadosService: EstadosService,
  public paisesService: PaisesService,
  public personaService: PersonaService
  ){

  }

  ngOnInit(): void {

  this.personaForm = this.fb.group({
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    edad : ['', Validators.required],
    pais : ['', Validators.required],
    estado : ['', Validators.required],
   });;

    this.paisesService.getAllPaises().subscribe(resp => {
      this.paises = resp;
      },
      error => { console.error(error) }
        )
  }


  guardar(): void{
//
  }

  cargarEstadosPorPaisesId(event){
  console.log(event);
    this.estadosService.getAllEstadosByPais(event.target.value).subscribe(resp => {
      this.estados = resp;
      },
      error => { console.error(error) }
        )
  }

}
