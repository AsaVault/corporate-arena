import { Component, OnInit } from '@angular/core';
import { TrafficUpdate, Comment, CommentRequest } from 'src/app/models';
import { TrafficUpdateService } from 'src/app/services/traffic-update.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traffic-update-article',
  templateUrl: './traffic-update-article.component.html',
  styleUrls: ['./traffic-update-article.component.scss'],
})
export class TrafficUpdateArticleComponent implements OnInit {
  trafficUpdate: TrafficUpdate;
  title = '';
  content = '';
  articleId: number;
  constructor(
    private service: TrafficUpdateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service
      .getBySlug(this.route.snapshot.paramMap.get('id'))
      .subscribe((trafficUpdate) => {
        this.trafficUpdate = trafficUpdate;
        this.articleId = trafficUpdate.id;
      });
  }

  submitComment(): void {
    if (this.content.length === 0 || this.title.length === 0) {
      return;
    }

    const comment: CommentRequest = {
      title: this.title,
      content: this.content,
    };

    this.service
      .postComment(this.articleId, comment)
      .subscribe((newComment) => {
        this.trafficUpdate.comments = [
          newComment,
          ...this.trafficUpdate.comments,
        ];
        this.content = '';
        this.title = '';
      });
  }
}
