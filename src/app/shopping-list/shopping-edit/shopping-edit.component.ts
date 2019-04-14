import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") Name: ElementRef;
  @ViewChild("inputAmount") amount: ElementRef;
  // @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onItemAdd() {
    const name = this.Name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredient(name,amount);
    this.shoppingListService.addIngredient(ingredient);
    // this.ingredientAdded.emit(ingredient);
  }
}
