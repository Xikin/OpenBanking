import { BancoDeleteComponent } from './components/banco/banco-delete/Banco-delete.component';
import { BancoUpdateComponent } from './components/banco/banco-update/Banco-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { BancoCrudComponent } from "./views/Banco-crud/Banco-crud.component";
import { BancoCreateComponent } from './components/banco/banco-create/Banco-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "bancos",
    component: BancoCrudComponent
  },
  {
    path: "bancos/create",
    component: BancoCreateComponent
  },
  {
    path: "bancos/update/:id",
    component: BancoUpdateComponent
  },
  {
    path: "bancos/delete/:id",
    component: BancoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
