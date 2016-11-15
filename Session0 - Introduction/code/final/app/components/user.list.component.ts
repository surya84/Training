import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "user-list",
    moduleId: module.id,
    templateUrl: "user.list.component.html",
    styleUrls: ["user.list.component.css"]
})
export class UserListComponent implements OnInit {
    @Input() data: any[];
    filteredData: any[];
    isDetailView: boolean = true;
    searchByUserName: string;

    constructor() {

    }

    ngOnInit() {
        this.filteredData = this.data;
    }

    searchUser(event: Event) {
        this.filteredData = this.data.filter((usr) => {
            return usr.name.toLowerCase().indexOf(this.searchByUserName.toLowerCase()) > -1;
        });
    }

    Clear() {
        this.searchByUserName = "";
        this.filteredData = this.data;
    }
}