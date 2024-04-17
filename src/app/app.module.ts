import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from "@angular/common/http";

// Imports para componentes do Angular Material
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

// Componentes do projeto
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { ToastrModule } from "ngx-toastr";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login/login.component";
import { NavComponent } from "./components/nav/nav.component";
import { ColaboradoresCreateComponent } from "./components/tecnico/colaboradores-create/colaboradores-create.component";
import { ColaboradoresDeleteComponent } from "./components/tecnico/colaboradores-delete/colaboradores-delete.component";
import { TecnicoListComponent } from "./components/tecnico/colaboradores-list/colaboradores-list.component";
import { ColaboradoresUpdaterComponent } from "./components/tecnico/colaboradores-updater/colaboradores-updater.component";

import { ClientesCreateComponent } from "./components/cliente/clientes-create/clientes-create.component";
import { clientesresDeleteComponent } from "./components/cliente/clientes-delete/clientes-delete.component";
import { ClienteListComponent } from "./components/cliente/clientes-list/clientes-list.component";
import { clientesresUpdaterComponent } from "./components/cliente/clientes-updater/clientes-updater.component";
import { AuthInterceptorProvider } from "./intercptors/auth.interceptor";
import { ChamadoListComponent } from './components/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './components/chamado/chamado-create/chamado-create.component';

// Módulo principal da aplicação

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ColaboradoresCreateComponent,
    TecnicoListComponent,
    ColaboradoresUpdaterComponent,
    ColaboradoresDeleteComponent,
    ClienteListComponent,
    ClientesCreateComponent,
    clientesresDeleteComponent,
    clientesresUpdaterComponent,
    ChamadoListComponent,
    ChamadoCreateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
    }),
    NgxMaskDirective,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthInterceptorProvider,
    provideNgxMask({
      /*Opções de CFG */
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
