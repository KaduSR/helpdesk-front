import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-colaboradores-create",
  templateUrl: "./colaboradores-create.component.html",
  styleUrl: "./colaboradores-create.component.css",
})
export class ColaboradoresCreateComponent {
  nome: FormControl = new FormControl(null, Validators.minLength(3));

  CPF: FormControl = new FormControl(null, Validators.required);

  email: FormControl = new FormControl(null, Validators.email);

  senha: FormControl = new FormControl(null, Validators.minLength(8));

  constructor() {
  }

  ngOnInit() {}

  validaCampos(): boolean {
    return (
      this.nome.valid && this.CPF.valid && this.email.valid && this.senha.valid
    );
  }

 
}
