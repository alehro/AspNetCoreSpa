import { Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { FormsPlaygroundComponent } from './examples/forms-playground/forms-playground.component';
import { MobileTree } from '../../../_Site/MobileTree/MobileTree';

export const routes: Routes = [
    { path: '', component: ExamplesComponent, data: { displayText: 'Home' } },
    { path: 'mobile-tree', component: MobileTree, data: { displayText: 'Mobile Tree' }  },
    { path: 'forms-playground', component: FormsPlaygroundComponent, data: { displayText: 'Forms playground' } },
    { path: 'signalr', loadChildren: () => import('./examples/signalr/signalr.module').then(m => m.SignalrModule), data: { displayText: 'SignalR' } },
    { path: 'calendar', loadChildren: () => import('./examples/calendar/calendar.module').then(m => m.AppCalendarModule), data: { displayText: 'Calendar' } },
    { path: 'datatable', loadChildren: () => import('./examples/datatable/datatable.module').then(m => m.DatatableModule), data: { displayText: 'Datatable' } },
    //It looks like not used. There is an acting duplicate in crud-shop.module.ts
    { path: 'crud-shop', loadChildren: () => import('../../../_Site/crud-shop/crud-shop.module').then(m => m.CrudShopModule), data: { displayText: 'CRUD Shop' } },
];
