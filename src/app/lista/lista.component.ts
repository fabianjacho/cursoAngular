import { Component, EventEmitter, Input, Output } from '@angular/core';

//componente hijo
@Component({
  selector: 'app-lista',    
  imports: [],
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

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }

}
