import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "../../../model";
import { FormControl } from "@angular/forms";
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
    if (this.name) {
      this.names.push({ name: this.name });
      console.log(this.name);
    }
    this.name = "";
  }

  removeUser(name) {
    if (this.names.length) {
      this.names.pop();
      confirm("Are you sure to delete a user");
    } else {
      alert("You have no user in the list");
    }
  }
}
