import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderDto } from '../_TsDtos/OrderDto';
import * as _ from 'lodash';
import { TreeModule } from 'primeng/tree';
import { TreeNode, MenuItem } from 'primeng/api';


@Component({
    templateUrl: './MobileTree.html'
})
export class MobileTree implements OnInit {
    treeData: TreeNode[];
    menuItems: MenuItem[];
    constructor(private http: HttpClient) {
        this.menuItems = [
            { label: 'Rename', icon: 'fa fa-edit', command: (event) => this.rename() },
            { label: 'Delete', icon: 'fa fa-close', command: (event) => this.delete() }
        ];
        this.treeData = [
            {
                label: "Node1",
                //data: "Backup Folder",
                //expandedIcon: "fa fa-folder-open",
                //collapsedIcon: "fa fa-folder", 
                expanded: true,
                children: [
                    {
                        label: "Node11"
                    },
                    {
                        label: "Node12",
                        children: [
                            {
                                label: "Node121"
                            },
                            {
                                label: "Node122"
                            }
                        ]
                    }
                ]
            },
            {
                label: "Node2",              
                children: [
                    {
                        label: "Node21"
                    }
                ]
            }
        ];
    }

    async ngOnInit() {
        this.loadTree();
    }
    async onNodeExpand($event) {
        this.onNodeToggle($event);
    }
    async onNodeCollapse($event) {
        this.onNodeToggle($event);
    }
    readonly storageName = "asp-core-ddss-mobile-tree";
    async onNodeToggle($event) {
        this.saveTree();
    }
    loadTree() {
        let stored = localStorage.getItem(this.storageName);
        if (!stored) return null;
        this.treeData = JSON.parse(stored);
    }
    pluckNode(node: TreeNode): TreeNode {
        return { label: node.label, expanded: node.expanded, children: node.children && node.children.map(n => this.pluckNode(n)) };
    }
    saveTree() {
        let toStore = JSON.stringify(this.treeData.map(n => this.pluckNode(n)));
        
        localStorage.setItem(this.storageName, toStore);
    }
    rename() {
        alert("TODO");
    }
    delete() {
        alert("TODO");
    }



}
