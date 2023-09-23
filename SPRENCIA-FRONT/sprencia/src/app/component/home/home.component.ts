import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/actividades.service';
import { Activity } from 'src/app/interfaces/actividades.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  actividades: Activity[] = [];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.loadActivities();
  }

  async loadActivities() {
    try {
      const allActivities = await this.activitiesService.getAllHome();
      // Cargar solo las primeras 3 actividades
      this.actividades = allActivities.slice(0, 3);
    } catch (error) {
      console.error('Error loading activities:', error);
    }
  }
}

