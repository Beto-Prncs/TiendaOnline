import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent:() => import ('./Views/home/home.component').then(m => m.HomeComponent)
  },
  {
    path:'item/:id',
    loadComponent:() => import ('./Views/item-detail/item-detail.component').then(m => m.ItemDetailComponent)
  },
  {
    path:'',
    loadComponent:()=> import ('./Views/items-list/items-list.component').then(m => m.ItemsListComponent)
  },
  {
    path:'not-found/:id',
    loadComponent:() => import('./Views/not-item/not-item.component').then(m => m.NotItemComponent)
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];
