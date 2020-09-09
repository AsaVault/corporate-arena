import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {BrainTeaserComponent} from './pages/brain-teaser/brain-teaser.component';
import {TrafficUpdateComponent} from './pages/traffic-update/traffic-update.component';
import {TrafficUpdateArticleComponent} from './pages/traffic-update-article/traffic-update-article.component';
import {BlogComponent} from './pages/blog/blog.component';
import {BlogArticleComponent} from './pages/blog-article/blog-article.component';
import {VacanciesComponent} from './pages/vacancies/vacancies.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'brain_teasers', component: BrainTeaserComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogArticleComponent},
  {path: 'traffic_updates', component: TrafficUpdateComponent},
  {path: 'traffic_updates/:id', component: TrafficUpdateArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
