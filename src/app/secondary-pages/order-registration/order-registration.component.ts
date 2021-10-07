import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from 'src/app/core/order/order';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'order-registration',
  templateUrl: 'order-registration.component.html',
  styleUrls: ['order-registration.component.css']
})
export class OrderRegistrationComponent implements OnInit {
  formUser!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Order());
  }

  createForm(order: Order) {
    this.formUser = this.formBuilder.group({
      code: [order.code],
      request: [order.request],
      status: [order.status],
      dataCriacao: [order.dataCriacao],
      description: [order.description]
    })
  }

  onSubmit() {
    console.log(this.formUser.value);

    // Usar o método reset para limpar os controles na tela
    this.formUser.reset(new User());
  }
}
