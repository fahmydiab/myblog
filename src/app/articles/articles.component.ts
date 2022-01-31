import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  routeSub: any;
  constructor(private scullyService: ScullyRoutesService) {}

  posts: ScullyRoute[] = [];

  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
