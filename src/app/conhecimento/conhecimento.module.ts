import { NgModule } from "@angular/core";
import { ConhecimentoRoutingModule } from "./conhecimento-routing.module";
import { ConhecimentoComponent } from "./conhecimento.component";

@NgModule({
    declarations: [
        ConhecimentoComponent
    ],
    imports: [
        ConhecimentoRoutingModule
    ],
    exports: [
        ConhecimentoComponent
    ]
})
export class ConhecimentoModule{

}