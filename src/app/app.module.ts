import { NgModule } from '@angular/core';

import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { UserData } from '../providers/user-data';

import { ArtikelPage } from '../pages/artikel/artikel';
import { CariPage } from '../pages/cari/cari';
import { DiskusiPage } from '../pages/diskusi/diskusi';
import { ArtikelBacaPage } from '../pages/artikel-baca/artikel-baca';
import { TulisArtikelPage } from '../pages/tulis-artikel/tulis-artikel';
import { TulisDiskusiPage } from '../pages/tulis-diskusi/tulis-diskusi';
import { TulisKomentarPage } from '../pages/tulis-komentar/tulis-komentar';
import { NotifikasiPage } from '../pages/notifikasi/notifikasi';

import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';

let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: "YOUR_HEADER_PREFIX",
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage,
    TulisKomentarPage,
    NotifikasiPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp, {
      tabsPlacement: 'top',
      tabsHideOnSubPages: "true"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage,
    TulisKomentarPage,
    NotifikasiPage
  ],
  providers: [UserData, Storage, AUTH_PROVIDERS,     {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },]
})
export class AppModule {}
