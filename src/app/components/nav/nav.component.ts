import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrl: "./nav.component.css",
})
export class NavComponent implements OnInit {
  constructor(private router: Router,
    private AuthService: AuthService,
    private Toast: ToastrService
  ) {}
  ngOnInit(): void {
    this.router.navigate(["chamados"]);
  }

  logout() {
    this.router.navigate(["login"]);
    this.AuthService.logout();
    this.Toast.info("Logout Successfully",'Logout', {timeOut:7000});

  }
}
