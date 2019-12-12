import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HowtoComponent } from "./howto/howto.component";
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "play",
    component: PlayComponent
  },
  {
    path: "howto",
    component: HowtoComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
