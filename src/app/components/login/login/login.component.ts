import { Component, OnInit } from "@angular/core";
import { Credenciais } from "../../../models/credenciais";
import { FormControl, Validators } from "@angular/forms";
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from "../../../servives/auth.service";
import { response } from "express";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: "",
    senha: "",
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService,
    private service: AuthService) {}

  ngOnInit(): void { }

    logar() {
      this.service.authenticate (this.creds).subscribe(resposta => {
        this.toast.info(resposta.headers.get('AuthService'))
      })
    }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
