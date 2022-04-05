import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nw-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardComponent implements OnInit {

  constructor() { }

  readonly keyCaps = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
  ].map(s => [...s]);

  ngOnInit(): void {
  }

}
