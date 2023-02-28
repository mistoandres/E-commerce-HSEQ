import { Injectable } from '@angular/core';
import { Curso } from "../models/models.module";

@Injectable()

export class ServicesService {

  getCurso(): any {

    var cursos = new Array<Curso>();

    cursos = [
      new Curso(2, "Curso de Auxiliar de Tránsito", "assets/images/1.webp", "assets/images/1.1.png", "$70.000"),
      new Curso(3, "Curso de Transporte de Cargas Indivisibles, Extrapesadas y Extradimensionadas", "assets/images/2.webp", "assets/images/2.2.png", "$100.000"),
      new Curso(4, "Capacitación al Comité de Seguridad Vial", "assets/images/3.webp", "assets/images/3.3.png", "$75.000"),
      new Curso(5, "Curso Básico Obligatorio para Conductores que Transportan Mercancías Peligrosas", "assets/images/4.webp", "assets/images/4.4.png", "$250.000"),
      new Curso(6, "Curso de Seguridad Vial para Conductores de Servicio Público", "assets/images/5.webp", "assets/images/5.5.png", "$60.000"),
      new Curso(7, "Curso de Seguridad Vial para Conductores de Transporte Especial", "assets/images/6.webp", "assets/images/6.6.png", "$60.000"),
      new Curso(8, "Curso de Manejo Defensivo, Seguridad Vial y Normas de Tránsito", "assets/images/7.webp", "assets/images/7.7.png", "$80.000"),
      new Curso(9, "Curso de Operación Segura de Maquinaria Amarilla", "assets/images/8.webp", "assets/images/8.8.png", "$120.000"),
      new Curso(10, "Curso de Mecánica Básica y Alistamiento Vehicular", "assets/images/9.webp", "assets/images/9.9.png", "$150.000"),
      new Curso(11, "Curso de Monitora de Ruta Escolar", "assets/images/10.webp", "assets/images/10.10.png", "$70.000")
    ];
    return cursos;
  }
}