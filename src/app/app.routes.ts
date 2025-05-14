import { Routes } from '@angular/router';
import { LoginComponent } from './domains/your-domain/components/login/login.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component:LoginComponent,
    }
];
