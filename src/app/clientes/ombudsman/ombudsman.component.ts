import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './ombudsman.component.html',
  styleUrls: ['ombudsman.component.css']
})
export class OmbudsmanComponent implements OnInit {
  formCliente!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      name: [cliente.name],
      email: [cliente.email],
      type: [cliente.type],
      cpf: [cliente.cpf],
      note: [cliente.note],
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);

    // Usar o método reset para limpar os controles na tela
    this.formCliente.reset(new Cliente());
  }
}
