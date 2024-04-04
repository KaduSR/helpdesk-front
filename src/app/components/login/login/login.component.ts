import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "./../../../services/auth.service";
import { Credenciais } from "./../../../models/credenciais";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: '',
    senha: '',
  };

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  token: string; // Variável para armazenar o token

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logar() {
    this.service.authenticate(this.creds).subscribe(
      (resposta) => {
        // Verifica se o header de Authorization está presente
        const authorizationHeader = resposta.headers.get('Authorization');
        if (authorizationHeader) {
          // Extrai o token da resposta (remove "Bearer " do início)
          const token = authorizationHeader.substring(7);
          
          // Realiza o login bem-sucedido
          this.service.successfulLogin(token);
          
          // Navega para a página principal
          this.router.navigate(['']);
           // Informa que o login foi bem-sucedido
        this.toast.success("Login bem-sucedido!");
        // Ou você pode definir uma variável de sucesso para usar em seu template
        // this.loginSuccess = true;
        } else {
          // Exibe uma mensagem de erro ao usuário
          this.toast.error("Token de autorização não encontrado na resposta");
        }
      },
      () => {
        // Exibe uma mensagem de erro ao usuário
        this.toast.error("Usuário e/ou senha inválidos");
      }
    );
  }
  

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
