import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
import { AlertComponent } from '../alert/exe-alert.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {

  name = "about";
  todo = "what";
  componentRef: ComponentRef<AlertComponent>;

  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<AlertComponent> =
      this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
