import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact/contact.service';
import { GiphyService } from '../shared/giphy/giphy.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<any>;

  constructor(private contactService: ContactService, private giphyService: GiphyService) {}

  ngOnInit() {
    this.contactService.getAll().subscribe(data => {
      this.contacts = data;
      for (const contact of this.contacts) {
        this.giphyService.get(contact.name).subscribe(url => contact.giphyUrl = url);
      }
    });
  }

}
