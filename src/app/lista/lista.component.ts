import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

//componente hijo
@Component({
  selector: 'app-lista',    
  imports: [NgFor], // Importa NgFor para usarlo en la plantilla
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})

export class ListaComponent {
  @Input() item!: string;   //se llena desdde el padre

  @Output() mensaje = new EventEmitter<string>(); //lo que se envia al padre

  enviarAlPadre(){
    this.mensaje.emit('Dato recibido: ' + this.item);
  }


  lista1:{id: number, nombre: string}[] = [];

  anadir() {
    if(this.item.trim() === '') return;
    this.lista1.push({id: this.lista1.length + 1, nombre: this.item});
    this.item = ''; 
    this.enviarAlPadre(); // Enviar mensaje al padre
  }

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }

}
