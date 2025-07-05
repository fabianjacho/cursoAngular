import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

//componente hijo
@Component({
  selector: 'app-lista',    
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [NgFor], // Importa NgFor para usarlo en la plantilla
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent {
  @Input() item!: string;   //se llena desdde el padre

  @Output() mensaje = new EventEmitter<string>(); //lo que se envia al padre

  enviarAlPadre(valor: string) {
    this.mensaje.emit(valor);
  }


  lista1:{id: number, nombre: string}[] = [];

  anadir() {
    if(this.item.trim() === '') return;

    const valorActual = this.item;

    this.lista1.push({id: this.lista1.length + 1, nombre: this.item});
    this.item = ''; 
    this.enviarAlPadre(valorActual); // Enviar mensaje al padre
  }

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }

}
