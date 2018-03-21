import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  routeLinks: any[];
  activeLinkIndex = 0;
  private currentRoute = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.routeLinks = [{ label: 'Search', link: 'search' }, { label: 'Newest', link: 'newest' }, { label: 'Random', link: 'random' }];
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.slice(1);
        this.routeLinks.forEach((elm, index) => {
          const _pos = this.currentRoute.indexOf('?');
          const pos = _pos !== -1 ? _pos : this.currentRoute.length;
          const _currentRoute = this.currentRoute.substring(0, pos);
          if (elm.link === _currentRoute) {
            this.activeLinkIndex = index;
          }
        });
      }
    });
  }
}
