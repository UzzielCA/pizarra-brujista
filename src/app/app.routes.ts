import { Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { MatchTeamsComponent } from './components/match-teams/match-teams.component';


export const routes: Routes = [
    {
        path: 'team',
        component: TeamComponent,
    },
    {
        path: 'match-teams',
        component: MatchTeamsComponent,
    }
];
