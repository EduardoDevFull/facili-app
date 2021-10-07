import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'ombudsman.component.html',
  styleUrls: ['ombudsman.component.css']
})
export class OmbudsmanComponent implements OnInit {
  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(cliente: User) {
    this.formUser = this.formBuilder.group({
      name: [cliente.name],
      email: [cliente.email],
      type: [cliente.type],
      cpf: [cliente.cpf],
      note: [cliente.note],
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formUser.value);

    // Usar o método reset para limpar os controles na tela
    this.formUser.reset(new User());
  }
}
