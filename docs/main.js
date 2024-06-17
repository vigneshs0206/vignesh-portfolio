(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+YTG":
/*!***********************************!*\
  !*** ./src/app/api/projectsEn.ts ***!
  \***********************************/
/*! exports provided: projectsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsEn", function() { return projectsEn; });
const projectsEn = [
    {
        id: "teamTraveler",
        name: "Team Traveler",
        technologies: 'Android Studio, Java, FireBase, MVP, NoSql',
        images: [
            {
                title: 'Trip',
                src: "assets/images/voyages.webp",
            },
            {
                title: 'Trip',
                src: "assets/images/voyage.webp",
            },
            {
                title: 'Housing',
                src: "assets/images/logements.webp",
            },
        ],
        url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
        detail: "The application will allow you to organize group trips easily and quickly. Vote for dates, transport, accommodation or even activities. Thanks to this <a title='Download on Google Play' href='https://play.google.com/store/apps/details?id=team.traveler.teamtraveler'>application</a> no more problems with choices or disagreements.",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/team_traveler',
        detailIsDisplayed: false,
    },
    {
        id: "mautic",
        name: "Mautic Monitoring",
        technologies: 'Android Studio, Java, Rx_Java, Retrofit, MVP, Rest',
        images: [
            {
                title: 'Marketing campaigns',
                src: "assets/images/compagnes.jpg",
            },
            {
                title: 'Campaign detail',
                src: "assets/images/compagne-detail.jpg",
            },
            {
                title: "Email performance",
                src: "assets/images/email-detail.jpg",
            },
            {
                title: "Performance of an asset",
                src: "assets/images/asset-detail.jpg"
            },
        ],
        url: '#portfolio',
        detail: "<p>Mautic is an open source automatic marketing tool</p> <p>The application allows you to have dynamic and detailed reports, to analyze individual campaign trends.<br> A visually user-friendly dashboard gives you a unique quick view of the performance of: your digital campaigns, assets, and forms. </p> <p>The application is available in French and English.</p>",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/mautic_monitoring',
        detailIsDisplayed: false,
    },
    {
        id: "pokedex",
        name: "Pokedex",
        technologies: 'Java, J2EE, SpringBoot, TDD, MySQL, BootStrap, Services, Deploiment',
        images: [
            {
                title: 'Pokedex',
                src: "assets/images/pokedex.png",
            },
            {
                title: 'Trainers',
                src: "assets/images/trainers.png",
            },
            {
                title: "Profile",
                src: "assets/images/profile-trainer.png",
            },
        ],
        url: '#portfolio',
        detail: "<p>Display of the details of pokemon and their trainers.</p> <p>The two micro-service application contains: pokemon management and trainer management, which exposes a REST/JSON communication channel.<br>The 3rd WEB-UI micro-service connects to both micro-services.</p>",
        codeSourceUrl: 'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
    {
        id: "portfolio",
        name: "Portfolio",
        technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title: 'Portfolio',
                src: "assets/images/portfolio.png",
            },
        ],
        url: 'https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640',
        detail: "<p> CV in the form of a responsive WEB site that I put in open-source on GitHub accompanied by a publication of a <a title='See the article' href='https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640' target='_blank'>article</a> on medium. </p>",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/portfolio',
        detailIsDisplayed: false,
    },
    {
        id: "riddle",
        name: "Transfer Riddle",
        technologies: 'Java, J2EE(Web Services), JavaScript, Html5, CSS, BootStrap',
        images: [
            {
                title: 'Riddle',
                src: "assets/images/riddle.png",
            },
        ],
        url: 'https://transfer-riddle-solver.herokuapp.com/index.html',
        detail: "Display of the steps for solving the decanting puzzle. Given two empty tanks of capacity X and Y, how to obtain precisely T liters in one of the two tanks (T being an integer). You can fill or empty a tank , and transfer the contents from one to the other, until the source is empty or the destination full.",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/transfer_riddle_client',
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal Projects\portfolion tow\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AboutComponent {
    constructor(_translationLoaderService, http) {
        this._translationLoaderService = _translationLoaderService;
        this.http = http;
        // this._translationLoaderService.loadTranslations(english, french);
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCity"];
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMailBulk"];
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobile"];
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBirthdayCake"];
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopHouse"];
    }
    downloadpdflink() {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'https://vignesh-s-resume.tiiny.site/');
        link.setAttribute('download', `vignesh.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
    downloadPdf() {
        const pdfUrl = 'assets/pdf/VigneshS_Resume_[1].pdf'; // replace with your PDF file name
        this.http.get(pdfUrl, { responseType: 'arraybuffer' })
            .subscribe(response => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Vignesh_S_Resume.pdf'; // replace with your desired file name
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 38, vars: 0, consts: [["id", "about", 1, "section", "pt-0", "sticky", 2, "background", "linear-gradient(to bottom, #fff 0%, rgb(144 233 255 / 35%) 99%, rgb(0 0 0 / 50%) 100%)"], [1, "container", "text-center"], [1, "about"], [1, "about-img-holder"], ["src", "assets/imgs/vignesh2.jpg", "alt", "Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page", 1, "about-img"], [1, "about-caption"], [1, "section-subtitle"], [1, "section-title", "mb-3"], [1, "btn-rounded", "btn", "btn-outline-primary", "mt-4", 2, "position", "relative", "z-index", "10", 3, "click"], [1, "bubbles"], [1, "bubble"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Who Am I ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I am an Professional Software Engineer with proven experience in planning, requirements gathering, designing, developing, testing, demonstrating to clients and upper management, and deploying software. I have experience in all areas of the development process and believe I can adapt to any environment.I worked in the Skills (Javascript,Typescript,Html,Css,Postgresql,Angular and Node.js) and Experienced in Product Development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_12_listener() { return ctx.downloadpdflink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n    margin-right: 10px;\n}\n\nh3[_ngcontent-%COMP%]{\n  font-weight: 700;\n    font-size: 26px;\n    color: #173b6c;\n}\n\n.btn-social-media[_ngcontent-%COMP%]{\n  border-radius: 50px;\n  width: 40px;\n  height: 40px;\n  color: #ffffff;\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  background: #149ddd;\n  margin-right:10px;\n  margin-left:10px;\n  margin-top:10px;\n}\n\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n\n.bubbles[_ngcontent-%COMP%]{\n  position:absolute;\n  width:100%;\n  height:  219%;\n  z-index:0;\n  overflow:hidden;\n  top:0;\n  left:0;\n}\n\n.bubble[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom:-100px;\n  width:40px;\n  height: 40px;\n  background:#9a71e7;\n  border-radius:50%;\n  opacity:0.5;\n  animation: rise 10s infinite ease-in;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(1){\n  width:40px;\n  height:40px;\n  left:10%;\n  animation-duration:8s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(2){\n  width:20px;\n  height:20px;\n  left:20%;\n  animation-duration:5s;\n  animation-delay:1s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(3){\n  width:50px;\n  height:50px;\n  left:35%;\n  animation-duration:7s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(4){\n  width:80px;\n  height:80px;\n  left:50%;\n  animation-duration:11s;\n  animation-delay:0s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(5){\n  width:35px;\n  height:35px;\n  left:55%;\n  animation-duration:6s;\n  animation-delay:1s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(6){\n  width:45px;\n  height:45px;\n  left:65%;\n  animation-duration:8s;\n  animation-delay:3s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(7){\n  width:90px;\n  height:90px;\n  left:70%;\n  animation-duration:12s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(8){\n  width:25px;\n  height:25px;\n  left:80%;\n  animation-duration:6s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(9){\n  width:15px;\n  height:15px;\n  left:70%;\n  animation-duration:5s;\n  animation-delay:1s;\n}\n\n\n\n@keyframes rise{\n  0%{\n    bottom:-100px;\n    transform:translateX(0);\n  }\n  50%{\n    transform:translate(100px);\n  }\n  100%{\n    bottom:1080px;\n    transform:translateX(-200px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0lBQ2QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsS0FBSztFQUNMLE1BQU07QUFDUjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBR0g7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDRCQUE0QjtFQUM5QjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuZmEtaWNvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMxNDlkZGQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZmYzZmM7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaDN7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiAjMTczYjZjO1xufVxuXG4uYnRuLXNvY2lhbC1tZWRpYXtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE0OWRkZDtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIG1hcmdpbi10b3A6MTBweDtcbn1cblxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnViYmxlc3tcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogIDIxOSU7XG4gIHotaW5kZXg6MDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB0b3A6MDtcbiAgbGVmdDowO1xufVxuLmJ1YmJsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206LTEwMHB4O1xuICB3aWR0aDo0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IzlhNzFlNztcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIG9wYWNpdHk6MC41O1xuICBhbmltYXRpb246IHJpc2UgMTBzIGluZmluaXRlIGVhc2UtaW47XG59XG4uYnViYmxlOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6NDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGxlZnQ6MTAlO1xuICBhbmltYXRpb24tZHVyYXRpb246OHM7XG59XG4uYnViYmxlOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6MjBweDtcbiAgaGVpZ2h0OjIwcHg7XG4gIGxlZnQ6MjAlO1xuICBhbmltYXRpb24tZHVyYXRpb246NXM7XG4gIGFuaW1hdGlvbi1kZWxheToxcztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDo1MHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGVmdDozNSU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjo3cztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoNCl7XG4gIHdpZHRoOjgwcHg7XG4gIGhlaWdodDo4MHB4O1xuICBsZWZ0OjUwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjExcztcbiAgYW5pbWF0aW9uLWRlbGF5OjBzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoNSl7XG4gIHdpZHRoOjM1cHg7XG4gIGhlaWdodDozNXB4O1xuICBsZWZ0OjU1JTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjZzO1xuICBhbmltYXRpb24tZGVsYXk6MXM7XG59XG4uYnViYmxlOm50aC1jaGlsZCg2KXtcbiAgd2lkdGg6NDVweDtcbiAgaGVpZ2h0OjQ1cHg7XG4gIGxlZnQ6NjUlO1xuICBhbmltYXRpb24tZHVyYXRpb246OHM7XG4gIGFuaW1hdGlvbi1kZWxheTozcztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDcpe1xuICB3aWR0aDo5MHB4O1xuICBoZWlnaHQ6OTBweDtcbiAgbGVmdDo3MCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxMnM7XG4gIGFuaW1hdGlvbi1kZWxheToycztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDgpe1xuICB3aWR0aDoyNXB4O1xuICBoZWlnaHQ6MjVweDtcbiAgbGVmdDo4MCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjo2cztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoOSl7XG4gIHdpZHRoOjE1cHg7XG4gIGhlaWdodDoxNXB4O1xuICBsZWZ0OjcwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xuICBhbmltYXRpb24tZGVsYXk6MXM7XG59XG4vKiAuYnViYmxlOm50aC1jaGlsZCgxMSl7XG4gIHdpZHRoOjkwcHg7XG4gIGhlaWdodDo5MHB4O1xuICBsZWZ0OjI1JTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjEwcztcbiAgYW5pbWF0aW9uLWRlbGF5OjRzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoMTApe1xuICB3aWR0aDo5MHB4O1xuICBoZWlnaHQ6OTBweDtcbiAgbGVmdDozNSU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxMHM7XG4gIGFuaW1hdGlvbi1kZWxheTo0cztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDEyKXtcbiAgd2lkdGg6OTBweDtcbiAgaGVpZ2h0OjkwcHg7XG4gIGxlZnQ6NDUlO1xuICBhbmltYXRpb24tZHVyYXRpb246MTBzO1xuICBhbmltYXRpb24tZGVsYXk6NHM7XG59ICovXG5cblxuQGtleWZyYW1lcyByaXNle1xuICAwJXtcbiAgICBib3R0b206LTEwMHB4O1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICB9XG4gIDUwJXtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIGJvdHRvbToxMDgwcHg7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMHB4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_2__["TranslationLoaderService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");



class HomeComponent {
    constructor(_translationLoaderService) {
        // this._translationLoaderService.loadTranslations(english, french);
        this._translationLoaderService = _translationLoaderService;
        this.bubbles = [];
    }
    ngOnInit() {
        var options = {
            strings: ['', 'Full-Stack', 'WEB', 'Mobile'],
            typeSpeed: 120,
            backSpeed: 100,
            loop: true,
        };
        // var typed = new Typed('.typed', options);
        // typed.reset(true)
        for (let i = 0; i < 20; i++) {
            this.bubbles.push({
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%'
            });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 0, consts: [["id", "home", 1, "header"], [1, "overlay"], [1, "header-content", "container"], [1, "header-title"], [1, "up"], [1, "down"], [1, "header-subtitle", 2, "margin-top", "10px"], [1, "sticky"], [1, "bubbles"], [1, "bubble"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello...!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I am Vignesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FULLSTACK WEB DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    height: 100%;\r\n  }\r\n  body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    padding:0;\r\n    background:#29b6f6;\r\n  }\r\n  .bubbles[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width:100%;\r\n    height: 100%;\r\n    z-index:0;\r\n    overflow:hidden;\r\n    top:0;\r\n    left:0;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom:-100px;\r\n    width:40px;\r\n    height: 40px;\r\n    background:#9a71e7;\r\n    border-radius:50%;\r\n    opacity:0.5;\r\n    animation: rise 10s infinite ease-in;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(1){\r\n    width:40px;\r\n    height:40px;\r\n    left:10%;\r\n    animation-duration:8s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(2){\r\n    width:20px;\r\n    height:20px;\r\n    left:20%;\r\n    animation-duration:5s;\r\n    animation-delay:1s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(3){\r\n    width:50px;\r\n    height:50px;\r\n    left:35%;\r\n    animation-duration:7s;\r\n    animation-delay:2s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(4){\r\n    width:80px;\r\n    height:80px;\r\n    left:50%;\r\n    animation-duration:11s;\r\n    animation-delay:0s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(5){\r\n    width:35px;\r\n    height:35px;\r\n    left:55%;\r\n    animation-duration:6s;\r\n    animation-delay:1s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(6){\r\n    width:45px;\r\n    height:45px;\r\n    left:65%;\r\n    animation-duration:8s;\r\n    animation-delay:3s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(7){\r\n    width:90px;\r\n    height:90px;\r\n    left:70%;\r\n    animation-duration:12s;\r\n    animation-delay:2s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(8){\r\n    width:25px;\r\n    height:25px;\r\n    left:80%;\r\n    animation-duration:6s;\r\n    animation-delay:2s;\r\n  }\r\n  .bubble[_ngcontent-%COMP%]:nth-child(9){\r\n    width:15px;\r\n    height:15px;\r\n    left:70%;\r\n    animation-duration:5s;\r\n    animation-delay:1s;\r\n  }\r\n  \r\n  @keyframes rise{\r\n    0%{\r\n      bottom:-100px;\r\n      transform:translateX(0);\r\n    }\r\n    50%{\r\n      transform:translate(100px);\r\n    }\r\n    100%{\r\n      bottom:1080px;\r\n      transform:translateX(-200px);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0VBQ1I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9CRztFQUdIO0lBQ0U7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLGFBQWE7TUFDYiw0QkFBNEI7SUFDOUI7RUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LGh0bWx7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBib2R5e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBiYWNrZ3JvdW5kOiMyOWI2ZjY7XHJcbiAgfVxyXG4gIC5idWJibGVze1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDowO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgfVxyXG4gIC5idWJibGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206LTEwMHB4O1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6IzlhNzFlNztcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgb3BhY2l0eTowLjU7XHJcbiAgICBhbmltYXRpb246IHJpc2UgMTBzIGluZmluaXRlIGVhc2UtaW47XHJcbiAgfVxyXG4gIC5idWJibGU6bnRoLWNoaWxkKDEpe1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgbGVmdDoxMCU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246OHM7XHJcbiAgfVxyXG4gIC5idWJibGU6bnRoLWNoaWxkKDIpe1xyXG4gICAgd2lkdGg6MjBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG4gICAgbGVmdDoyMCU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246NXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6MXM7XHJcbiAgfVxyXG4gIC5idWJibGU6bnRoLWNoaWxkKDMpe1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbGVmdDozNSU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246N3M7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6MnM7XHJcbiAgfVxyXG4gIC5idWJibGU6bnRoLWNoaWxkKDQpe1xyXG4gICAgd2lkdGg6ODBweDtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MTFzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjBzO1xyXG4gIH1cclxuICAuYnViYmxlOm50aC1jaGlsZCg1KXtcclxuICAgIHdpZHRoOjM1cHg7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuICAgIGxlZnQ6NTUlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjFzO1xyXG4gIH1cclxuICAuYnViYmxlOm50aC1jaGlsZCg2KXtcclxuICAgIHdpZHRoOjQ1cHg7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGxlZnQ6NjUlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjNzO1xyXG4gIH1cclxuICAuYnViYmxlOm50aC1jaGlsZCg3KXtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIGxlZnQ6NzAlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjEycztcclxuICAgIGFuaW1hdGlvbi1kZWxheToycztcclxuICB9XHJcbiAgLmJ1YmJsZTpudGgtY2hpbGQoOCl7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbiAgICBsZWZ0OjgwJTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo2cztcclxuICAgIGFuaW1hdGlvbi1kZWxheToycztcclxuICB9XHJcbiAgLmJ1YmJsZTpudGgtY2hpbGQoOSl7XHJcbiAgICB3aWR0aDoxNXB4O1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbiAgICBsZWZ0OjcwJTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo1cztcclxuICAgIGFuaW1hdGlvbi1kZWxheToxcztcclxuICB9XHJcbiAgLyogLmJ1YmJsZTpudGgtY2hpbGQoMTEpe1xyXG4gICAgd2lkdGg6OTBweDtcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgbGVmdDoyNSU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MTBzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OjRzO1xyXG4gIH1cclxuICAuYnViYmxlOm50aC1jaGlsZCgxMCl7XHJcbiAgICB3aWR0aDo5MHB4O1xyXG4gICAgaGVpZ2h0OjkwcHg7XHJcbiAgICBsZWZ0OjM1JTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxMHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6NHM7XHJcbiAgfVxyXG4gIC5idWJibGU6bnRoLWNoaWxkKDEyKXtcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxuICAgIGxlZnQ6NDUlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjEwcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTo0cztcclxuICB9ICovXHJcbiAgXHJcbiAgXHJcbiAgQGtleWZyYW1lcyByaXNle1xyXG4gICAgMCV7XHJcbiAgICAgIGJvdHRvbTotMTAwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgIGJvdHRvbToxMDgwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDBweCk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "AY9o":
/*!****************************************************************!*\
  !*** ./src/app/curriculum-vitae/curriculum-vitae.component.ts ***!
  \****************************************************************/
/*! exports provided: CurriculumVitaeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumVitaeComponent", function() { return CurriculumVitaeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _api_experiencesFr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/experiencesFr */ "NWkV");
/* harmony import */ var _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/experiencesEn */ "CnTy");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");









function CurriculumVitaeComponent_li_12_p_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mission_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r5 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mission_r4, " ");
} }
function CurriculumVitaeComponent_li_12_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CurriculumVitaeComponent_li_12_p_8_span_1_Template, 5, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TECHNOLOGIES WORKED:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r1.missions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", experience_r1.technologies, " ");
} }
function CurriculumVitaeComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CurriculumVitaeComponent_li_12_p_8_Template, 5, 2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r1.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r1.detailIsDisplayed);
} }
class CurriculumVitaeComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__["experiencesEn"];
        // this._translationLoaderService.loadTranslations(english, french);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.experiences = _api_experiencesEn__WEBPACK_IMPORTED_MODULE_3__["experiencesEn"];
            }
            else {
                this.experiences = _api_experiencesFr__WEBPACK_IMPORTED_MODULE_2__["experiencesFr"];
            }
        });
    }
    ngOnInit() {
        this.planeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlane"];
        this.gameIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"];
        this.volleyBallIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolleyballBall"];
    }
    detailOnClick(experience) {
        experience.detailIsDisplayed = !experience.detailIsDisplayed;
    }
}
CurriculumVitaeComponent.ɵfac = function CurriculumVitaeComponent_Factory(t) { return new (t || CurriculumVitaeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
CurriculumVitaeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurriculumVitaeComponent, selectors: [["app-curriculum-vitae"]], decls: 46, vars: 3, consts: [["id", "cv"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-8", "col-md-6"], [1, "timeline"], [4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-12", "aos-init", "aos-animate"], [1, "container", "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "aos-init", "aos-animate"], [1, "noProgress", "langue"], [1, ""], [1, "val"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "mt-3", "aos-init", "aos-animate"], [3, "icon"], [1, "d-flex", "flex-row"], [1, "year", "p-2", "d-flex", "justify-content-center"], [4, "ngIf"]], template: function CurriculumVitaeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CurriculumVitaeComponent_li_12_Template, 9, 4, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tamil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " fluent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " fluent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Center Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Adventurous Trips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.volleyBallIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.planeIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["ul.timeline[_ngcontent-%COMP%] {\n    list-style-type: none;\n    position: relative;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: #105572;\n    display: inline-block;\n    position: absolute;\n    left: 29px;\n    width: 2px;\n    height: 100%;\n    z-index: 400;\n}\n\n.skills[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n    font-weight: 700;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    color: #050d18;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-family: \"Raleway\", sans-serif;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    padding-left: 20px;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: white;\n    display: inline-block;\n    position: absolute;\n    border-radius: 50%;\n    border: 3px solid #105572;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    z-index: 400;\n}\n\n.year[_ngcontent-%COMP%]{\n    background-color: #e4edf9;\n    width: 190px;\n    padding-left: 5px;\n    margin-right: 5px;\n    height: 57px;\n}\n\nbutton[_ngcontent-%COMP%]{\n    height: 40px;\n}\n\n.langue[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\n\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJpY3VsdW0tdml0YWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoiY3VycmljdWx1bS12aXRhZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwudGltZWxpbmUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6ICMxMDU1NzI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyOXB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDQwMDtcbn1cblxuLnNraWxscyAucmVzdW1lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgY29sb3I6ICMwNTBkMTg7XG59XG5cbmgzIHtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbnVsLnRpbWVsaW5lID4gbGkge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTA1NTcyO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDQwMDtcbn1cblxuLnllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWRmOTtcbiAgICB3aWR0aDogMTkwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xufVxuYnV0dG9ue1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmxhbmd1ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuZmEtaWNvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMxNDlkZGQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZmYzZmM7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurriculumVitaeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-curriculum-vitae',
                templateUrl: './curriculum-vitae.component.html',
                styleUrls: ['./curriculum-vitae.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_4__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BzaH":
/*!*************************************!*\
  !*** ./src/app/api/referencesEn.ts ***!
  \*************************************/
/*! exports provided: referencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesEn", function() { return referencesEn; });
const referencesEn = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Velghe Walter',
        personPosition: "IT Plant Manager",
        personCompany: 'Agc glass europe',
        message: "Zinedine is very effective in application development and in their maintenance, innovative and rational. Coding like lifestyle, his work features high quality products, following the standards and best practices. He has completed three projects on our site and I am so impressed with his techniques. He always has a thought criticism. He is always ready to take on challenges.",
    },
    {
        personImg: "assets/images/lotfi-benkhider.jpg",
        personFullname: 'Benkhider Lotfi',
        personPosition: "CEO & Founder",
        personCompany: 'Scotfy',
        message: "Zinedine completed her internship in my company. He is independent and has a great learning ability. He meets delivery deadlines. He has team spirit. Zinedine does not hesitate to propose new relevant ideas. He respects the instructions, its code is clean.",
    },
    {
        personImg: "assets/images/mohamed-yahiatene.jpg",
        personFullname: 'Yahiatene Mohamed',
        personPosition: "DevOps Engineer",
        personCompany: 'AG2R La Mondiale',
        message: "I worked for two years with Zinedine at the University of Lille. Zinedine is a very good working partner with high knowledge in backend and frontend development, he is always keen to move forward without ever being afraid to use new technologies. He does not hesitate to help his colleagues whenever he can. He manages to solve problems quickly and efficiently with typical optimism.",
    }
];


/***/ }),

/***/ "CnTy":
/*!**************************************!*\
  !*** ./src/app/api/experiencesEn.ts ***!
  \**************************************/
/*! exports provided: experiencesEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesEn", function() { return experiencesEn; });
const experiencesEn = [
    {
        title: "Software Engineer",
        company: 'TeleApps Private Limited',
        period: "Sept 2022 - Present (1 year 8 months)",
        technologies: 'Angular, Angular Materials, Node js,pgSql,Apache,Freeswitch',
        missions: [
            "Developed Frontend modules using Angular, JavaScript, HTML, and CSS for a variety of projects.",
            "Collaborated with team members and senior developers to build an R&D web application contact center product",
            "Implemented modules including dashboards, reports, reactive forms, CRUD operations, and a web soft phone.",
            "Automated test cases using the Robot Framework to improve development efficiency",
            "Maintained codebase using GitLab, ensuring code quality and version control."
        ],
        detailIsDisplayed: true,
    },
    {
        title: "Software Engineer Trainee",
        company: 'TeleApps Private Limited',
        period: "Oct 2021 - Sept 2022 (1 year)",
        technologies: 'HTML,css,Javascript, Angular, Angular Materials, Robot Framework,Excel',
        missions: [
            "Developed frontend modules using Angular, JavaScript, HTML, and CSS for various projects, including dashboards,reports,reactive forms, CRUD operations, and a web soft phone, while collaborating with team members and senior developers on an RD web application contact center product",
            "Automated test cases using the Robot Framework to improve development efficiency Increased Overall Testing speed by 30 Percent and maintained code quality and version control through GitLab, ensuring a streamlined and effective development process",
            "Implemented a comprehensive development quality assessment module with the team"
        ],
        detailIsDisplayed: true,
    },
];


/***/ }),

/***/ "NWkV":
/*!**************************************!*\
  !*** ./src/app/api/experiencesFr.ts ***!
  \**************************************/
/*! exports provided: experiencesFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiencesFr", function() { return experiencesFr; });
const experiencesFr = [
    {
        title: "Dévloppeur en freelance",
        company: 'Scotfy, Lyon, Fr',
        period: "2020 - 2021 (2 mois)",
        technologies: 'C#, .NET, Angular 11, Angular Materials, pgSql, Qlik Sense',
        missions: [
            "Mise en place d'un gestionnaire de thèmes (couleurs, logo).",
            "Mise en place d'un gestionnaire de dossiers virtuels qui peuvent contenir des apps Qlik Sense.",
            "Développement d'une interface de sauvegarde des ressources.",
            "Création de pages web personnalisables : Qlik Sense Mashups (En cours).",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Dévloppeur en freelance",
        company: 'AGC Glass Europe, Maubeuge, Fr',
        period: "2020 - 2021 (5 mois)",
        technologies: 'JAVA 8, Spring, Angular 8, Angular Materials, MySql',
        missions: [
            "Développement d'une application de notation de fournisseurs par les acheteurs.",
            "Maintenance évolutive et corrective d'applications.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Dévloppeur en alternance",
        company: 'AGC Glass Europe, Maubeuge, Fr',
        period: "2019 - 2020 (1 an)",
        technologies: 'JAVA 8, Spring, Angular 8, Angular Materials, MySql',
        missions: [
            "Application de gestion des camions entrant sur le site",
            "Amélioration d'une application de création de plans de préventions.",
            "Application de mise en forme des commandes du verre, dans l’intérêt d'une meilleure lisibilité des priorités pour les équipes de production.",
            "Création de pages web personnalisables : Qlik Sense Mashups (En cours).",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Stagiaire Dévloppeur logiciel",
        company: 'Scotfy, Lyon, Fr',
        period: "2018 (3 mois)",
        technologies: 'C#, .NET, Chiffrement AES-256',
        missions: [
            "Multilingue: Mise en place d’un système de gestion de la langue afin de permettre à l’utilisateur de choisir la langue des interfaces, des messages et des logs.",
            "Clé de licence: Validation du logiciel à l’aide d’une clé de licence basée sur le nom d’utilisateur Windows.",
        ],
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");








class AppComponent {
    constructor(_translateService) {
        this._translateService = _translateService;
        this._translateService.addLangs(['en', 'fr']);
        this._translateService.setDefaultLang('fr');
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        if (!localStorage.getItem("lang")) {
            localStorage.setItem("lang", 'en');
        }
        let lang = localStorage.getItem("lang");
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-curriculum-vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\n    width:100%;\n    height: 100%;\n  }\n  body[_ngcontent-%COMP%]{\n    margin:0;\n    padding:0;\n    background:#29b6f6;\n  }\n  .bubbles[_ngcontent-%COMP%]{\n    position:absolute;\n    width:100%;\n    height: 100%;\n    z-index:0;\n    overflow:hidden;\n    top:0;\n    left:0;\n  }\n  .bubble[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:-100px;\n    width:40px;\n    height: 40px;\n    background:#f1f1f1;\n    border-radius:50%;\n    opacity:0.5;\n    animation: rise 10s infinite ease-in;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(1){\n    width:40px;\n    height:40px;\n    left:10%;\n    animation-duration:8s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(2){\n    width:20px;\n    height:20px;\n    left:20%;\n    animation-duration:5s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(3){\n    width:50px;\n    height:50px;\n    left:35%;\n    animation-duration:7s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(4){\n    width:80px;\n    height:80px;\n    left:50%;\n    animation-duration:11s;\n    animation-delay:0s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(5){\n    width:35px;\n    height:35px;\n    left:55%;\n    animation-duration:6s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(6){\n    width:45px;\n    height:45px;\n    left:65%;\n    animation-duration:8s;\n    animation-delay:3s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(7){\n    width:90px;\n    height:90px;\n    left:70%;\n    animation-duration:12s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(8){\n    width:25px;\n    height:25px;\n    left:80%;\n    animation-duration:6s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(9){\n    width:15px;\n    height:15px;\n    left:70%;\n    animation-duration:5s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(10){\n    width:90px;\n    height:90px;\n    left:25%;\n    animation-duration:10s;\n    animation-delay:4s;\n  }\n  @keyframes rise{\n    0%{\n      bottom:-100px;\n      transform:translateX(0);\n    }\n    50%{\n      transform:translate(100px);\n    }\n    100%{\n      bottom:1080px;\n      transform:translateX(-200px);\n    }\n  }\n  .footer[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #01557a;\n    color: rgb(255, 255, 255);\n    text-align: center;\n    vertical-align: middle;\n  }\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n      margin: 10px 0px ;\n  }\n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\n    width:100%;\n    height: 100%;\n  }\n  body[_ngcontent-%COMP%]{\n    margin:0;\n    padding:0;\n    background:#29b6f6;\n  }\n  .bubbles[_ngcontent-%COMP%]{\n    position:absolute;\n    width:100%;\n    height: 100%;\n    z-index:0;\n    overflow:hidden;\n    top:0;\n    left:0;\n  }\n  .bubble[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom:-100px;\n    width:40px;\n    height: 40px;\n    background:#9a71e7;\n    border-radius:50%;\n    opacity:0.5;\n    animation: rise 10s infinite ease-in;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(1){\n    width:40px;\n    height:40px;\n    left:10%;\n    animation-duration:8s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(2){\n    width:20px;\n    height:20px;\n    left:20%;\n    animation-duration:5s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(3){\n    width:50px;\n    height:50px;\n    left:35%;\n    animation-duration:7s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(4){\n    width:80px;\n    height:80px;\n    left:50%;\n    animation-duration:11s;\n    animation-delay:0s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(5){\n    width:35px;\n    height:35px;\n    left:55%;\n    animation-duration:6s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(6){\n    width:45px;\n    height:45px;\n    left:65%;\n    animation-duration:8s;\n    animation-delay:3s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(7){\n    width:90px;\n    height:90px;\n    left:70%;\n    animation-duration:12s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(8){\n    width:25px;\n    height:25px;\n    left:80%;\n    animation-duration:6s;\n    animation-delay:2s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(9){\n    width:15px;\n    height:15px;\n    left:70%;\n    animation-duration:5s;\n    animation-delay:1s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(11){\n    width:90px;\n    height:90px;\n    left:25%;\n    animation-duration:10s;\n    animation-delay:4s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(10){\n    width:90px;\n    height:90px;\n    left:35%;\n    animation-duration:10s;\n    animation-delay:4s;\n  }\n  .bubble[_ngcontent-%COMP%]:nth-child(12){\n    width:90px;\n    height:90px;\n    left:45%;\n    animation-duration:10s;\n    animation-delay:4s;\n  }\n  @keyframes rise{\n    0%{\n      bottom:-100px;\n      transform:translateX(0);\n    }\n    50%{\n      transform:translate(100px);\n    }\n    100%{\n      bottom:1080px;\n      transform:translateX(-200px);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07RUFDUjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTtNQUNFLGFBQWE7TUFDYix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsYUFBYTtNQUNiLDRCQUE0QjtJQUM5QjtFQUNGO0VBQUM7SUFDQyxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCO0VBQ0E7TUFDSSxpQkFBaUI7RUFDckI7RUFHQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0VBQ1I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUdBO0lBQ0U7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLGFBQWE7TUFDYiw0QkFBNEI7SUFDOUI7RUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksaHRtbHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBib2R5e1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBiYWNrZ3JvdW5kOiMyOWI2ZjY7XG4gIH1cbiAgLmJ1YmJsZXN7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDowO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gIH1cbiAgLmJ1YmJsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOi0xMDBweDtcbiAgICB3aWR0aDo0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiNmMWYxZjE7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgb3BhY2l0eTowLjU7XG4gICAgYW5pbWF0aW9uOiByaXNlIDEwcyBpbmZpbml0ZSBlYXNlLWluO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDEpe1xuICAgIHdpZHRoOjQwcHg7XG4gICAgaGVpZ2h0OjQwcHg7XG4gICAgbGVmdDoxMCU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjhzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOjIwcHg7XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgbGVmdDoyMCU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheToxcztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCgzKXtcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xuICAgIGxlZnQ6MzUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo3cztcbiAgICBhbmltYXRpb24tZGVsYXk6MnM7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoNCl7XG4gICAgd2lkdGg6ODBweDtcbiAgICBoZWlnaHQ6ODBweDtcbiAgICBsZWZ0OjUwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MTFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTowcztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCg1KXtcbiAgICB3aWR0aDozNXB4O1xuICAgIGhlaWdodDozNXB4O1xuICAgIGxlZnQ6NTUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo2cztcbiAgICBhbmltYXRpb24tZGVsYXk6MXM7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoNil7XG4gICAgd2lkdGg6NDVweDtcbiAgICBoZWlnaHQ6NDVweDtcbiAgICBsZWZ0OjY1JTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246OHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjNzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDcpe1xuICAgIHdpZHRoOjkwcHg7XG4gICAgaGVpZ2h0OjkwcHg7XG4gICAgbGVmdDo3MCU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjEycztcbiAgICBhbmltYXRpb24tZGVsYXk6MnM7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoOCl7XG4gICAgd2lkdGg6MjVweDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICBsZWZ0OjgwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246NnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjJzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDkpe1xuICAgIHdpZHRoOjE1cHg7XG4gICAgaGVpZ2h0OjE1cHg7XG4gICAgbGVmdDo3MCU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheToxcztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCgxMCl7XG4gICAgd2lkdGg6OTBweDtcbiAgICBoZWlnaHQ6OTBweDtcbiAgICBsZWZ0OjI1JTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MTBzO1xuICAgIGFuaW1hdGlvbi1kZWxheTo0cztcbiAgfVxuICBAa2V5ZnJhbWVzIHJpc2V7XG4gICAgMCV7XG4gICAgICBib3R0b206LTEwMHB4O1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMTAwcHgpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgYm90dG9tOjEwODBweDtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDBweCk7XG4gICAgfVxuICB9LmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU1N2E7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9vdGVyIHB7XG4gICAgICBtYXJnaW46IDEwcHggMHB4IDtcbiAgfVxuXG5cbiAgYm9keSxodG1se1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIGJvZHl7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGJhY2tncm91bmQ6IzI5YjZmNjtcbiAgfVxuICAuYnViYmxlc3tcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OjA7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgfVxuICAuYnViYmxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206LTEwMHB4O1xuICAgIHdpZHRoOjQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IzlhNzFlNztcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICBvcGFjaXR5OjAuNTtcbiAgICBhbmltYXRpb246IHJpc2UgMTBzIGluZmluaXRlIGVhc2UtaW47XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6NDBweDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBsZWZ0OjEwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246OHM7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6MjBweDtcbiAgICBoZWlnaHQ6MjBweDtcbiAgICBsZWZ0OjIwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246NXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjFzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDMpe1xuICAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgbGVmdDozNSU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjdzO1xuICAgIGFuaW1hdGlvbi1kZWxheToycztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCg0KXtcbiAgICB3aWR0aDo4MHB4O1xuICAgIGhlaWdodDo4MHB4O1xuICAgIGxlZnQ6NTAlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjBzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDUpe1xuICAgIHdpZHRoOjM1cHg7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgbGVmdDo1NSU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheToxcztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCg2KXtcbiAgICB3aWR0aDo0NXB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIGxlZnQ6NjUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo4cztcbiAgICBhbmltYXRpb24tZGVsYXk6M3M7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoNyl7XG4gICAgd2lkdGg6OTBweDtcbiAgICBoZWlnaHQ6OTBweDtcbiAgICBsZWZ0OjcwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246MTJzO1xuICAgIGFuaW1hdGlvbi1kZWxheToycztcbiAgfVxuICAuYnViYmxlOm50aC1jaGlsZCg4KXtcbiAgICB3aWR0aDoyNXB4O1xuICAgIGhlaWdodDoyNXB4O1xuICAgIGxlZnQ6ODAlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjo2cztcbiAgICBhbmltYXRpb24tZGVsYXk6MnM7XG4gIH1cbiAgLmJ1YmJsZTpudGgtY2hpbGQoOSl7XG4gICAgd2lkdGg6MTVweDtcbiAgICBoZWlnaHQ6MTVweDtcbiAgICBsZWZ0OjcwJTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246NXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjFzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDExKXtcbiAgICB3aWR0aDo5MHB4O1xuICAgIGhlaWdodDo5MHB4O1xuICAgIGxlZnQ6MjUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjRzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDEwKXtcbiAgICB3aWR0aDo5MHB4O1xuICAgIGhlaWdodDo5MHB4O1xuICAgIGxlZnQ6MzUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjRzO1xuICB9XG4gIC5idWJibGU6bnRoLWNoaWxkKDEyKXtcbiAgICB3aWR0aDo5MHB4O1xuICAgIGhlaWdodDo5MHB4O1xuICAgIGxlZnQ6NDUlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OjRzO1xuICB9XG4gIFxuICBcbiAgQGtleWZyYW1lcyByaXNle1xuICAgIDAle1xuICAgICAgYm90dG9tOi0xMDBweDtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgICA1MCV7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIGJvdHRvbToxMDgwcHg7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwcHgpO1xuICAgIH1cbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./references/references.component */ "en7e");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot(),
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");



class ContactComponent {
    constructor(_translationLoaderService) {
        // this._translationLoaderService.loadTranslations(english, french);
        this._translationLoaderService = _translationLoaderService;
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 44, vars: 0, consts: [["id", "contact"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [2, "color", "white"], [1, "col-md-9"], [1, "contact-form"], [1, "form-group"], ["for", "identite", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["type", "text", "id", "identite", "placeholder", "enterIdentify", "name", "fname", 1, "form-control"], ["for", "email", 1, "control-label", "col-sm-2"], ["type", "email", "id", "email", "placeholder", "enterEmail", "name", "email", 1, "form-control"], ["for", "object", 1, "control-label", "col-sm-2"], ["type", "text", "id", "object", "placeholder", "contact", "name", "object", 1, "form-control"], ["for", "comment", 1, "control-label", "col-sm-2"], ["rows", "5", "id", "comment", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PHONE : 9092213009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "WHATS APP : 9092213009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EMAIL : vignesh020600@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n\n.contact[_ngcontent-%COMP%]{\n    padding: 4%;\n    height: 400px;\n}\n\n.col-md-3[_ngcontent-%COMP%]{\n    background: #1478a7;\n    padding: 4%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background:#149ddd;\n    color: #fff;\n    font-weight: 600;\n    width: 25%;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\n\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px; \n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcbn1cblxuLmNvbnRhY3R7XG4gICAgcGFkZGluZzogNCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmNvbC1tZC0ze1xuICAgIGJhY2tncm91bmQ6ICMxNDc4YTc7XG4gICAgcGFkZGluZzogNCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbyBoMntcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb2wtbWQtOXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IzE0OWRkZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9uOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IFxufVxuXG5oMyxoNHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "eZ+O":
/*!*************************************!*\
  !*** ./src/app/api/referencesFr.ts ***!
  \*************************************/
/*! exports provided: referencesFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "referencesFr", function() { return referencesFr; });
const referencesFr = [
    {
        personImg: "assets/images/unknown.jpg",
        personFullname: 'Velghe Walter',
        personPosition: "IT Plant Manager",
        personCompany: 'Agc glass europe',
        message: "Zinedine est très efficace dans le développement d'applications et dans leur maintenance, innovante et rationnelle. Coder comme style de vie, son travail propose des produits de haute qualité, suivant les normes et les meilleures pratiques. Il a réalisé trois projets sur notre site et je suis tellement impressionné par ses techniques. Il a toujours une pensée critique. Il est toujours prêt à relever des défis.",
    },
    {
        personImg: "assets/images/lotfi-benkhider.jpg",
        personFullname: 'Benkhider Lotfi',
        personPosition: "CEO & Founder",
        personCompany: 'Scotfy',
        message: "Zinedine a effectué son stage dans mon entreprise. Il est indépendant et a une grande capacité d'apprentissage. Il respecte les délais de livraison. Il a l'esprit d'équipe. Zinedine n'hésite pas à proposer de nouvelles idées pertinentes. Il respecte les consignes, son code est propre.",
    },
    {
        personImg: "assets/images/mohamed-yahiatene.jpg",
        personFullname: 'Yahiatene Mohamed',
        personPosition: "DevOps Engineer",
        personCompany: 'AG2R La Mondiale',
        message: "J'ai travaillé pendant deux ans avec Zinedine à l'Université de Lille. Zinedine est un très bon partenaire de travail avec une grande connaissance du développement backend et frontend, il est toujours désireux d'aller de l'avant sans jamais avoir peur d'utiliser de nouvelles technologies. Il n'hésite pas à aider ses collègues chaque fois qu'il le peut. Il parvient à résoudre les problèmes rapidement et efficacement avec un optimisme typique.",
    }
];


/***/ }),

/***/ "en7e":
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_referencesEn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/referencesEn */ "BzaH");
/* harmony import */ var _api_referencesFr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/referencesFr */ "eZ+O");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0) { return { active: a0 }; };
function ReferencesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reference_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, index_r2 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", reference_r1.personImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personFullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reference_r1.personCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", reference_r1.message, " ");
} }
class ReferencesComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_1__["referencesEn"];
        // this._translationLoaderService.loadTranslations(english, french);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.references = _api_referencesEn__WEBPACK_IMPORTED_MODULE_1__["referencesEn"];
            }
            else {
                this.references = _api_referencesFr__WEBPACK_IMPORTED_MODULE_2__["referencesFr"];
            }
        });
    }
    ngOnInit() {
    }
}
ReferencesComponent.ɵfac = function ReferencesComponent_Factory(t) { return new (t || ReferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ReferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferencesComponent, selectors: [["app-references"]], decls: 15, vars: 4, consts: [["id", "references"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "card", "shadow-lg", "rounded", "pb-3"], ["id", "carouselIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselIndicators", "data-slide-to", "0", 1, "not-active", "active"], ["data-target", "#carouselIndicators", "data-slide-to", "1", 1, "not-active"], ["data-target", "#carouselIndicators", "data-slide-to", "2", 1, "not-active"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "carousel-item", 3, "ngClass"], [1, "d-block", "w-100"], [1, "row"], [1, "col-lg-2", "ml-4", "mr-4", "col-sm-12"], [1, "mt-4"], ["alt", "slide", 1, "d-block", "w-100", "rounder", 3, "src"], [1, "mt-3"], [1, "mt-2"], [1, "text-uppercase"], [1, "card-body", "ml-4", "mr-3", "mt-4", "col-lg-9", "col-sm-12"]], template: function ReferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReferencesComponent_div_14_Template, 25, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "references.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.references);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["li.not-active[_ngcontent-%COMP%]{\n    background-color: rgb(95, 146, 161);\n}\n\nli.active[_ngcontent-%COMP%]{\n    background-color: rgb(6, 46, 58);\n}\n\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px;\n}\n\nh2[_ngcontent-%COMP%]{\n    color: rgb(22, 59, 90);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJyZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5ub3QtYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTQ2LCAxNjEpO1xufVxuXG5saS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDQ2LCA1OCk7XG59XG5cbnNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG5oMntcbiAgICBjb2xvcjogcmdiKDIyLCA1OSwgOTApO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-references',
                templateUrl: './references.component.html',
                styleUrls: ['./references.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class HeaderComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.language = "";
        // this._translationLoaderService.loadTranslations(english, french);
        if (localStorage.getItem("lang")) {
            this.language = localStorage.getItem("lang");
        }
        else {
            this.language = 'fr';
        }
    }
    languageChange($event) {
        let lang = $event.value;
        localStorage.setItem("lang", lang);
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);
    }
    ngOnInit() {
        // $('.js-scroll-trigger').on('click',
        //   function (): void {
        //     $('.navbar-collapse').toggle();
        //   }
        // );
        // $('.nav').on('click',
        //   function (): void {
        //     $('.navbar-collapse').toggle();
        //   }
        // );
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 3, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "home", "p-1", "rounded"], [1, "navbar-nav"], [1, "nav-item", "p-1", "rounded"], ["href", "#", 1, "nav-link", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-home"], [1, "navbar-toggler", "nav", "mb-1"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "width", "100%", "float", "right"], [1, "navbar-nav", 2, "float", "right"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, "header.home"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["i[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n    \n    background-color: transparent;\n}\n\nnav[_ngcontent-%COMP%]{\n    \n    background-color: transparent;\n}\n\ni[_ngcontent-%COMP%]{\n  font-size: 24px;\n  padding-right: 6px;\n  color: #000000;\n}\n\n\n\nmat-radio-button[_ngcontent-%COMP%]{\n  color:white;\n}\n\na[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  padding: 3px 4px;\n  margin-bottom: 2px;\n  transition: 0.3s;\n  font-size: 15px;\n}\n\nli[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\n  width:100%;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%]{\n  margin:0;\n  padding:0;\n  background:#29b6f6;\n}\n\n.bubbles[_ngcontent-%COMP%]{\n  position:absolute;\n  width:100%;\n  height: 100%;\n  z-index:0;\n  overflow:hidden;\n  top:0;\n  left:0;\n}\n\n.bubble[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom:-100px;\n  width:40px;\n  height: 40px;\n  background:#f1f1f1;\n  border-radius:50%;\n  opacity:0.5;\n  animation: rise 10s infinite ease-in;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(1){\n  width:40px;\n  height:40px;\n  left:10%;\n  animation-duration:8s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(2){\n  width:20px;\n  height:20px;\n  left:20%;\n  animation-duration:5s;\n  animation-delay:1s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(3){\n  width:50px;\n  height:50px;\n  left:35%;\n  animation-duration:7s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(4){\n  width:80px;\n  height:80px;\n  left:50%;\n  animation-duration:11s;\n  animation-delay:0s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(5){\n  width:35px;\n  height:35px;\n  left:55%;\n  animation-duration:6s;\n  animation-delay:1s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(6){\n  width:45px;\n  height:45px;\n  left:65%;\n  animation-duration:8s;\n  animation-delay:3s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(7){\n  width:90px;\n  height:90px;\n  left:70%;\n  animation-duration:12s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(8){\n  width:25px;\n  height:25px;\n  left:80%;\n  animation-duration:6s;\n  animation-delay:2s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(9){\n  width:15px;\n  height:15px;\n  left:70%;\n  animation-duration:5s;\n  animation-delay:1s;\n}\n\n.bubble[_ngcontent-%COMP%]:nth-child(10){\n  width:90px;\n  height:90px;\n  left:25%;\n  animation-duration:10s;\n  animation-delay:4s;\n}\n\n@keyframes rise{\n  0%{\n    bottom:-100px;\n    transform:translateX(0);\n  }\n  50%{\n    transform:translate(100px);\n  }\n  100%{\n    bottom:1080px;\n    transform:translateX(-200px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQ0ksdUNBQXVDO0lBQ3ZDLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiw2QkFBNkI7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7O0dBRUc7O0FBQ0g7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtFQUNmLEtBQUs7RUFDTCxNQUFNO0FBQ1I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGFBQWE7SUFDYiw0QkFBNEI7RUFDOUI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxpOmhvdmVyLC5ob21lOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU5LCA2MSk7XG59ICovXG5cbmk6aG92ZXIsYTpob3ZlciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA1MSwgNTMpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxubmF2e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbml7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLyogLm5hdi1ob21lOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDU5LCA2MSk7XG59ICovXG5tYXQtcmFkaW8tYnV0dG9ue1xuICBjb2xvcjp3aGl0ZTtcbn1cbmF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5saXtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbmJvZHksaHRtbHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYm9keXtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6MDtcbiAgYmFja2dyb3VuZDojMjliNmY2O1xufVxuLmJ1YmJsZXN7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6MDtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB0b3A6MDtcbiAgbGVmdDowO1xufVxuLmJ1YmJsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206LTEwMHB4O1xuICB3aWR0aDo0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6I2YxZjFmMTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIG9wYWNpdHk6MC41O1xuICBhbmltYXRpb246IHJpc2UgMTBzIGluZmluaXRlIGVhc2UtaW47XG59XG4uYnViYmxlOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6NDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGxlZnQ6MTAlO1xuICBhbmltYXRpb24tZHVyYXRpb246OHM7XG59XG4uYnViYmxlOm50aC1jaGlsZCgyKXtcbiAgd2lkdGg6MjBweDtcbiAgaGVpZ2h0OjIwcHg7XG4gIGxlZnQ6MjAlO1xuICBhbmltYXRpb24tZHVyYXRpb246NXM7XG4gIGFuaW1hdGlvbi1kZWxheToxcztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDMpe1xuICB3aWR0aDo1MHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGVmdDozNSU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjo3cztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoNCl7XG4gIHdpZHRoOjgwcHg7XG4gIGhlaWdodDo4MHB4O1xuICBsZWZ0OjUwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjExcztcbiAgYW5pbWF0aW9uLWRlbGF5OjBzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoNSl7XG4gIHdpZHRoOjM1cHg7XG4gIGhlaWdodDozNXB4O1xuICBsZWZ0OjU1JTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjZzO1xuICBhbmltYXRpb24tZGVsYXk6MXM7XG59XG4uYnViYmxlOm50aC1jaGlsZCg2KXtcbiAgd2lkdGg6NDVweDtcbiAgaGVpZ2h0OjQ1cHg7XG4gIGxlZnQ6NjUlO1xuICBhbmltYXRpb24tZHVyYXRpb246OHM7XG4gIGFuaW1hdGlvbi1kZWxheTozcztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDcpe1xuICB3aWR0aDo5MHB4O1xuICBoZWlnaHQ6OTBweDtcbiAgbGVmdDo3MCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxMnM7XG4gIGFuaW1hdGlvbi1kZWxheToycztcbn1cbi5idWJibGU6bnRoLWNoaWxkKDgpe1xuICB3aWR0aDoyNXB4O1xuICBoZWlnaHQ6MjVweDtcbiAgbGVmdDo4MCU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjo2cztcbiAgYW5pbWF0aW9uLWRlbGF5OjJzO1xufVxuLmJ1YmJsZTpudGgtY2hpbGQoOSl7XG4gIHdpZHRoOjE1cHg7XG4gIGhlaWdodDoxNXB4O1xuICBsZWZ0OjcwJTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjVzO1xuICBhbmltYXRpb24tZGVsYXk6MXM7XG59XG4uYnViYmxlOm50aC1jaGlsZCgxMCl7XG4gIHdpZHRoOjkwcHg7XG4gIGhlaWdodDo5MHB4O1xuICBsZWZ0OjI1JTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjEwcztcbiAgYW5pbWF0aW9uLWRlbGF5OjRzO1xufVxuQGtleWZyYW1lcyByaXNle1xuICAwJXtcbiAgICBib3R0b206LTEwMHB4O1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO1xuICB9XG4gIDUwJXtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDEwMHB4KTtcbiAgfVxuICAxMDAle1xuICAgIGJvdHRvbToxMDgwcHg7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMHB4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SkillsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technologie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technologie_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", technologie_r2.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", technologie_r2.remark);
} }
function SkillsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tool_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tool_r3.percent, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tool_r3.remark);
} }
class SkillsComponent {
    constructor(_translationLoaderService) {
        this._translationLoaderService = _translationLoaderService;
        this.skills = {
            technologies: [{ name: "HTML, css ,Javascript", percent: 90, remark: 'excellent' }, { name: "Typescript", percent: 90, remark: 'excellent' }, { name: "Angular", percent: 90, remark: 'excellent' }, { name: "React", percent: 70, remark: 'good' }, { name: "Node.js,Python ", percent: 80, remark: 'very-good' }],
            tools: [{ name: "Git", percent: 90, remark: 'excellent' }, { name: "GitLab,GitHub", percent: 90, remark: 'excellent' }, { name: "Linux, Apache", percent: 80, remark: 'very-good' }, { name: "PgSql", percent: 80, remark: 'very-good' }, { name: "Robot Framework", percent: 80, remark: 'very-good' }],
            methodologies: [{ name: "Scrum", percent: 70, remark: 'very-good' }, { name: "Uml", percent: 90, remark: 'excellent' }, { name: "Disign Thinking", percent: 70, remark: 'good' }, { name: "TDD", percent: 90, remark: 'excellent' }, { name: "DevOps", percent: 50, remark: 'average' }]
        };
        // this._translationLoaderService.loadTranslations(english, french);
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 19, vars: 2, consts: [["id", "skills", 1, "containerr"], [1, "container"], [2, "color", "black"], [1, "bar-title", "mb-5"], [1, "row", "mt-2"], ["data-aos", "fade-up ", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-6"], [1, "h5", 2, "color", "black"], ["id", "skillgraph"], ["class", "row skill-row", 4, "ngFor", "ngForOf"], ["data-aos", "fade-down", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-6"], ["id", "skillgraph", 1, "panel", "panel-default"], [1, "row", "skill-row"], [1, "label", "d-flex", "flex-row"], [1, "skillLabel"], [1, "skill-percent"], [1, "skillData-Wrapper"], [1, "skillData", "bg-rust", 3, "ngClass"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SkillsComponent_div_12_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SkillsComponent_div_18_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.technologies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills.tools);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bg-lightgray[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n    background-color: #ddd;\n}\n.skillData-Wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n}\n#skillgraph[_ngcontent-%COMP%] {\n  padding: 1em; \n}\n.skill-percent[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n}\n.skillLabel[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-top: 10px;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #050d18d7;\n\n}\n.competence-Wrapper[_ngcontent-%COMP%]{\n  line-height: 0.1 0.7em;\n  height: 12px;\n  width: .1em;\n  float: left;\n  color: white;\n  text-align: center;\n}\n.skillData-Wrapper[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\n  width: 100%; \n}\n.skillData[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n  line-height: 0.1 0.7em;\n  height: 12px;\n  float: left;\n  color: white;\n  text-align: center; \n}\n.excellent[_ngcontent-%COMP%]{\n  width: 90%;\n}\n.very-good[_ngcontent-%COMP%]{\n  width: 80%;\n}\n.good[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.average[_ngcontent-%COMP%]{\n  width: 50%;\n}\n.bg-rust[_ngcontent-%COMP%] {\n    background-color: #2c0e5c;\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.containerr[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #6d5f59;\n\tanimation: change-color-anim 20s linear infinite;\n}\n\n@keyframes change-color-anim {\n  0% {\n    background: linear-gradient(135deg, #ebb0b0 0%, #e1cd8d 100%);\n  }\n  25% {\n    background: linear-gradient(135deg, #b9d4fe 0%, #6b59ac 100%);\n  }\n  50% {\n    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);\n  }\n  75% {\n    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);\n  }\n  100% {\n    background: linear-gradient(135deg, #ebb0b0 0%, #e1cd8d 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixnREFBZ0Q7QUFDakQ7QUFFQTs7Ozs7Ozs7R0FRRztBQUVIO0VBQ0U7SUFDRSw2REFBNkQ7RUFDL0Q7RUFDQTtJQUNFLDZEQUE2RDtFQUMvRDtFQUNBO0lBQ0UsNkRBQTZEO0VBQy9EO0VBQ0E7SUFDRSw2REFBNkQ7RUFDL0Q7RUFDQTtJQUNFLDZEQUE2RDtFQUMvRDtBQUNGIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0Z3JheSwgLnNraWxsRGF0YS1XcmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnNraWxsRGF0YS1XcmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3NraWxsZ3JhcGgge1xuICBwYWRkaW5nOiAxZW07IFxufVxuXG4uc2tpbGwtcGVyY2VudHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2tpbGxMYWJlbHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwNTBkMThkNztcblxufVxuXG4uY29tcGV0ZW5jZS1XcmFwcGVye1xuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAuMWVtO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5za2lsbERhdGEtV3JhcHBlciwgLmxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG4uc2tpbGxEYXRhLCAuc2tpbGxEYXRhLVdyYXBwZXIge1xuICBsaW5lLWhlaWdodDogMC4xIDAuN2VtO1xuICBoZWlnaHQ6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG59XG5cbi5leGNlbGxlbnR7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi52ZXJ5LWdvb2R7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5nb29ke1xuICB3aWR0aDogNzAlO1xufVxuXG4uYXZlcmFnZXtcbiAgd2lkdGg6IDUwJTtcbn1cbiAgXG4uYmctcnVzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMGU1Yztcbn1cblxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi5jb250YWluZXJyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzZkNWY1OTtcblx0YW5pbWF0aW9uOiBjaGFuZ2UtY29sb3ItYW5pbSAyMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiBcbkBrZXlmcmFtZXMgY2hhbmdlLWNvbG9yLWFuaW0ge1xuXHQwJSwxMDAle1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkNDcxZDM7XG5cdH1cblx0NTAle1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1YTZjY2Y7XG5cdH1cbn0gKi9cblxuQGtleWZyYW1lcyBjaGFuZ2UtY29sb3ItYW5pbSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWJiMGIwIDAlLCAjZTFjZDhkIDEwMCUpO1xuICB9XG4gIDI1JSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2I5ZDRmZSAwJSwgIzZiNTlhYyAxMDAlKTtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjlhOWUgMCUsICNmYWQwYzQgMTAwJSk7XG4gIH1cbiAgNzUlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYTFjNGZkIDAlLCAjYzJlOWZiIDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlYmIwYjAgMCUsICNlMWNkOGQgMTAwJSk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_1__["TranslationLoaderService"] }]; }, null); })();


/***/ }),

/***/ "pBoa":
/*!***********************************!*\
  !*** ./src/app/api/projectsFr.ts ***!
  \***********************************/
/*! exports provided: projectsFr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsFr", function() { return projectsFr; });
const projectsFr = [
    {
        id: "teamTraveler",
        name: "Team Traveler",
        technologies: 'Android Studio, Java, FireBase, MVP, NoSql',
        images: [
            {
                title: '',
                src: "assets/images/voyages.webp",
            },
            {
                title: '',
                src: "assets/images/voyage.webp",
            },
            {
                title: '',
                src: "assets/images/logements.webp",
            },
        ],
        url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
        detail: "L'application vous permettra d'organiser des voyage en groupe facilement et rapidement. Votez pour les dates, les transports, hébergement ou même les activités. Grâce à cette <a title='Télécharger sur Google Play' href='https://play.google.com/store/apps/details?id=team.traveler.teamtraveler'>application</a> plus de problème de choix ou désaccords.",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/team_traveler',
        detailIsDisplayed: false,
    },
    {
        id: "mautic",
        name: "Mautic Monitoring",
        technologies: 'Android Studio, Java, Rx_Java, Retrofit, MVP, Rest',
        images: [
            {
                title: 'Compagnes de marketing',
                src: "assets/images/compagnes.jpg",
            },
            {
                title: 'Détail de la compagne',
                src: "assets/images/compagne-detail.jpg",
            },
            {
                title: "Performance d'un émail",
                src: "assets/images/email-detail.jpg",
            },
            {
                title: "Performance d'un Asset",
                src: "assets/images/asset-detail.jpg"
            },
        ],
        url: '#portfolio',
        detail: "<p>Mautic est un outil open source de marketing automatique</p> <p>L'application permet d'avoir des rapports dynamiques et détaillés, d’analyser les tendances individuels des campagnes.<br> Un tableau de bord visuellement convivial vous donne un point de vue rapide unique sur la performance de: vos campagnes numériques, assets, et formulaires. </p> <p>L'application est disponible en Français et en Anglais.</p>",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/mautic_monitoring',
        detailIsDisplayed: false,
    },
    {
        id: "pokedex",
        name: "Pokedex",
        technologies: 'Java, J2EE, SpringBoot, TDD, MySQL, BootStrap, Services, Deploiment',
        images: [
            {
                title: 'Pokedex',
                src: "assets/images/pokedex.png",
            },
            {
                title: 'Trainers',
                src: "assets/images/trainers.png",
            },
            {
                title: "Profile",
                src: "assets/images/profile-trainer.png",
            },
        ],
        url: '#portfolio',
        detail: "<p>Affichage du détail des pokémons et de leurs drésseurs.</p> <p>L'application contient deux micro-service: pokemon management et trainer management, qui exposent un canal de communication REST/JSON.<br>Le 3éme micro-service WEB-UI se connecte aux deux micro-service.</p>",
        codeSourceUrl: 'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
    {
        id: "portfolio",
        name: "Portfolio",
        technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title: 'Portfolio',
                src: "assets/images/portfolio.png",
            },
        ],
        url: 'https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640',
        detail: "<p>CV sous forme de site WEB responsive que j'ai mis en open-source sur GitHub accompagné d'une publication d'un <a title='Voir l'article' href='https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640' target='_blank'>article</a> sur medium. </p>",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/portfolio',
        detailIsDisplayed: false,
    },
    {
        id: "riddle",
        name: "Transfer Riddle",
        technologies: 'Java, J2EE(Web Services), JavaScript, Html5, CSS, BootStrap',
        images: [
            {
                title: 'riddle',
                src: "assets/images/riddle.png",
            },
        ],
        url: 'https://transfer-riddle-solver.herokuapp.com/index.html',
        detail: "Affichage des étapes de la résolution d'énigme de transvasement. Étant donné deux réservoirs vides de contenance X et Y, comment obtenir précisément T litres dans l’un des deux réservoirs (T étant un entier). On peut remplir ou vider un réservoir, et transvaser le contenu de l’un dans l’autre, jusqu’à ce que la source soit vide ou la destination pleine.",
        codeSourceUrl: 'https://github.com/zinedineBenkhider/transfer_riddle_client',
        detailIsDisplayed: false,
    },
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curriculum-vitae/curriculum-vitae.component */ "AY9o");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'cv', component: _curriculum_vitae_curriculum_vitae_component__WEBPACK_IMPORTED_MODULE_5__["CurriculumVitaeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot(),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vaew":
/*!*******************************************************!*\
  !*** ./src/app/service/translation-loader.service.ts ***!
  \*******************************************************/
/*! exports provided: TranslationLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationLoaderService", function() { return TranslationLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TranslationLoaderService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Load translations
     *
     * @param {Locale} args
     */
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }
}
TranslationLoaderService.ɵfac = function TranslationLoaderService_Factory(t) { return new (t || TranslationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationLoaderService, factory: TranslationLoaderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_projectsEn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/projectsEn */ "+YTG");
/* harmony import */ var _api_projectsFr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/projectsFr */ "pBoa");
/* harmony import */ var _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/translation-loader.service */ "vaew");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProjectsComponent_div_8_a_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function ProjectsComponent_div_8_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_div_8_a_5_i_1_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", image_r6.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", image_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r7 == 0);
} }
function ProjectsComponent_div_8_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", project_r1.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c0 = function (a0) { return { "backgroundImage": a0 }; };
function ProjectsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsComponent_div_8_a_5_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_div_8_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const project_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.detailOnClick(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectsComponent_div_8_span_21_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectsComponent_div_8_span_22_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectsComponent_div_8_div_25_Template, 1, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r1.id, "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, "url(" + project_r1.images[0].src + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", project_r1.id, "-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.codeSourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "projects.sourceCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !project_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.detailIsDisplayed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "projects.projectDetail"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.detailIsDisplayed);
} }
class ProjectsComponent {
    constructor(_translationLoaderService, _translateService) {
        this._translationLoaderService = _translationLoaderService;
        this._translateService = _translateService;
        this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_1__["projectsEn"];
        // this._translationLoaderService.loadTranslations(english, french);
        this._translateService.onLangChange.subscribe(() => {
            if (this._translateService.currentLang == "en") {
                this.projects = _api_projectsEn__WEBPACK_IMPORTED_MODULE_1__["projectsEn"];
            }
            else {
                this.projects = _api_projectsFr__WEBPACK_IMPORTED_MODULE_2__["projectsFr"];
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log("after view init");
        this.onMouse("portfolio-link", "portfolio-img");
        this.onMouse("teamTraveler-link", "teamTraveler-img");
        this.onMouse("mautic-link", "mautic-img");
        this.onMouse("pokedex-link", "pokedex-img");
        this.onMouse("riddle-link", "riddle-img");
        this.venobox = $('.venobox');
        this.venobox.venobox();
    }
    detailOnClick(project) {
        this.projects.filter(item => item.detailIsDisplayed && item.id != project.id).map(elem => elem.detailIsDisplayed = false);
        project.detailIsDisplayed = !project.detailIsDisplayed;
    }
    onMouse(idLink, idImage) {
        $('#' + idLink).on("mouseenter", function () {
            console.log('on mouseenter');
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
        $('#' + idImage).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 9, vars: 4, consts: [["id", "portfolio"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["class", "col-lg-4 col-sm-12 ", "data-aos", "flip-up", 4, "ngFor", "ngForOf"], ["data-aos", "flip-up", 1, "col-lg-4", "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "card-header", "d-flex", "flex-column", 2, "height", "300px", "width", "100%"], [1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "id", "ngStyle"], [1, "links", "mt-auto", "d-flex", "justify-content-center", 3, "id"], ["data-gall", "project.id", "class", "venobox vbox-item", 3, "href", "title", 4, "ngFor", "ngForOf"], ["title", "", "target", "_BLANK", 3, "href"], [1, "bx", "bx-link", "bx-md"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "flex-row", "justify-content-center"], ["target", "_blank", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3", 3, "href"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], ["class", "mt-3", 3, "innerHTML", 4, "ngIf"], ["data-gall", "project.id", 1, "venobox", "vbox-item", 3, "href", "title"], ["class", "bx bx-zoom-in bx-md", 4, "ngIf"], [1, "bx", "bx-zoom-in", "bx-md"], [1, "mt-3", 3, "innerHTML"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectsComponent_div_8_Template, 26, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "projects.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["h2[_ngcontent-%COMP%]{\n  color: rgb(22, 59, 90);\n}\n\nli.not-active[_ngcontent-%COMP%]{\n  background-color: rgb(95, 146, 161);\n}\n\nli.active[_ngcontent-%COMP%]{\n  background-color: rgb(6, 46, 58);\n}\n\n.img-wrap[_ngcontent-%COMP%] {\n  vertical-align: top;\n  transition: opacity 3s;\n  -webkit-transition: opacity 0.8s;\n  opacity: 1;\n  background: top center;\n  background-size: cover;\n  position: relative;\n}\n\n.links[_ngcontent-%COMP%]{\n  opacity: 0;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDJ7XG4gIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XG59XG5cbmxpLm5vdC1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTQ2LCAxNjEpO1xufVxuXG5saS5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xufVxuXG4uaW1nLXdyYXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGlua3N7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return [{ type: _service_translation_loader_service__WEBPACK_IMPORTED_MODULE_3__["TranslationLoaderService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map