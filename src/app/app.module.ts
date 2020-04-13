import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserEditComponent, UserListItemComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
