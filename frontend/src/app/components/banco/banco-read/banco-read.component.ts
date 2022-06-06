import { BancoService } from '../banco.service';
import { Banco } from '../banco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Banco-read',
  templateUrl: './banco-read.component.html',
  styleUrls: ['./banco-read.component.css']
})
export class BancoReadComponent implements OnInit {

  Bancos: Banco[]
  displayedColumns = ['id', 'name', 'agencia', 'action']
  
  constructor(private BancoService: BancoService) { }

  ngOnInit(): void {
    this.BancoService.read().subscribe(Bancos => {
      this.Bancos = Bancos
    })
  }

}
