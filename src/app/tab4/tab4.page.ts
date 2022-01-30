import { Component, OnInit } from '@angular/core';
import { LogbookService } from "../services/logbook.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  results: Observable<any>;
  names = null;

  constructor(public logbookservice: LogbookService) { }

  ngOnInit() {
    this.logbookservice.getVisitors().subscribe(result => {
      this.names = result;
    });
    console.log(this.names);
  }

  nameSubmitted(name) {
    this.logbookservice.addVisitors(name);
  }

}
