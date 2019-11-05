import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'bienvenido/:dat', loadChildren: './bienvenido/bienvenido.module#BienvenidoPageModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'planificador', loadChildren: './planificador/planificador.module#PlanificadorPageModule' },
  { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesPageModule' },
 { path: 'organigrama', loadChildren: './organigrama/organigrama.module#OrganigramaPageModule' },
  { path: 'reunion', loadChildren: './reunion/reunion.module#ReunionPageModule' },
  { path: 'archivos', loadChildren: './archivos/archivos.module#ArchivosPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'notificaciones', loadChildren: './notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'editperfil', loadChildren: './editperfil/editperfil.module#EditperfilPageModule' },
  { path: 'tpersonal', loadChildren: './tpersonal/tpersonal.module#TpersonalPageModule' },
  { path: 'addtarea', loadChildren: './addtarea/addtarea.module#AddtareaPageModule' },
  { path: 'contrasena', loadChildren: './contrasena/contrasena.module#ContrasenaPageModule' },
  { path: 'vertarea', loadChildren: './vertarea/vertarea.module#VertareaPageModule' },
  { path: 'verroles', loadChildren: './verroles/verroles.module#VerrolesPageModule' },
  { path: 'verperfil', loadChildren: './verperfil/verperfil.module#VerperfilPageModule' },
  { path: 'addtareat', loadChildren: './addtareat/addtareat.module#AddtareatPageModule' },
  { path: 'vertareap', loadChildren: './vertareap/vertareap.module#VertareapPageModule' },
  { path: 'verreunion', loadChildren: './verreunion/verreunion.module#VerreunionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
