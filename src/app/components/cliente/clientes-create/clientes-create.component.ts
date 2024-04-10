import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Cliente } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-clientes-create",
  templateUrl: "./clientes-create.component.html",
  styleUrl: "./clientes-create.component.css",
})
export class ClientesCreateComponent {
  cliente: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };
  nome: FormControl = new FormControl(null, Validators.minLength(3));

  CPF: FormControl = new FormControl(null, Validators.required);

  email: FormControl = new FormControl(null, Validators.email);

  senha: FormControl = new FormControl(null, Validators.minLength(8));

  constructor(private service: ClienteService, 
    private Toast: ToastrService,
  private router: Router) {}

  ngOnInit() {}

  create(): void {
    this.service.create(this.cliente).subscribe(
      () => {
        this.Toast.success("clientesr criado com sucesso!", "Sucesso");
        this.router.navigate(["clientes"]);
      },
      (logerror) => {
        if (logerror.error.errors) {
          logerror.error.errors.forEach((element) => {
            this.Toast.error(element.message, "Erro!");
          });
        } else {
          this.Toast.error(logerror.error.message, "Erro!");
        }
      }
    );
  }
  addPerfil(perfil: any): void {
    if (this.cliente.perfis.includes(perfil)) {
      this.cliente.perfis.splice(
        this.cliente.perfis.indexOf(perfil),
        1
      );
    } else {
      this.cliente.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return (
      this.nome.valid && this.CPF.valid && this.email.valid && this.senha.valid
    );
  }
}
