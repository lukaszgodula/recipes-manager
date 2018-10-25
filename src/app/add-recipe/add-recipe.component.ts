import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateBack(): void {
    this.router.navigate(['../']);
  }

}
