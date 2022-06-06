import { Router, ActivatedRoute } from "@angular/router";
import { BancoService } from "../banco.service";
import { Banco } from "../banco.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-Banco-delete",
  templateUrl: "./Banco-delete.component.html",
  styleUrls: ["./Banco-delete.component.css"],
})
export class BancoDeleteComponent implements OnInit {
  Banco: Banco;

  constructor(
    private BancoService: BancoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BancoService.readById(id).subscribe((Banco) => {
      this.Banco = Banco;
    });
  }

  deleteBanco(): void {
    this.BancoService.delete(this.Banco.id).subscribe(() => {
      this.BancoService.showMessage("Banco excluido com sucesso!");
      this.router.navigate(["/bancos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/bancos"]);
  }
}
