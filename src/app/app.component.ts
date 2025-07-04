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
  recibirMensaje(mensaje: string){
    console.log('Recibido desde hijo: ',mensaje );
  }

}
