import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';
import { Item } from '../models/item';


@Component({
  selector: 'app-productl',
  templateUrl: './productl.component.html',
  styleUrls: ['./productl.component.css']
})
export class ProductlComponent implements OnInit {
  ishighligh = false;
  constructor(private itemService: ItemService){}
  itemList:Observable<Item[]>
  itemList1:Item[]
  ngOnInit(): void {
   this.itemList = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => this.itemList1=data);
  }
  

}
