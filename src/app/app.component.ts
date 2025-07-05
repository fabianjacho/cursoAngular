import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component'; // Asegúrate de importar el componente hijo

@Component({
  selector: 'app-root',
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [RouterOutlet, FormsModule, CommonModule,ListaComponent], // <-- Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'TodoList - Ejercicio de Lista con componentes🎉';

  item: string = '';
  mensajeDelHijo: string = '';

  recibirMensaje(mensaje: string){
    this.mensajeDelHijo = mensaje;
  }

}
