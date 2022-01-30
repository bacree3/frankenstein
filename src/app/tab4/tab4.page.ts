import { Component, OnInit } from '@angular/core';
import { LogbookService } from "../services/logbook.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  logbookResults: Observable<any>;
  inputValue: string = "";

  constructor(public logbookservice: LogbookService) { }

  async ngOnInit() {
    await this.refreshUsers();
  }

  refreshUsers() {
    this.logbookservice.getVisitors().subscribe(result => {
      this.logbookResults = result['Items']
      console.log(this.logbookResults)
    });
  }

  submitName() {
    console.log("Submit name called in page ts.")
    this.logbookservice.addVisitors(this.inputValue);
    this.inputValue = "" // clear out input
  }

}
