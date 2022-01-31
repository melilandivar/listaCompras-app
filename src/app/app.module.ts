import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { ListaService } from './lista/lista.service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path: '',redirectTo: "/lista", pathMatch: 'full'},
{path: 'lista', component: ListaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
