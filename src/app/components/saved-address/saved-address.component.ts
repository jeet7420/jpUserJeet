import { Component, OnInit, Input } from '@angular/core';
import { Location } from 'src/app/modals/Location';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss'],
})
export class SavedAddressComponent implements OnInit {

  @Input() location: Location;
  constructor() { }

  ngOnInit() {}

}
