import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-banco-crud',
  templateUrl: './banco-crud.component.html',
  styleUrls: ['./banco-crud.component.css']
})
export class BancoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Banco',
      icon: 'storefront',
      routeUrl: '/bancos'
    }
  }

  ngOnInit(): void {
  }

  navigateToBancoCreate(): void {
    this.router.navigate(['/bancos/create'])
  }

}
