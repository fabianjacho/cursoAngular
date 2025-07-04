import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component'; // Asegúrate de importar el componente hijo

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule,ListaComponent], // <-- Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'TodoList - Ejercicio de Lista con componentes🎉';

  item: string = '';
  lista1:{id: number, nombre: string}[] = [];

  anadir() {
    if(this.item.trim() === '') return;
    this.lista1.push({id: this.lista1.length + 1, nombre: this.item});
    this.item = ''; 
  }

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }

  recibirMensaje(mensaje: string){
    console.log('Recibido desde hijo: ',mensaje );
  }

  trackById(index: number, item: {id: number, nombre: string}) {
    return item.id;
  }

}
