import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  lista1:{id: number, nombre: string}[] = [];

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }

}
