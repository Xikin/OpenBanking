import { Banco } from '../banco.model';
import { BancoService } from '../banco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Banco-create',
  templateUrl: './banco-create.component.html',
  styleUrls: ['./banco-create.component.css']
})
export class BancoCreateComponent implements OnInit {

  Banco: Banco = {
    name: '',
    agencia: null
  }

  constructor(private BancoService: BancoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createBanco(): void {
    this.BancoService.create(this.Banco).subscribe(() => {
      this.BancoService.showMessage('Banco criado!')
      this.router.navigate(['/bancos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/bancos'])
  }
}
