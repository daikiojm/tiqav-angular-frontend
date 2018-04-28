import { Component, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, debounceTime } from 'rxjs/operators';

import { TiqavApiService } from './../../services/tiqav-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnChanges {
  filteredWords: Observable<string[]> = of([]);
  words: string[] = [];
  searchForm: FormGroup;

  @Input() reactiveSearchWord: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private tiqavApiService: TiqavApiService) {
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
          this.filteredWords = of([]);
          this.words = [];
        },
        () => {
          this.subscribeFilterdWords();
        }
      );
    } else {
      this.filteredWords = of([]);
      this.words = [];
      this.subscribeFilterdWords();
    }
  }

  subscribeFilterdWords() {
    this.filteredWords = this.searchForm.valueChanges.pipe(map(val => (val ? this.filter(this.words, val.word) : this.words.slice())));
  }

  filter(words: string[], val: string): string[] {
    return words.filter(word => word.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onSearch() {
    const params = { word: this.searchForm.value.word };
    this.router.navigate(['/search'], { queryParams: params });
  }
}
