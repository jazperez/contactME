import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../shared/contact/contact.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  contact: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactService: ContactService,
              private giphyService: GiphyService) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.contactService.get(id).subscribe((contact: any) => {
        if (contact) {
          this.contact = contact;
          this.contact.href = contact._links.self.href;
          this.giphyService.get(contact.name).subscribe(url => contact.giphyUrl = url);
        } else {
          console.log(`Contact with id '${id}' not found, returning to list`);
          this.gotoList();
          }
        });
      }
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/contact-list']);
  }

  save(form: NgForm) {
    this.contactService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.contactService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
