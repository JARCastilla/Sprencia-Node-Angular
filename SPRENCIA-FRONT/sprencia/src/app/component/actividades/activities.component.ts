import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/actividades.interface';
import { Categorias } from 'src/app/interfaces/categorias.interface';
import { Ciudades } from 'src/app/interfaces/ciudades.interface';
import { ActivitiesService } from 'src/app/services/actividades.service';
import { CategoriesService } from 'src/app/services/categorias.service';
import { CitiesService } from 'src/app/services/ciudades.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  // Variables para recoger datos
  arrCategories: Categorias[] = [];
  arrCiudades: Ciudades[] = [];
  arrActividades: Activity[] = [];
  filteredActivities: Activity[] = [];



  // Variables para resetear campos select
  categoriasValue!: any;
  ciudadesValue!: any;
  

  // Variables que recogen el valor de select
  categorias!: string;
  ciudades!: string;
  

  // Variable mensaje sin resultados
  message!: string;

  // Variable para mostrar las actividades filtradas
  showFilteredActivities!: boolean;

  // Variable para ordenar por precio
  sortOrder: string = 'desc';

  // Inyectamos los servicios
  constructor(
    private categoriesService: CategoriesService,
    private citiesService: CitiesService,
    private activitiesService: ActivitiesService,

  ) { }

  // Cargamos los datos al cargar el componente
  async ngOnInit() {
   this.arrActividades = await this.activitiesService.getAll();
   console.log(this.arrActividades);
  }

//   // Capturamos el valor de cada select
//   getCategory($event: any) {
//     this.categorias = $event.target.value;
//   }

//   getCity($event: any) {
//     this.ciudades = $event.target.value;
//   }



//   getByActivityiD($event: any) {
//     this.getByActivityiD = $event.target.value;
//   }


//   // Función para filtrar
//   filter() {
//     this.filteredActivities = [...this.arrActividades];

//     if (this.categorias) {
//       this.filteredActivities = this.filteredActivities.filter(item => item.categorias.includes(this.categorias))
//     }

//     if (this.ciudades) {
//       this.filteredActivities = this.filteredActivities.filter(item => item.ciudades.includes(this.ciudades))
//     }

   
//     if (this.filteredActivities.length > 0) {
//       this.showFilteredActivities = true
//       this.message = '';
//     } else {
//       this.filteredActivities
//       this.message = "No hay resultados"
//       this.showFilteredActivities = true
//     }

//   }

//   // Función para borrar
//   async delete() {
//     this.getData();
//   }

//   // Función para ordenar
//   sortProducts() {
//     if (this.sortOrder === 'desc') {
//       this.arrActividades.sort((a, b) => b.precio - a.precio);
//       this.sortOrder = 'asc';
//     } else {
//       this.arrActividades.sort((a, b) => a.precio - b.precio);
//       this.sortOrder = 'desc';
//     }
//   }

//   // Función para la carga de información, componetizada para su reutilización
//   async getData() {
//     try {
//       this.arrCategories = await this.categoriesService.getAllCategories();
//       console.log(this.arrCategories);
//       this.arrCiudades = await this.citiesService.getAllCities();
//       console.log(this.arrCiudades);
//       this.arrActividades = await this.activitiesService.getAll();
//       this.filteredActivities = [...this.arrActividades];
//       this.showFilteredActivities = false;
//       this.categoriasValue = '';
//       this.ciudadesValue = '';
//       this.categorias = '';
//       this.ciudades = '';
//       this.message = '';
//     } catch (error) {
//       console.log(error)
//     }
//   }
 }

