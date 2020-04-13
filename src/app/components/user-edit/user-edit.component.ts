import { Component, OnInit } from "@angular/core";
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
    }
    this.name = "";
  }

  removeUser(name) {
    if (this.names.length > 0) {
      this.names.pop();
      confirm("Are you sure to delete one of these users?");
    } else {
      alert("There is no a user to delete!");
    }
  }
}
