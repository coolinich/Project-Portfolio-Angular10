import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';

@Component({
  selector: 'pkl-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbItems: Breadcrumb[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.breadcrumbItems = this.createBreadcrumbs(this.activatedRoute.root));
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const routeChildren: ActivatedRoute[] = route.children;

    if (routeChildren.length === 0) {
      return breadcrumbs;
    }

    for (const routeChild of routeChildren) {
      const routeURL: string = routeChild.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL.length) {
        url += `/${routeURL}`;
      }

      const label = routeChild.snapshot.data['breadcrumb'];
      if (label != null && label != undefined) {
        breadcrumbs.push({
          label,
          url
        })
      }
      return this.createBreadcrumbs(routeChild, url, breadcrumbs);
    }
  } 
}
