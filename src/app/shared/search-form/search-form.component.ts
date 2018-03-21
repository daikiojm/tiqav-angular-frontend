import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnChanges {
  filteredWords: Observable<string[]>;
  words: string[];
  searchForm: FormGroup;

  @Input() reactiveSearchWord: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private tiqavApiService: TiqavApiService) {
    this.filteredWords = null;
    this.words = [];
    this.buildSearchForm();
  }

  ngOnInit() {}

  ngOnChanges() {
    this.buildSearchForm();
    this.searchForm.valueChanges.debounceTime(500).subscribe(
      data => {
        this.getWords(data.word);
      },
      err => console.log(err)
    );
  }

  buildSearchForm() {
    this.searchForm = this.formBuilder.group({
      word: new FormControl(this.reactiveSearchWord || '', [])
    });
  }

  getWords(word: string) {
    if (word !== '' && !/^[\s　]/.test(word)) {
      this.tiqavApiService.getTags(word).subscribe(
        data => {
          this.words = data;
        },
        err => {
          console.log(err);
          this.filteredWords = null;
          this.words = [];
        },
        () => {
          this.subscribeFilterdWords();
        }
      );
    } else {
      this.filteredWords = null;
      this.words = [];
      this.subscribeFilterdWords();
    }
  }

  subscribeFilterdWords() {
    this.filteredWords = this.searchForm.valueChanges.startWith(null).map(val => (val ? this.filter(val.word) : this.words.slice()));
  }

  filter(val: string): string[] {
    return this.words.filter(word => word.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onSearch() {
    const params = { word: this.searchForm.value.word };
    this.router.navigate(['/search'], { queryParams: params });
  }
}
