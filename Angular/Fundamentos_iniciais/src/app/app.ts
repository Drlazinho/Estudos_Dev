import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuBotao } from "./meu-botao/meu-botao";
import { BotaoFlat } from "./botao-flat/botao-flat";
import { EventBinding } from './event-binding/event-binding'
import { PropertyBinding } from './property-binding/property-binding'
import { TwoWayDataBinding } from "./two-way-data-binding/two-way-data-binding";
import { SquarePopup } from './components/style-binding/square-popup/square-popup'
import { ProgressBar } from './components/style-binding/progress-bar/progress-bar'
import { DinamicText } from './components/style-binding/dinamic-text/dinamic-text'
import { ProductCard } from "./components/view-encapsulation/product-card/product-card";
import { UserDetails } from "./components/view-encapsulation/user-details/user-details";
import { ShadowHost } from "./components/view-encapsulation/shadow-dom/shadow-host/shadow-host";
import { If } from "./components/if/if";
import { Switch } from "./components/switch/switch";
import { For } from "./components/for/for";
import { Let } from "./components/let/let";
import { Input } from "./components/input/input";
import { Products } from "./components/exemplo-service-1/products/products";
import { SubjectComponent } from './components/exemplo-service-1/subject/subject'
import { BehaviorSubjectComponent } from "./components/exemplo-service-1/behavior-subject/behavior-subject";
import { BehaviorContextComponent } from "./components/exemplo-service-1/behavior-context/behavior-context";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuBotao, BotaoFlat, EventBinding, PropertyBinding, TwoWayDataBinding, SquarePopup, ProgressBar, DinamicText, ProductCard, UserDetails, ShadowHost, If, Switch, For, Let, Input, Products, SubjectComponent, BehaviorSubjectComponent, BehaviorContextComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('initial-angular');
}
