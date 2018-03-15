System.register(["@angular/platform-browser-dynamic", "./app.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
            // console.clear();
            // import { bootstrap }    from '@angular/platform-browser-dynamic';
            // import { AppComponent } from './app.component';
            // bootstrap(AppComponent);
        }
    };
});
//# sourceMappingURL=main.js.map