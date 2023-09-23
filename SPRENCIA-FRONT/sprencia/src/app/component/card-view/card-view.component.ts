import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/interfaces/actividades.interface';
import { ActivitiesService } from 'src/app/services/actividades.service';
import { OpinionsService } from 'src/app/services/opiniones.service';



@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})

// Implementamos el método OnInit 
export class CardViewComponent implements OnInit {

  activity: Activity | any;
  arrImagenes: any[] = [];
  arrOpinions: any[] = [];

  // Capturamos las rutas necesarias 
  constructor(
    private activitiesService: ActivitiesService,
    private activatedRoute: ActivatedRoute,
    private comentariosService: OpinionsService
    
  ) { }


 ngOnInit() {
  //   //Capturamos la parte variable de la ruta
     this.activatedRoute.params.subscribe(async (params: any) => {
       let id = parseInt(params.id);

       this.activity = await this.activitiesService.getById(id);
       console.log(this.activity);

     this.arrOpinions = await this.comentariosService.getByActivityId(id);
      
     })
   }
  }



