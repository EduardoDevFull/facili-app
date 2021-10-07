import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'sign-up',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formUser!: FormGroup;
  nome!: string;
  senha!: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(cliente: User) {
    this.formUser = this.formBuilder.group({
      name: [cliente.name],
      email: [cliente.email],
      password: [cliente.password],
      type: [cliente.type],
      cpf: [cliente.cpf],
      note: [cliente.note],
    })
  }

  onSubmit() {
    console.log(this.formUser.value);

    // Usar o método reset para limpar os controles na tela
    this.formUser.reset(new User());
  }
}
