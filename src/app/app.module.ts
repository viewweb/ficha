import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HomePage } from '../pages/home/home';
import { ComprarCreditosPage } from '../pages/comprar-creditos/comprar-creditos';
import { VoucherPage } from '../pages/voucher/voucher';
import { EventosPage } from '../pages/eventos/eventos';
import { ConfigPage } from '../pages/config/config';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { CardapioPage} from '../pages/cardapio/cardapio';
import { DetalhesPedidoPage } from '../pages/detalhes-pedido/detalhes-pedido';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastroPage,
    HomePage,
    ComprarCreditosPage,
    VoucherPage,
    EventosPage,
    ConfigPage,
    SobrePage,
    ContatoPage,
    CardapioPage,
    DetalhesPedidoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastroPage,
    HomePage,
    ComprarCreditosPage,
    VoucherPage,
    EventosPage,
    ConfigPage,
    SobrePage,
    ContatoPage,
    CardapioPage,
    DetalhesPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
