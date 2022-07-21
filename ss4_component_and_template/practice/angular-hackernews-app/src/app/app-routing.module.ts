import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from "./article/article.component";

import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {path: "list", component: ArticleComponent},
  {path: "create", component: CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
