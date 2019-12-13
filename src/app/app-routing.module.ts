import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { HeroComponent } from "./hero/hero.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: "heros",
    component: HeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
