import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from './../../auth/auth.guard';
import { AuthService } from './../../services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';

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
    this.router.navigate(["home"]);
  }

  logout() {
    this.router.navigate(["login"]);
    this.AuthService.logout();
    this.Toast.info("Logout Successfully",'Logout', {timeOut:7000});

  }
}
