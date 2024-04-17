import { Component, ViewChild } from '@angular/core';
import { Chamado } from '../../../models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrl: './chamado-list.component.css',
})
export class ChamadoListComponent implements OnInit {
  ELEMENT_DATA: Chamado[] = [];

  displayedColumns: string[] = [
    'position',
    'titulo',
    'cliente',
    'tecnico',
    'dataAbertura',
    'dataFechamento',
    'prioridade',
    'status',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor () { }
  
  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
