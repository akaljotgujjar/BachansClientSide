import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BachanComponent } from './bachan/bachan.component';
import { GurVichaarComponent } from './gur-vichaar/gur-vichaar.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
            name: 'Home'
        }
    },
    {
        path: 'bachans',
        component: BachanComponent,
        resolve: {},
        data: {
            name: 'Bachans'
        }
    },
    {
        path: 'gurbaniVichaar',
        component: GurVichaarComponent,
        resolve: {},
        data: {
            name: 'gurbaniVichaar'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);
