import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/usuarios.interface';
import { UsersService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  arrUsers: User[] = [];
  arrActivitiesBooked: any[] = [];
  arrActivitiesDone: any[] = [];


  constructor(
    private usersService: UsersService
  ) { }

  async ngOnInit() {
    this.arrUsers = await this.usersService.getById();
    this.arrActivitiesDone = await this.usersService.getActivitiesDoneByUser()
  }
}
