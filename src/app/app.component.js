System.register(["@angular/core", "rxjs/Rx"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, Rx_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                function AppComponent(compiler) {
                    this.compiler = compiler;
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    // const url = 'https://gist.githubusercontent.com/johnlindquist/90c0a12814939738809ae0dceacdcf93/raw/e95c3204af1335693a45d65dbb61162824ad5ab8/loadMe.ts';
                    var url = 'https://gist.githubusercontent.com/dianadujing/a7bbbf191349182e1d459286dba0282f/raw/c23281f8c5fabb10ab9d144489316919e4233d11/module.ts';
                    console.log(System.import(url));
                    // System.import(url).then((comp:ElementRef) => {this.putStuffHere.element.nativeElement.style.color = 'red';});
                    var importer = function (url) { return Rx_1.Observable.fromPromise(System.import(url)); };
                    // importer(url).subscribe((component) => );
                    console.log('importer:', importer);
                    importer(url)
                        .subscribe(function (modules) {
                        console.log('modules:', modules, modules['AppModule']);
                        _this.cfr = _this.compiler.compileModuleAndAllComponentsSync(modules['AppModule']);
                        console.log(_this.cfr, ',', _this.cfr.componentFactories[0]);
                        _this.putStuffHere.createComponent(_this.cfr.componentFactories[0], 0);
                    });
                    // this.putStuffHere.createComponent(this.cfr, 0);
                    // const resolve = (comp:any) => Observable.fromPromise(this.cfr.resolveComponentFactory(comp));
                };
                __decorate([
                    core_1.ViewChild('putStuffHere', { read: core_1.ViewContainerRef }),
                    __metadata("design:type", core_1.ViewContainerRef)
                ], AppComponent.prototype, "putStuffHere", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>Above</h2>\n    <div #putStuffHere></div>\n    <h2>Below</h2>\n  "
                    }),
                    __metadata("design:paramtypes", [core_1.Compiler])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map