import { Component, OnInit } from '@angular/core';
import { Blog, CommentRequest } from '../../models';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
})
export class BlogArticleComponent implements OnInit {
  blog: Blog;
  name = '';
  body = '';
  articleId: number;

  constructor(private service: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service
      .get(this.route.snapshot.paramMap.get('id'))
      .subscribe((blog) => {
        this.blog = blog;
        this.articleId = blog.id;
      });
  }

  submitComment(): void {
    if (this.body.length === 0 || this.name.length === 0) {
      return;
    }

    const comment: CommentRequest = { name: this.name, body: this.body };

    this.service
      .postComment(this.articleId, comment)
      .subscribe((newComment) => {
        this.blog.comments = [newComment, ...this.blog.comments];
        this.body = '';
        this.name = '';
      });
  }
}
