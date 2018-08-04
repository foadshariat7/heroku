import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IImage } from '../interfaces/gallery-image.interface';
import { Subscription } from 'rxjs/Subscription';

declare var lightGallery, $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  wholeAlbum;
  albumNames;

  isLightgallery = false;

  wholeAlbumUnsubscribe: Subscription;
  AlbumNamesUnsubscribe: Subscription;

  constructor(public afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.AlbumNamesUnsubscribe = this.afDb.list('/albumNames').valueChanges().subscribe(items => {
      this.albumNames = items;
    });
    this.wholeAlbumUnsubscribe = this.afDb.list('/images/').valueChanges().subscribe(
      (items) => {
        this.wholeAlbum = <IImage[]>items;
      });
  }
  
  addStyle(e) {
    if (!this.isLightgallery) {
      $('.albums').lightGallery({
        pinterest: false
      });
      this.isLightgallery = true;
    }
    if(e.target.parentElement.nextElementSibling.style.maxHeight === '0px' || !e.target.parentElement.nextElementSibling.style.maxHeight){
      e.target.parentElement.nextElementSibling.style.maxHeight = e.target.parentElement.nextElementSibling.scrollHeight + 'px';
    }else{
      e.target.parentElement.nextElementSibling.style.maxHeight = '0px';
    }
    $(".image-anchor").each((index, el) => {
      el.setAttribute("data-facebook-share-url", window.location.protocol + "//" + window.location.hostname + "/" + el.getAttribute('href').substring(9));
      el.setAttribute("data-twitter-share-url", window.location.protocol + "//" + window.location.hostname + "/" + el.getAttribute('href').substring(9));
      el.setAttribute("data-googleplus-share-url", window.location.protocol + "//" + window.location.hostname + "/" + el.getAttribute('href').substring(9));
    });
  }

  ngOnDestroy() {
    this.AlbumNamesUnsubscribe.unsubscribe();
    this.wholeAlbumUnsubscribe.unsubscribe();
  }

}
