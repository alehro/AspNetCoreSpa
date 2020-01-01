import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../_TsDtos/OrderDto';
import * as _ from 'lodash';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';


@Component({
  templateUrl: './MobileTree.html'
})
export class MobileTree implements OnInit {
 
  constructor(private http: HttpClient) { }

    async ngOnInit() {
        

  }

}
