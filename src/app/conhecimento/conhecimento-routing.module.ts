import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConhecimentoComponent } from "./conhecimento.component";

const routes: Routes = [
    {
        path: '',
        component: ConhecimentoComponent
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ConhecimentoRoutingModule{

}