import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/models.module';
import { ServicesService } from 'src/app/shop/services.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public cursos!: Array<Curso>;
  public page!: number;

  constructor(
    private _service: ServicesService,
  ) { }

  ngOnInit(): void {
    this.cursos = this._service.getCurso();
  }
}
