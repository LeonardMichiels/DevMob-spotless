// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
//       },
//       {
//         path: 'tab2',
//         loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
//       },
//       {
//         path: 'tab3',
//         loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TabsPageRoutingModule {}


import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}