import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Cliente } from "../../../models/cliente";
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: "app-clientes-list",
  templateUrl: "./clientes-list.component.html",
  styleUrl: "./clientes-list.component.css",
})
export class ClienteListComponent implements OnInit {
  ELEMENT_DATA: Cliente[] = [];

  displayedColumns: string[] = ["position", "name", "weight", "symbol","perfis", "acoes"];
  dataSource = new MatTableDataSource<Cliente>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ClienteService) {}
  ngOnInit(): void {
    this.findall();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findall() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Cliente>(resposta)
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  perfis: string;
}

