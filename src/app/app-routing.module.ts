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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
