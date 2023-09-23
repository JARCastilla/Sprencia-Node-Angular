import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/actividades.interface';
import { ActivitiesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {

  arrActividades: Activity[] = [];

  constructor(private activitiesService: ActivitiesService) { }

  async ngOnInit(): Promise<any> {
    try {
      const response = await this.activitiesService.getAllHome();
      this.arrActividades = response.results;
    } catch (error) {
      console.log(error);
    }
  }
}
