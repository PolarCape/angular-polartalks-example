/**
 * Created by amihajlovski on 14.6.2017.
 */
import { ValidationComponent } from './validation/validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

export const routes = [
  { path: '', component: ValidationComponent },
  { path: 'reactive-form', component: ReactiveValidationComponent },
  { path: '**', redirectTo: '' },
];
