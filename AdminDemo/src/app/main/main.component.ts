import { Component, OnInit } from '@angular/core';

//cái thêm vào
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {Item} from '../models/item'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public insertForm = new FormGroup({
    ID: new FormControl('', Validators.required),
    NAME: new FormControl('', Validators.required),
    IMAGE: new FormControl('', Validators.required),
    PRICE: new FormControl('', Validators.required),
    QUANTITY: new FormControl('', Validators.required),
    DEVELOPER: new FormControl('', Validators.required),
    STATUS: new FormControl('', Validators.required),
  })
  
  ishighligh = true;
  private itemsCollection: AngularFirestoreCollection<Item>;
  itemList: Observable<Item[]>;
  title = 'AdminDemo';
  dataSource = new MatTableDataSource();
		  constructor(private readonly afs: AngularFirestore, private fb: FormBuilder, private accService: AccountService,private itemSrc:ItemService) {
			this.itemsCollection = afs.collection<Item>('Items');//data trên firebase
			// .valueChanges() is simple. It just returns the 
			// JSON data without metadata. If you need the 
			// doc.id() in the value you must persist it your self
      // or use .snapshotChanges() instead. 
      this.itemList=this.itemsCollection.valueChanges({idField:'field1'});

      this.itemList = this.itemsCollection.valueChanges();
      this.itemList.subscribe(data=>(console.log(data)))
		  }
      
      
  ngOnInit(): void {
  }
  // Add(id:string="add id",name:string="add name",image:string="add image",price:string="add price",quantity:string="add quantity",developer:string="add developer"){
  //   // let item = new ItemDescription()
  //   // item.ID = this.insertForm.controls["ID"].value;//hoặc item.id = this.insertFrm.controls.id.value;
  //   // item.NAME = this.insertForm.controls["NAME"].value;
  //   // item.IMAGE = this.insertForm.controls["IMAGE"].value;
  //   // item.PRICE = this.insertForm.controls["PRICE"].value;
  //   // item.QUANTITY = this.insertForm.controls["QUANTITY"].value;
  //   // item.DEVELOPER = this.insertForm.controls["DEVELOPER"].value;
  //   // item.STATUS = this.insertForm.controls["STATUS"].value;
    
  //   let it :Item={};
  //   it.ID=id;
  //   it.NAME=name;
  //   it.IMAGE=image;
  //   it.PRICE=price;
  //   it.QUANTITY=quantity;
  //   it.DEVELOPER=developer;
  //   // alert("thành công");
  //   let docid="abc";
    
  //   this.itemsCollection.doc(docid).set(Object.assign({},it));
  //   //console.log(it)
  //   //this.itemsCollection.add(it);
  // }
  // Delete(docid="abc"){
  //       this.itemsCollection.doc(docid).delete();
  // }
  // Update(name: string ="Update"){
  //   let docid ="abc"
  //   let item: Item={};
  //   item.NAME=name
  //   this.itemsCollection.doc(docid).update(item);

  // }
  onInsert(data: Item){
    // if (this.insertForm.invalid)
    // {
    //   return;
    // }		
    // let item = new ItemDescription();
    // //lay thông tin dữ liệu nhập trên form
    // item.ID = this.insertForm.controls["ID"].value;//hoặc item.id = this.insertFrm.controls.id.value;
    // item.NAME = this.insertForm.controls["NAME"].value;
    // item.IMAGE = this.insertForm.controls["IMAGE"].value;
    // item.PRICE = this.insertForm.controls["PRICE"].value;
    // item.QUANTITY = this.insertForm.controls["QUANTITY"].value;
    // item.DEVELOPER = this.insertForm.controls["DEVELOPER"].value;
    // item.STATUS = this.insertForm.controls["STATUS"].value;
    // //...tương tự cho những trường khác
    
    // console.log(item);
    // this.accService.insertItem(item).subscribe(data=>(console.log(data)))
    
      console.log('New post', data);
      this.itemSrc.AddItem(data);
  }
  onDeletePost(post: Item){
    
    this.itemSrc.deleteItemById(post);
    alert('xóa thành công')
  }
  onEditPost(post: Item){
    console.log(post)
    this.insertForm.controls["ID"].setValue(post.ID)
    this.insertForm.controls["NAME"].setValue(post.NAME)
    this.insertForm.controls["IMAGE"].setValue(post.IMAGE)
    this.insertForm.controls["DEVELOPER"].setValue(post.DEVELOPER)
    this.insertForm.controls["QUANTITY"].setValue(post.QUANTITY)
    this.insertForm.controls["PRICE"].setValue(post.PRICE)
    this.insertForm.controls["STATUS"].setValue(post.STATUS)
    this.itemSrc.editItemById(post);

    
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;  
  //   this.dataSource.filter = filterValue.trim().toLowerCase()
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  }

