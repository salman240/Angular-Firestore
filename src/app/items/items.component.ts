import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item-service';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  message: string = "Loading Data . . .";
  
  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });

    setTimeout(event => this.message = 'There is no item in the list!', 1000);
  }

  deleteItem(item: Item){
      this.itemService.deleteItem(item);
      // console.log('Deleted');
  }

  editItem(item: Item){
    if(this.editState)
    {
     this.editState = false; 
    }
    else
    {
      this.editState = true;
      this. itemToEdit = item;
    }
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.editState = false;
  }
  
}
