import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

import { SendEmailService, IMessage } from '../send-email.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  info = {};

  contactSubscription: Subscription;

  message: IMessage = {};

  @ViewChild('contactForm') contactForm: NgForm;

  constructor(private sendEmailService: SendEmailService,
              public snackBar: MatSnackBar,
              public afDb: AngularFireDatabase) { }

  public ngOnInit() {
    this.contactSubscription = this.afDb.list('/info').valueChanges().subscribe(items => {
      this.info = items;
    });
  }

  public sendEmail(message: IMessage) {
    this.sendEmailService.sendEmail(message)
    .subscribe(res => {
      this.contactForm.reset();
      console.log('AppComponent Success', res);
      this.snackBar.open('Message sent Successfully');
    }, error => {
      this.contactForm.reset();
      console.log('AppComponent Error', error);
      this.snackBar.open('Error occured, please try again');
    })
  }

  public ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }

}
