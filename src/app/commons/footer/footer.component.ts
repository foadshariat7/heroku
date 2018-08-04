import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  info = {};

  footerSubscription: Subscription;

  constructor(public afDb: AngularFireDatabase) { }

  public ngOnInit() {
    this.footerSubscription = this.afDb.list('/info').valueChanges().subscribe(items => {
      this.info = items;
    });
  }

  public ngOnDestroy() {}

}
