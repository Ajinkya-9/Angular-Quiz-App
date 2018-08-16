import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { withBody } from '../../../node_modules/@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
readonly rootUrl = 'http://localhost:4000';

qns: any[];
seconds: any;
timer;
totalScore: number;

  constructor(private http: HttpClient) { }

displayTimeElapsed() {
  return Math.floor(this.seconds / 3600 ) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60 );
}
insertParticipent(data) {
  console.log('Hi inside service' + data);
  const body = {
name : data.name,
email : data.email};
return this.http.post(this.rootUrl + '/api/participents', body);
}

getQuestions() {
return this.http.get(this.rootUrl + '/api/phps');
}

setScore(Scor) {
  const scoree = {
    score : Scor,
    timeSpent: this.timer
  };
  const idd = JSON.parse(localStorage.getItem('participents'));
  console.log('this is service id' + idd);
  return this.http.put(this.rootUrl + '/api/participents/' + idd._id , scoree );
}

}
