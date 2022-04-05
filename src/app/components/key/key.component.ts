import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nw-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() key = '?';

}
