import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../model";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  name: string;
  @Input() public people = [];
  toggleClass = false;
  constructor() {}

  ngOnInit(): void {}

  toggleColor() {
    this.toggleClass = !this.toggleClass;
  }
}
