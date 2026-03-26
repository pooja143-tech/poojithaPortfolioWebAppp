import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Home },          // default route
  { path: 'skills', component: Skills },
//   { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: Projects},
  {path:'profile', component: Profile},
  { path: '**', redirectTo: '' }                   // wildcard → Home
]