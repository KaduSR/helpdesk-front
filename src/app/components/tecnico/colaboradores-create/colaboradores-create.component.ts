import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Tecnico } from "../../../models/tecnico";
import { TecnicoService } from "../../../services/tecnico.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-colaboradores-create",
  templateUrl: "./colaboradores-create.component.html",
  styleUrl: "./colaboradores-create.component.css",
})
export class ColaboradoresCreateComponent {
  colaborador: Tecnico = {
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

  constructor(private service: TecnicoService, 
    private Toast: ToastrService,
  private router: Router) {}

  ngOnInit() {}

  create(): void {
    this.service.create(this.colaborador).subscribe(
      () => {
        this.Toast.success("Colaborador criado com sucesso!", "Sucesso");
        this.router.navigate(["colaboradores"]);
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
    if (this.colaborador.perfis.includes(perfil)) {
      this.colaborador.perfis.splice(
        this.colaborador.perfis.indexOf(perfil),
        1
      );
    } else {
      this.colaborador.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return (
      this.nome.valid && this.CPF.valid && this.email.valid && this.senha.valid
    );
  }
}
