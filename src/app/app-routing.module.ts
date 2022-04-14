import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PostsComponent } from './components/posts/posts.component';
import { RecipeComponent } from './components/posts/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
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
