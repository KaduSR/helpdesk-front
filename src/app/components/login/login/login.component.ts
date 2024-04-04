import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from "../../../models/credenciais";
import { AuthService } from "../../../services/auth.service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: '',
    senha: '',
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService,
    private service: AuthService) {}

  ngOnInit(): void { }
  
  async logar() {
    try {
      const resposta = await this.service.authenticate(this.creds).toPromise();
      this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
    } catch (error) {
      this.toast.error('Usuário ou senha inválidos');
    }
  }  

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
