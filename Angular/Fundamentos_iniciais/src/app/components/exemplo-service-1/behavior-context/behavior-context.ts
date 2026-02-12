import { Component, inject, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service'

@Component({
  selector: 'app-behavior-context',
  imports: [],
  templateUrl: './behavior-context.html',
  styleUrl: './behavior-context.css',
})
export class BehaviorContextComponent implements OnInit {

  private readonly _contextService = inject(ContextService);

 ngOnInit(): void {
 this._contextService.items$.subscribe();

 }
}
