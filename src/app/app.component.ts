
import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from './lazy-load-script.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  title = 'ClientBTL';

  constructor(private lazyLoadService: LazyLoadScriptService) {}

ngOnInit() {
  this.lazyLoadService.loadScript('/assets/js/main.js'), 
  this.lazyLoadService.loadScript('/assets/js/bootstrap.bundle.min.js'),
  this.lazyLoadService.loadScript('/assets/js/ajax-mail.js'),
  this.lazyLoadService.loadScript('/assets/js/plugins.js'),
  this.lazyLoadService.loadScript('/assets/js/vendor/jquery.min.js'),
  this.lazyLoadService.loadScript('/assets/js/vendor/modernizr-2.8.3.min.js')

}
}

