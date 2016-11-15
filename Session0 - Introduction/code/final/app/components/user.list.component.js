"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserListComponent = (function () {
    function UserListComponent() {
        this.isDetailView = true;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.filteredData = this.data;
    };
    UserListComponent.prototype.searchUser = function (event) {
        var _this = this;
        this.filteredData = this.data.filter(function (usr) {
            return usr.name.toLowerCase().indexOf(_this.searchByUserName.toLowerCase()) > -1;
        });
    };
    UserListComponent.prototype.Clear = function () {
        this.searchByUserName = "";
        this.filteredData = this.data;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "data", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: "user-list",
            moduleId: module.id,
            templateUrl: "user.list.component.html",
            styleUrls: ["user.list.component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user.list.component.js.map