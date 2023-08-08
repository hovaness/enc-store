import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc'
  itemsShowCount = 12
  constructor(){}
  ngOnInit(): void {
   
  }

  onSortUpdated(newSort: string):void{
    this.sortChange.emit(newSort);
    this.sort = newSort;
  }

  onItemsUpdated(count :number): void{
    this.itemCountChange.emit(count);
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number){
    this.columnsCountChange.emit(colsNum);
  }

}
