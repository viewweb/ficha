import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
import { CardapioPage } from '../pages/cardapio/cardapio';
import { DetalhesPedidoPage } from '../pages/detalhes-pedido/detalhes-pedido';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // menu usando *ngFor
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Comprar Créditos', component: ComprarCreditosPage },
      { title: 'Configurações', component: ConfigPage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Contato', component: ContatoPage },
      // listando todas as páginas no menu para facilitar fase de desenvolvimento. Apagar após conclusão (inclusive os imports)
      { title: 'Cardápio', component: CardapioPage},
      { title: 'Detalhes do Pedido', component: DetalhesPedidoPage},
      { title: 'Voucher', component: VoucherPage},
      { title: 'Login', component: LoginPage },
      { title: 'Cadastro', component: CadastroPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // definir a página como root para não mostrar o botão de voltar
    this.nav.setRoot(page.component);
  }
}
