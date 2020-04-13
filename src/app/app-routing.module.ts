import { NgModule, ComponentFactory } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./components/menu/menu.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {path:'user/:id',component: UserListComponent},
  {path: '',component: UserEditComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
