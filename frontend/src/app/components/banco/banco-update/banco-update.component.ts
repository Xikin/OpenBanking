import { Banco } from "../banco.model";
import { Router, ActivatedRoute } from "@angular/router";
import { BancoService } from "../banco.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banco-update",
  templateUrl: "./banco-update.component.html",
  styleUrls: ["./banco-update.component.css"],
})
export class BancoUpdateComponent implements OnInit {
  Banco: Banco;

  constructor(
    private BancoService: BancoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.BancoService.readById(id).subscribe((Banco) => {
      this.Banco = Banco;
    });
  }

  updateBanco(): void {
    this.BancoService.update(this.Banco).subscribe(() => {
      this.BancoService.showMessage("Banco atualizado com sucesso!");
      this.router.navigate(["/bancos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/bancos"]);
  }
}
