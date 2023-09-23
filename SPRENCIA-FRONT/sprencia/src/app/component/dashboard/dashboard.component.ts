import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/interfaces/categorias.interface';
import { Ciudades } from 'src/app/interfaces/ciudades.interface';
import { ActivitiesService } from 'src/app/services/actividades.service';
import { CategoriesService } from 'src/app/services/categorias.service';
import { CitiesService } from 'src/app/services/ciudades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  arrImages: File[] = [];

  arrCategories: Categorias[] = [];
  arrCities: Ciudades[] = [];
  
  categorias!: string;
  ciudad!: string;
  

  constructor(
    private categoriesService: CategoriesService,
    private citiesService: CitiesService,
    private activitiesService: ActivitiesService,
    private router: Router
  ) {
    this.form = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      resumen: new FormControl(),
      categoria_id: new FormControl(),
      precio: new FormControl(),
      ciudad_id: new FormControl(),
      
    })
  }

  async ngOnInit() {
    this.arrCategories = await this.categoriesService.getAllCategories();
    console.log(this.arrCategories);
    this.arrCities = await this.citiesService.getAllCities();
    console.log(this.arrCities);
    
  }

  async onSubmit() {

    // const { titulo, descripcion, resumen, categorias, precio, ciudad } = this.form.value;
    // // Creamos un FormData en el que le pasaremos todos los campos de form además de las imágenes subidas
    // const fd = new FormData();

    // fd.append('titulo', titulo);
    // fd.append('descripcion', descripcion);
    // fd.append('resumen', resumen);
    // fd.append('categorias', categorias);
    // fd.append('precio', precio);
    // fd.append('ciudad', ciudad);
    

    // // Añadimos cada imagen al FormData
    // for (let i = 0; i < this.arrImages.length; i++) {
    //   fd.append('images', this.arrImages[i], this.arrImages[i].name)
    // }
    // Creamos la petición con el servicio
    let response = await this.activitiesService.create(this.form.value);
    if (response) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Actividad creada correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/actividades']);
    } else {
      console.log(response.error);
    }
  }

  // Subimos las imágenes
  uploadImages(event: any): void {
    this.arrImages = event.target.files;
  }

  getCategory($event: any) {
    this.categorias = $event.target.value;
  }

  getCity($event: any) {
    this.ciudad = $event.target.value;
  }

  
}
