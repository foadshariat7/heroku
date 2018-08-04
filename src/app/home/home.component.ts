import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  hpFirst = {};
  hpServices = {};
  hpThirdIntro = {};

  hpFirstSubscription: Subscription;

  constructor(public afDb: AngularFireDatabase) { }

  public ngOnInit() {
    this.hpFirstSubscription = this.afDb.list('/homePage').valueChanges().subscribe(items => {
      this.hpFirst = items[0];
      this.hpServices = items[1];
      this.hpThirdIntro = items[2];
    });
  }

  public ngOnDestroy(): void {
    this.hpFirstSubscription.unsubscribe();
  }

}
