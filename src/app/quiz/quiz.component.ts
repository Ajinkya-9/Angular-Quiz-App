import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  qnProgress: number;
  correctAns: string;
  selectedAns: string;


  constructor(private quizService: QuizService, private route: Router) {
    this.quizService.totalScore = +localStorage.getItem('Score')  ;
  }
  answerCheck;
  ngOnInit() {
    this.quizService.seconds = 0;
    this.qnProgress =  +localStorage.getItem('progress') ;

    this.quizService.getQuestions().subscribe(
      (data: any) => {
        this.quizService.qns = data;
        console.log(this.quizService.qns);
      }
    );
  }

  next(ans, id) {
    ++this.qnProgress;
    localStorage.setItem('progress', JSON.stringify(this.qnProgress) );
    console.log(ans, id, this.qnProgress);
    if (ans === this.selectedAns) {
       ++this.quizService.totalScore;
       localStorage.setItem('Score', JSON.stringify(this.quizService.totalScore));
    }
    if (this.qnProgress === 10) {
      clearInterval(this.quizService.timer);
      this.route.navigate(['/result']);
    }
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  answer(choice, ans, id) {
   // console.log('Checks------  ' + choice.value, ans, id);
    this.selectedAns = choice.value;
  }

}
