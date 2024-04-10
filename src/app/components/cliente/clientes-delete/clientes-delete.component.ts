import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cliente } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
  selector: "app-clientes-delete",
  templateUrl: "./clientes-delete.component.html",
  styleUrl: "./clientes-delete.component.css",
})
export class clientesresDeleteComponent {
  clientes: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: "",
  };
  
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

  delete(): void {
    this.service.delete(this.clientes).subscribe(
      () => {
        this.Toast.success("clientesr deletado com sucesso!", "Sucesso");
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
}
