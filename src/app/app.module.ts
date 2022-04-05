import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { RowComponent } from './components/row/row.component';
import { BoardComponent } from './components/board/board.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyComponent } from './components/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RowComponent,
    BoardComponent,
    KeyboardComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
