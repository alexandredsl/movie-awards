var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","pathMatch":"full","redirectTo":"/dashboard"},{"path":"dashboard","loadChildren":"./pages/dashboard/dashboard.module#DashboardModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/dashboard/dashboard-routing.module.ts","module":"DashboardRoutingModule","children":[{"path":"","component":"DashboardComponent"}],"kind":"module"}],"module":"DashboardModule"}]},{"path":"list","loadChildren":"./pages/list/list.module#ListModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/list/list-routing.module.ts","module":"ListRoutingModule","children":[{"path":"","component":"ListComponent"}],"kind":"module"}],"module":"ListModule"}]}],"kind":"module"}]}
