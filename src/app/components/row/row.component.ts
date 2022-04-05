import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nw-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
