import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, startWith, debounceTime } from 'rxjs/operators';

import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnChanges {
  filteredWords: Observable<string[]>;
  words: string[];
  searchForm: FormGroup;

  @Input() reactiveSearchWord: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private tiqavApiService: TiqavApiService) {
    this.filteredWords = null;
    this.words = [];
    this.buildSearchForm();
  }

  ngOnChanges() {
    this.buildSearchForm();
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(
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
    this.filteredWords = this.searchForm.valueChanges
      .pipe(
        startWith(null),
        map(val => (val ? this.filter(this.words, val.word) : this.words.slice()))
      );
  }

  filter(words: string[], val: string): string[] {
    return words.filter(word => word.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onSearch() {
    const params = { word: this.searchForm.value.word };
    this.router.navigate(['/search'], { queryParams: params });
  }
}
