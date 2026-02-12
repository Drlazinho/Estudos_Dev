import { Component, ViewEncapsulation } from '@angular/core'
import { Child } from "../child/child"

@Component({
  selector: 'app-shadow-host',
  imports: [Child],
  template: `
    <p>
      shadow-host works!
    </p>
    <app-child tema="primario"/>
    <app-child tema="secundario"/>
    <app-child tema="secundario" class="ativo"/>

    <div class="tema-escuro">
      <app-child tema="secundario" class="ativo"/>
      <app-child tema="secundario" class="ativo"/>
    </div>
  `,
  styles: `
  p {
    color: red;
  }
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowHost {

}
