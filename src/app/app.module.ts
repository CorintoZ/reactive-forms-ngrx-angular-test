import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DatePipe } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { fakeBackendProvider } from './shared/interceptors/fakeBackend.interceptor'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers } from './shared/store/store'
import { UsersEffects } from './shared/store/effects/users.effects'
import { environment } from 'src/environments/environment'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ConfirmModalComponent } from './shared/ui-components/confirm-modal/confirm-modal.component'

@NgModule({
  declarations: [AppComponent, ConfirmModalComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ModalModule.forRoot(),
  ],
  entryComponents: [ConfirmModalComponent],
  providers: [fakeBackendProvider, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
