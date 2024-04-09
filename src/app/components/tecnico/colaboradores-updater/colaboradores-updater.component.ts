import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Tecnico } from "../../../models/tecnico";
import { TecnicoService } from "../../../services/tecnico.service";

@Component({
  selector: "app-colaboradores-updater",
  templateUrl: "./colaboradores-updater.component.html",
  styleUrl: "./colaboradores-updater.component.css",
})
export class ColaboradoresUpdaterComponent {
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


  constructor(
    private service: TecnicoService,
    private Toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.colaborador.id = this.route.snapshot.paramMap.get("id");
    this.findById();
    
  }

  findById(): void {
    this.service.findById(this.colaborador.id).subscribe((resposta) => {
      resposta.perfis = [];
      this.colaborador = resposta;
    });
  }

  update(): void {
    this.service.update(this.colaborador).subscribe(
      () => {
        this.Toast.success("Atualizado com sucesso!", "Sucesso");
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
