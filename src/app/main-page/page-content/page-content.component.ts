import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PageContentService } from 'src/app/service/page-content.service';

@Component({
  selector: 'page-content',
  templateUrl: 'page-content.component.html',
  styleUrls: ['page-content.component.css']
})
export class PageContentComponent {
  form: FormGroup;
  descricao: any = '';

  constructor(private pageContentService: PageContentService,
    private fb: FormBuilder) {

      this.form = this.fb.group({
        codigo: [null],
        descricao: [null]
      });
    }


    // CRIAR METODO PARA CHAMAR FILTRO POR CODIGO
    // DICA:: o metodo esta dentro de pageContentService

    

    listarPedidos() {
      this.pageContentService.findAll().subscribe(resposta => {
        console.log(resposta);
        resposta.forEach((element: any) => {
          this.descricao = this.descricao.concat(element.codigo, ', ');
        });
      });
    }
  }
