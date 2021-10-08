import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { PageContentService } from 'src/app/service/page-content.service';

@Component({
  selector: 'page-content',
  templateUrl: 'page-content.component.html',
  styleUrls: ['page-content.component.css']
})
export class PageContentComponent {
  form: FormGroup;

  descricao: any;

  constructor(private pageContentService: PageContentService,
    private fb: FormBuilder) {

      this.form = this.fb.group({
        codigo: [null],
        descricao: [null]
      });
    }


  listarPedidos() {
    this.pageContentService.findAll().subscribe(resposta => {
      this.descricao = resposta[0].codigo;
      console.log(resposta);
    });
  }
}
