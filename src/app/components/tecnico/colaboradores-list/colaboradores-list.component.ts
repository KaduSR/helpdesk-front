import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Tecnico } from "../../../models/tecnico";
import { TecnicoService } from '../../../services/tecnico.service';

@Component({
  selector: "app-colaboradores-list",
  templateUrl: "./colaboradores-list.component.html",
  styleUrl: "./colaboradores-list.component.css",
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA: Tecnico[] = [];

  displayedColumns: string[] = ["position", "name", "weight", "symbol","perfis", "acoes"];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: TecnicoService) {}
  ngOnInit(): void {
    this.findall();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findall() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Tecnico>(resposta)
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

