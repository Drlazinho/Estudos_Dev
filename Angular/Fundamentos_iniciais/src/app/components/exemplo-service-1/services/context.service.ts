import { Injectable } from '@angular/core'
import { BehaviorSubject, map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private itemsSubject = new BehaviorSubject<any[]>([]);

  items$ = this.itemsSubject.asObservable().pipe(map((itemsList) =>
    structuredClone(itemsList)
  ));

  getValue() {
    return structuredClone(this.itemsSubject.getValue())
  }

  adicionarItem(item: {nome: string, price: number}) {
    const currentList = this.itemsSubject.value;

    this.itemsSubject.next([...currentList, item])
  }
}
