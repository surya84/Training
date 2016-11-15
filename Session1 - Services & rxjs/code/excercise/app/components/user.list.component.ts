import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
    selector: "user-list",
    moduleId: module.id,
    templateUrl: "user.list.component.html",
    styleUrls: ["user.list.component.css"],
    providers: [UserService]
})
export class UserListComponent implements OnInit {
    data: any[];
    filteredData: any[];
    isDetailView: boolean = true;
    searchByUserName: string;

    constructor(private _userService: UserService) {

    }

    ngOnInit() {
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