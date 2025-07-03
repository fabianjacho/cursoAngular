import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,NgFor, CommonModule], // <-- Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'TodoList';

  item: string = '';
 // lista: string[] = [];


  lista1:{id: number, nombre: string}[] = [];

  anadir() {
    if(this.item.trim() === '') return;
    this.lista1.push({id: this.lista1.length + 1, nombre: this.item});
    this.item = ''; 
  }

  remover(index: number) {
    this.lista1 = this.lista1.filter(item => item.id !== index);
  }


  /*
  agregar() {
    if (this.item.trim()) {
      this.lista.push(this.item);
      this.item = '';
    }
  }

  eliminar(index: number) {
    this.lista.splice(index, 1);
  } */


}
