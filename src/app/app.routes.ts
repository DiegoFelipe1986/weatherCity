import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { CityComponent } from '../app/components/city/city.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'city/:name/:country/:pag', component: CityComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);