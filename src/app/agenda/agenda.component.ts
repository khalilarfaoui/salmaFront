import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation, Inject } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { InterventionService } from '../services/intervention.service';
import frLocale from '@fullcalendar/core/locales/fr';




@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent {
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    eventColor: 'blue',
    events: [
    ]
  };
  interAll: any
  constructor(private interService: InterventionService) {
    this.getIntervention()
  }

  getIntervention() {
    this.interService.getIntervention().subscribe(res => {
      console.log(res)
      this.interAll = res
      this.interAll.map((i: any) => {
        //2099-66-99T00:00:20 => 2099-66-99
        i.date = i.date.slice(0, 10)
      })
      this.calendarOptions.events = this.interAll

    })
  }




}


