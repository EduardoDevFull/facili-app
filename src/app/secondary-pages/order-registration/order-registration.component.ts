import { OrderRegistrationService } from './../../service/order-registration.service';
import { PedidoRequest } from './../../core/pedido-request/pedido-request';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/user/user';

@Component({
  templateUrl: 'order-registration.component.html',
  styleUrls: ['order-registration.component.css']
})
export class OrderRegistrationComponent implements OnInit {

  formUser!: FormGroup;
  pedidoRequest: PedidoRequest = new PedidoRequest();

  constructor(private formBuilder: FormBuilder, private pedidoService: OrderRegistrationService) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formUser = this.formBuilder.group({
      codigo: [this.pedidoRequest.codigo],
      produto: [this.pedidoRequest.produto],
      status: [this.pedidoRequest.status],
      data_criacao: [this.pedidoRequest.data_criacao],
      notas: [this.pedidoRequest.notas],
    })
  }

  onSubmit() {
    this.pedidoRequest = this.formUser.value;
    this.pedidoRequest.data_criacao = null;

    this.pedidoService.create(this.pedidoRequest).subscribe(resposta => {
      window.alert("Criado com sucesso!");
    });


    console.log(this.pedidoRequest);

    // Usar o método reset para limpar os controles na tela
    this.formUser.reset(new User());
  }
}
