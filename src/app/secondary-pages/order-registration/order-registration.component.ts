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
  order: Order = new Order();

  constructor(private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formUser = this.formBuilder.group({
      code: [this.order.code],
      name: [this.order.name],
      status: [this.order.status],
      dataCriacao: [this.order.dataCriacao],
      description: [this.order.description]
    })
  }

  onSubmit() {
    this.order = this.formUser.value;
    console.log(this.order);

    // Usar o método reset para limpar os controles na tela
    this.formUser.reset(new User());
  }
}
