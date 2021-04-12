import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@app/shared/components';
import { AuthGuard } from './security/guards/auth.guard';
// import { AuthGuard } from './security/guards/auth.guard';

const routes: Routes = [
  {
    path: 'software',
    loadChildren: () => import('./software/software.module').then(m => m.SoftwareModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'assembly',
    loadChildren: () => import('./assembly/assembly.module').then(m => m.AssemblyModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule),
  },
  {
    path: '',
    redirectTo: 'software',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
