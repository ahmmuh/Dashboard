import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../../model";
@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"],
})
export class UserEditComponent implements OnInit {
  title: "Edit user";
  name: string;
  public names = [];
  constructor() {}

  ngOnInit(): void {}

  addUser() {
    if (this.name !== "") {
      this.names.push({ name: this.name });
      console.log(this.name);
      this.name = "";
    } else {
      //alert("Please fill out your name ");
    }
  }

  removeUser(name) {
    this.names.pop();
  }
}
