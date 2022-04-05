import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/posts/recipe/comments/comments.component';
import { RecipeComponent } from './components/posts/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }, {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
