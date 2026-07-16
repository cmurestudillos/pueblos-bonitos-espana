import { Routes } from '@angular/router';
import { PueblosListComponent } from '../pages/pueblos-list/pueblos-list.component';
import { PuebloDetailComponent } from '../pages/pueblo-detail/pueblo-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/pueblos',
    pathMatch: 'full',
  },
  {
    path: 'pueblos',
    component: PueblosListComponent,
  },
  {
    path: 'pueblos/:nombre',
    component: PuebloDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/pueblos',
  },
];
