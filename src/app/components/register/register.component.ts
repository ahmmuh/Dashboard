import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    email: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  existingUser() {
    this.router.navigateByUrl("/login");
    console.log("exis");
  }

  createUser() {
    console.log("user created");
    this.router.navigateByUrl("/login");
  }
}
