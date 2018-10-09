import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  
  constructor(private firestore: AngularFirestore) {    
    //--Do not return id
    // this.items = firestore.collection('items').valueChanges();
    
    this.itemsCollection = this.firestore.collection('items', ref => ref.orderBy('title', 'asc'));

    this.items = firestore.collection('items', ref => ref.orderBy('title', 'asc')).snapshotChanges()
    .pipe(map(changes => {
      return changes.map(col => {
        const data = col.payload.doc.data() as Item;
        data.id = col.payload.doc.id;
        return data;
      });
    }));
  }

  //GET
  getItems(){
    return this.items;
  }

  //POST
  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  //DELETE
  deleteItem(item: Item){
    this.firestore.doc(`items/${item.id}`).delete();
  }

  //PUT
  updateItem(item: Item){
    this.firestore.doc(`items/${item.id}`).update(item);
  }

}//class ends.
