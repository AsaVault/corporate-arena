import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrainTeaser } from 'src/app/models';
import { BrainTeaserAnswer } from 'src/app/models/BrainTeaserAnswer';
import { BrainTeaserService } from 'src/app/services/brain-teaser.service';

@Component({
  selector: 'app-brain-teaser-get',
  templateUrl: './brain-teaser-get.component.html',
  styleUrls: ['./brain-teaser-get.component.scss']
})
export class BrainTeaserGetComponent implements OnInit {
  brainTeaser: BrainTeaser;
  name = '';
  body = '';
  brainTeaserId;
  constructor(private service: BrainTeaserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service
      .get(this.route.snapshot.paramMap.get('id'))
      .subscribe((brainTeaser) => {
        this.brainTeaser = brainTeaser;
        this.brainTeaserId = brainTeaser.id;
      });
  }

  submitAnswer(id: number): void {
    if (this.body.length === 0 || this.name.length === 0) {
      return;
    }

    const answer: BrainTeaserAnswer = {
      id: 0,
      dateCreated: new Date(),
      userCreated: 1,
      userName: this.name,
      answer: this.body,
      isApproved: false,
      brainTeaserID: this.brainTeaserId,
    };

    this.service.postAnswer(id, answer).subscribe((newAnswer) => {
      this.brainTeaser[id].brainTeaserAnswers = [
        newAnswer,
        ...this.brainTeaser[id].brainTeaserAnswers,
      ];
      this.body = '';
      this.name = '';
    });
  }


}
