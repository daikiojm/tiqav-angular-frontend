import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  searchForm: FormGroup = this.formBuilder.group({
    word: new FormControl('', [])
  });

  ngOnInit() {
  }

  onSearch() {
    const params = { word: this.searchForm.value.word };
    this.router.navigate(['/search'], { queryParams: params });
  }

}
