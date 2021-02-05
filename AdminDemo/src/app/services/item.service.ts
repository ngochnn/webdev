import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Item} from '../models/item'
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;
  itemDoc:AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore ,private http:HttpClient) { 
    this.itemsCollection = afs.collection<Item>('posts');
    this.itemsCollection=afs.collection<Item>('Items', ref=>ref.orderBy('NAME', 'asc'));
    this.items=this.itemsCollection.valueChanges({idField: 'id1'});
    this.items.subscribe(data=>{console.log(data)});
  }
  getItems():Observable <Item[]>{
    return this.http.get<Item[]>('http://localhost:8000/api/items/');
    }

    addItem(item: Item){
      this.itemsCollection.add(item); //id dc tao tu dong
      //const docId=this.afs.createId();
      //this.itemsCollection.doc(docId).set(Object.assign{}, item);
     }
     public AddItem(post:Item): void{
       this.saveItem(post)
    }
    private saveItem(post:Item){
      const postObj = {
        ID: post.ID,
        NAME: post.NAME,
        IMAGE: post.IMAGE,
        PRICE: post.PRICE,
        QUANTITY: post.QUANTITY,
        DEVELOPER: post.DEVELOPER,
        STATUS: post.STATUS,
      };
      console.log('abc',postObj)

      // if(post.ID){
      //   return this.itemsCollection.doc(post.ID).update(postObj);
      // }else{
        // return this.itemsCollection.add(postObj);
        this.itemsCollection.doc(post.ID).set(Object.assign({}, postObj));
      // }
    }
    public deleteItemById(post: Item){
      return this.itemsCollection.doc(post.ID).delete();
    }
    public editItemById(post: Item){
      // const postNEW = {
      //   ID: post.ID,
      //   NAME: post.NAME,
      //   IMAGE: post.IMAGE,
      //   PRICE: post.PRICE,
      //   QUANTITY: post.QUANTITY,
      //   DEVELOPER: post.DEVELOPER,
      // };
      // this.itemsCollection.doc(post.ID).update(postNEW);
      return this.itemsCollection.doc(post.ID).update(post);
    }
}
