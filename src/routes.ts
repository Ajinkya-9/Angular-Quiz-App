import { Routes } from '../node_modules/@angular/router';
import { RegisterComponent } from './app/register/register.component';
import { QuizComponent } from './app/quiz/quiz.component';
import { ResultComponent } from './app/result/result.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
{path: 'register', component: RegisterComponent },
{path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
{path: 'result', component: ResultComponent, canActivate: [AuthGuard] },
{path: '', redirectTo: '/register', pathMatch: 'full'},

];
