import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Tecnico } from "../../../models/tecnico";

@Component({
  selector: "app-tecnico-list",
  templateUrl: "./tecnico-list.component.html",
  styleUrl: "./tecnico-list.component.css",
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA: Tecnico[] = [
    {
    id: 1 ,
    nome: 'Carlos Eduardo' ,
    cpf: '135.477.317-98',
    email: 'carlos@gmail.com',
    senha: '1234',
    perfis: ['0'],
    dataCriacao: '20/08/2023'
    }

  ];

  displayedColumns: string[] = ["position", "name", "weight", "symbol", "acoes"];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() {}
  ngOnInit(): void {}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

