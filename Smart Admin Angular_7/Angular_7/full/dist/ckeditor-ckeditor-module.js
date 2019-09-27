(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ckeditor-ckeditor-module"],{

/***/ "./src/app/features/miscellaneous/ckeditor/ckeditor-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/miscellaneous/ckeditor/ckeditor-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: CkeditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorRoutingModule", function() { return CkeditorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ckeditor.component */ "./src/app/features/miscellaneous/ckeditor/ckeditor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _ckeditor_component__WEBPACK_IMPORTED_MODULE_2__["CkeditorComponent"]
    }];
var CkeditorRoutingModule = /** @class */ (function () {
    function CkeditorRoutingModule() {
    }
    CkeditorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], CkeditorRoutingModule);
    return CkeditorRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/ckeditor/ckeditor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/miscellaneous/ckeditor/ckeditor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"alert alert-danger alert-block\">\n          <a class=\"close\" data-dismiss=\"alert\" href=\"#\">&#xD7;</a>\n          <h4 class=\"alert-heading\">CKEditor Warning!</h4>\n          If you plan to use CKEditor in your project for this theme, please be sure to read full documentation of its\n          use on their website. It is important to note that CKEditor may conflict with other editors and textareas. You\n          must destroy the CKeditor instance before pulling it into another object.\n        </div>\n        <!-- Widget ID (each widget will need unique ID)-->\n        <div sa-widget [colorbutton]=\"false\" [editbutton]=\"false\" [togglebutton]=\"false\" [fullscreenbutton]=\"false\" [sortable]=\"false\"\n                   color=\"darken\">\n          <!-- widget options:\n                              usage: <div sa-widget id=\"wid-id-0\" [editbutton]=\"false\">\n                              [colorbutton]=\"false\"\n                              [editbutton]=\"false\"\n                              [togglebutton]=\"false\"\n                              [deletebutton]=\"false\"\n                              [fullscreenbutton]=\"false\"\n                              [custombutton]=\"false\"\n                              [collapsed]=\"true\"\n                              [sortable]=\"false\"\n                          -->\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-pencil\"></i> </span>\n            <h2>CK Editor (Full version) </h2>\n          </header>\n          <!-- widget div-->\n          <div>\n            <!-- widget content -->\n            <div class=\"widget-body no-padding\">\n\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"ckeditor-showcase\">\n\t\t\t\t\t\t\t\t\t\t\t\t&lt;h1&gt;&lt;img alt=&quot;Saturn V carrying Apollo 11&quot; class=&quot;right&quot; src=&quot;/assets/img/demo/sample.jpg&quot;/&gt; Apollo 11&lt;/h1&gt; &lt;p&gt;&lt;b&gt;Apollo 11&lt;/b&gt; was the spaceflight that landed the first humans, Americans &lt;a href=&quot;http://en.wikipedia.org/wiki/Neil_Armstrong&quot; title=&quot;Neil Armstrong&quot;&gt;Neil Armstrong&lt;/a&gt; and &lt;a href=&quot;http://en.wikipedia.org/wiki/Buzz_Aldrin&quot; title=&quot;Buzz Aldrin&quot;&gt;Buzz Aldrin&lt;/a&gt;, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.&lt;/p&gt; &lt;p&gt;Armstrong spent about &lt;strike&gt;three and a half&lt;/strike&gt; two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&amp;nbsp;kg) of lunar material for return to Earth. A third member of the mission, &lt;a href=&quot;http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)&quot; title=&quot;Michael Collins (astronaut)&quot;&gt;Michael Collins&lt;/a&gt;, piloted the &lt;a href=&quot;http://en.wikipedia.org/wiki/Apollo_Command/Service_Module&quot; title=&quot;Apollo Command/Service Module&quot;&gt;command&lt;/a&gt; spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.&lt;/p&gt; &lt;h2&gt;Broadcasting and &lt;em&gt;quotes&lt;/em&gt; &lt;a id=&quot;quotes&quot; name=&quot;quotes&quot;&gt;&lt;/a&gt;&lt;/h2&gt; &lt;p&gt;Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:&lt;/p&gt; &lt;blockquote&gt;&lt;p&gt;One small step for [a] man, one giant leap for mankind.&lt;/p&gt;&lt;/blockquote&gt; &lt;p&gt;Apollo 11 effectively ended the &lt;a href=&quot;http://en.wikipedia.org/wiki/Space_Race&quot; title=&quot;Space Race&quot;&gt;Space Race&lt;/a&gt; and fulfilled a national goal proposed in 1961 by the late U.S. President &lt;a href=&quot;http://en.wikipedia.org/wiki/John_F._Kennedy&quot; title=&quot;John F. Kennedy&quot;&gt;John F. Kennedy&lt;/a&gt; in a speech before the United States Congress:&lt;/p&gt; &lt;blockquote&gt;&lt;p&gt;[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.&lt;/p&gt;&lt;/blockquote&gt; &lt;h2&gt;Technical details &lt;a id=&quot;tech-details&quot; name=&quot;tech-details&quot;&gt;&lt;/a&gt;&lt;/h2&gt; &lt;table align=&quot;right&quot; border=&quot;1&quot; bordercolor=&quot;#ccc&quot; cellpadding=&quot;5&quot; cellspacing=&quot;0&quot; style=&quot;border-collapse:collapse;margin:10px 0 10px 15px;&quot;&gt; &lt;caption&gt;&lt;strong&gt;Mission crew&lt;/strong&gt;&lt;/caption&gt; &lt;thead&gt; &lt;tr&gt; &lt;th scope=&quot;col&quot;&gt;Position&lt;/th&gt; &lt;th scope=&quot;col&quot;&gt;Astronaut&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td&gt;Commander&lt;/td&gt; &lt;td&gt;Neil A. Armstrong&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Command Module Pilot&lt;/td&gt; &lt;td&gt;Michael Collins&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Lunar Module Pilot&lt;/td&gt; &lt;td&gt;Edwin &amp;quot;Buzz&amp;quot; E. Aldrin, Jr.&lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;p&gt;Launched by a &lt;strong&gt;Saturn V&lt;/strong&gt; rocket from &lt;a href=&quot;http://en.wikipedia.org/wiki/Kennedy_Space_Center&quot; title=&quot;Kennedy Space Center&quot;&gt;Kennedy Space Center&lt;/a&gt; in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of &lt;a href=&quot;http://en.wikipedia.org/wiki/NASA&quot; title=&quot;NASA&quot;&gt;NASA&lt;/a&gt;&amp;#39;s Apollo program. The Apollo spacecraft had three parts:&lt;/p&gt; &lt;ol&gt; &lt;li&gt;&lt;strong&gt;Command Module&lt;/strong&gt; with a cabin for the three astronauts which was the only part which landed back on Earth&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Service Module&lt;/strong&gt; which supported the Command Module with propulsion, electrical power, oxygen and water&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Lunar Module&lt;/strong&gt; for landing on the Moon.&lt;/li&gt; &lt;/ol&gt; &lt;p&gt;After being sent to the Moon by the Saturn V&amp;#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the &lt;a href=&quot;http://en.wikipedia.org/wiki/Mare_Tranquillitatis&quot; title=&quot;Mare Tranquillitatis&quot;&gt;Sea of Tranquility&lt;/a&gt;. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the &lt;a href=&quot;http://en.wikipedia.org/wiki/Pacific_Ocean&quot; title=&quot;Pacific Ocean&quot;&gt;Pacific Ocean&lt;/a&gt; on July 24.&lt;/p&gt; &lt;hr/&gt; &lt;p style=&quot;text-align: right;&quot;&gt;&lt;small&gt;Source: &lt;a href=&quot;http://en.wikipedia.org/wiki/Apollo_11&quot;&gt;Wikipedia.org&lt;/a&gt;&lt;/small&gt;&lt;/p&gt;\n                      </textarea>\n            </div>\n            <!-- end widget content -->\n          </div>\n          <!-- end widget div -->\n        </div>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "./src/app/features/miscellaneous/ckeditor/ckeditor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/miscellaneous/ckeditor/ckeditor.component.ts ***!
  \***********************************************************************/
/*! exports provided: CkeditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorComponent", function() { return CkeditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//noinspection TypeScriptUnresolvedFunction
var $script = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");
var CkeditorComponent = /** @class */ (function () {
    function CkeditorComponent() {
    }
    CkeditorComponent.prototype.ngOnInit = function () {
        $script("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js", function (_) {
            var CKEDITOR = window['CKEDITOR'];
            CKEDITOR.replace('ckeditor-showcase');
        });
    };
    CkeditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckeditor',
            template: __webpack_require__(/*! ./ckeditor.component.html */ "./src/app/features/miscellaneous/ckeditor/ckeditor.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CkeditorComponent);
    return CkeditorComponent;
}());



/***/ }),

/***/ "./src/app/features/miscellaneous/ckeditor/ckeditor.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/miscellaneous/ckeditor/ckeditor.module.ts ***!
  \********************************************************************/
/*! exports provided: CkeditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkeditorModule", function() { return CkeditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ckeditor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ckeditor-routing.module */ "./src/app/features/miscellaneous/ckeditor/ckeditor-routing.module.ts");
/* harmony import */ var _ckeditor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ckeditor.component */ "./src/app/features/miscellaneous/ckeditor/ckeditor.component.ts");
/* harmony import */ var _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/layout */ "./src/app/shared/layout/index.ts");
/* harmony import */ var _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/stats/stats.module */ "./src/app/shared/stats/stats.module.ts");
/* harmony import */ var _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/widgets/smartadmin-widgets.module */ "./src/app/shared/widgets/smartadmin-widgets.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CkeditorModule = /** @class */ (function () {
    function CkeditorModule() {
    }
    CkeditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ckeditor_routing_module__WEBPACK_IMPORTED_MODULE_2__["CkeditorRoutingModule"],
                _app_shared_layout__WEBPACK_IMPORTED_MODULE_4__["SmartadminLayoutModule"],
                _app_shared_stats_stats_module__WEBPACK_IMPORTED_MODULE_5__["StatsModule"],
                _app_shared_widgets_smartadmin_widgets_module__WEBPACK_IMPORTED_MODULE_6__["SmartadminWidgetsModule"],
            ],
            declarations: [_ckeditor_component__WEBPACK_IMPORTED_MODULE_3__["CkeditorComponent"]]
        })
    ], CkeditorModule);
    return CkeditorModule;
}());



/***/ })

}]);
//# sourceMappingURL=ckeditor-ckeditor-module.js.map