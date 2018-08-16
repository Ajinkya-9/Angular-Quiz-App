import { Component, OnInit } from '@angular/core';
import {QuizService} from '../shared/quiz.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private quizService: QuizService, private route: Router ) { }

  ngOnInit() {
  }
  onSubmit (registerForm) {
    console.log(registerForm);
 this.quizService.insertParticipent(registerForm).subscribe((data: any) => {
   console.log('Logged In' + JSON.stringify(data));
localStorage.clear();
localStorage.setItem('participents', JSON.stringify(data));
 this.route.navigate(['/quiz']);
    });
  }
}
