import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cliente } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: "app-clientes-updater",
  templateUrl: "./clientes-updater.component.html",
  styleUrl: "./clientes-updater.component.css",
})
export class clientesresUpdaterComponent {
  clientes: Cliente = {
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
    private service: ClienteService,
    private Toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientes.id = this.route.snapshot.paramMap.get("id");
    this.findById();
    
  }

  findById(): void {
    this.service.findById(this.clientes.id).subscribe((resposta) => {
      resposta.perfis = [];
      this.clientes = resposta;
    });
  }

  update(): void {
    this.service.update(this.clientes).subscribe(
      () => {
        this.Toast.success("Atualizado com sucesso!", "Sucesso");
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
    if (this.clientes.perfis.includes(perfil)) {
      this.clientes.perfis.splice(
        this.clientes.perfis.indexOf(perfil),
        1
      );
    } else {
      this.clientes.perfis.push(perfil);
    }
  }

  validaCampos(): boolean {
    return (
      this.nome.valid && this.CPF.valid && this.email.valid && this.senha.valid
    );
  }
}
