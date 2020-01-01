import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared';

import { ExamplesComponent } from './examples.component';
import { routes } from './examples.routes';
import { FormsPlaygroundComponent } from './examples/forms-playground/forms-playground.component';
import { MobileTree } from '../../../_Site/MobileTree/MobileTree';
import { TreeModule } from "primeng/tree";
import { ContextMenuModule } from "primeng/contextmenu";

@NgModule({
    imports: [
        SharedModule,
        TreeModule,
        ContextMenuModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ExamplesComponent,
        MobileTree,
        FormsPlaygroundComponent]
})
export class ExamplesModule { }
