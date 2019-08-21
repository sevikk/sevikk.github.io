import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription, Observable } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { AuthService } from "../../auth/auth.service";
import { AppAuthState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;

  currentUser;
  getState: Observable<any>;

  constructor(
    public postsService: PostsService,
    private authService: AuthService,
    private store: Store<AppAuthState>,
    private route: ActivatedRoute
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.isLoading = true;    
    
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((postData: { posts: Post[]; postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
        if (this.route.snapshot.url[0] && this.route.snapshot.url[0].path === "myposts") {
          this.posts = this.posts.filter(post => {
            return post.creatorEmail == this.currentUser.email
          })
        }
      });
      this.getState.subscribe((state) => {
        this.userIsAuthenticated = state.isAuthenticated;
        this.userId = this.authService.getUserId();
        this.currentUser = state.user;       
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
