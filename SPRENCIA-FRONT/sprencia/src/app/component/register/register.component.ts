import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  files: any;
  errorMessage: boolean;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.errorMessage = false;

    //Validamos todos los datos para que cumplan los requisitos para registrarse
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      apellido: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required
      ]),
      fecha_cumple: new FormControl('', [
        Validators.required
      ])
    }, [this.passwordCompare]);

  }
  //Si todo está correcto el cliente será registrado o de lo contrario obtendrá un error pidiendo los campos necesarios para el registro
  checkControl(pControlName: string, pError: string): boolean {
    if (this.form.get(pControlName)?.hasError(pError) && this.form.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  passwordCompare(pForm: AbstractControl): any {
    const password = pForm.get('password')?.value;
    const confirmPassword = pForm.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { 'passwordcompare': true }
    }
    return null;
  }

  async onSubmit() {

    // const { nombre, apellidos, ciudad, email, password, fecha_nacimiento } = this.form.value;
    // const fd = new FormData();
    // //fd.append('avatar', this.files[0]);
    // fd.append('name', nombre);
    // fd.append('surname', apellidos);
    // fd.append('city', ciudad);
    // fd.append('email', email);
    // fd.append('password', password);
    // fd.append('birth_date', fecha_nacimiento);
    // console.log(fd)
    console.log(this.form.value)
    const response = await this.usersService.create(this.form.value);

    if (response) {
      // Registro correcto
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro correcto',
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/login']);
    } else {
      //Registro incorrecto
      this.errorMessage = true;
    }
  }

  upload($event: any) {
    this.files = $event.target.files;
  }
}

