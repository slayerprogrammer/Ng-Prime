import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouteStateService } from '../services/routeState.service';

@Component({
  selector: 'app-header-breadcrumb',
  templateUrl: './header-breadcrumb.component.html',
  styleUrls: ['./header-breadcrumb.component.css']
})
export class HeaderBreadcrumbComponent implements OnInit {

  private items: MenuItem[];

  home: MenuItem;
  

  constructor(private routeStateService: RouteStateService) {
    this.items = [];
  }

  ngOnInit() {
    var routes = this.routeStateService.getAllRouteStates();
    routes.forEach(route => {
      this.items.push({ label: route.title, command: () => { this.onClickBreadcrumb(route.id); } });
    });

    this.home = {icon: 'pi pi-home'};
  }

  onClickBreadcrumb(id: number) {
    this.routeStateService.loadRouteUptoId(id);
  }
}
