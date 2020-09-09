import { Component, OnInit } from '@angular/core';
import { BrainTeaser, CommentRequest } from 'src/app/models';
import { BrainTeaserService } from '../../services/brain-teaser.service';

@Component({
  selector: 'app-brain-teaser',
  templateUrl: './brain-teaser.component.html',
  styleUrls: ['./brain-teaser.component.scss'],
})
export class BrainTeaserComponent implements OnInit {
  brainTeasers: BrainTeaser[];
  selectedBrainTeaser: number;
  name = '';
  body = '';
  view = 'answer';

  constructor(private service: BrainTeaserService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((brainTeasers) => {
      this.brainTeasers = brainTeasers;
      if (this.brainTeasers.length > 0) {
        this.selectedBrainTeaser = this.brainTeasers[0].id;
      }
    });
  }

  toggleView(view: string): void {
    this.view = view;
  }

  toggleSelected(selected: number = null): void {
    if (selected) {
      if (this.isSelected(selected)) {
        return;
      }

      this.selectedBrainTeaser = selected;
      console.log(selected);
      return;
    }
    this.selectedBrainTeaser = null;
  }

  submitComment(id: number): void {
    if (this.body.length === 0 || this.name.length === 0) {
      return;
    }

    const comment: CommentRequest = { name: this.name, body: this.body };

    this.service.postComment(id, comment).subscribe((newComment) => {
      this.brainTeasers[id].comments = [
        newComment,
        ...this.brainTeasers[id].comments,
      ];
      this.body = '';
      this.name = '';
    });
  }

  isSelected(id: number): boolean {
    return id === this.selectedBrainTeaser;
  }
}
