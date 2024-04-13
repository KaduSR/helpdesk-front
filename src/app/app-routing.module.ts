import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { TecnicoListComponent } from "./components/tecnico/colaboradores-list/colaboradores-list.component";
import { ColaboradoresCreateComponent } from "./components/tecnico/colaboradores-create/colaboradores-create.component";
import { ColaboradoresUpdaterComponent } from "./components/tecnico/colaboradores-updater/colaboradores-updater.component";
import { ColaboradoresDeleteComponent } from "./components/tecnico/colaboradores-delete/colaboradores-delete.component";
import { ClienteListComponent } from "./components/cliente/clientes-list/clientes-list.component";
import { ClientesCreateComponent } from "./components/cliente/clientes-create/clientes-create.component";
import { clientesresUpdaterComponent } from "./components/cliente/clientes-updater/clientes-updater.component";
import { clientesresDeleteComponent } from "./components/cliente/clientes-delete/clientes-delete.component";
import { ChamadoListComponent } from "./components/chamado/chamado-list/chamado-list.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent },
      { path: "colaboradores", component: TecnicoListComponent },
      { path: "colaboradores/create", component: ColaboradoresCreateComponent },
      {
        path: "colaboradores/updater/:id",
        component: ColaboradoresUpdaterComponent,
      },
      {
        path: "colaboradores/delete/:id",
        component: ColaboradoresDeleteComponent,
      },
      { path: "clientes", component: ClienteListComponent },
      { path: "clientes/create", component: ClientesCreateComponent },
      {
        path: "Clientes/updater/:id",
        component: clientesresUpdaterComponent,
      },
      {
        path: "clientes/delete/:id",
        component: clientesresDeleteComponent,
      },
      { path: "chamados", component: ChamadoListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
