import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  ELEMENT_DATA: any[] = [
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
    {nome: 'Matheus', telefone: '22992786172'},
  ];
  displayedColumns: string[] = ['nome', 'telefone', 'opcao'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    console.log('Clicado');
  }
}
