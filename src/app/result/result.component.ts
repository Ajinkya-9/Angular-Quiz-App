import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private quizService: QuizService, private route: Router) { }
Score;
  ngOnInit() {


 this.Score = JSON.parse(localStorage.getItem('Score'));
  }


getParticipentName() {
const participent = JSON.parse(localStorage.getItem('participents'));
return participent.name ;
}
submitScore(Scor) {
  console.log(Scor);
   this.quizService.setScore(Scor).subscribe((data: any) => {
    console.log('Submited data' + JSON.stringify(data));
this.route.navigate(['/register']);
  } );
}
}
