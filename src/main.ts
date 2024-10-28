import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));