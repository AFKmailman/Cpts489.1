(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),s=(a(15),a(16),a(17),a(18),a(19),a(20),a(1)),i=a(2),c=a(4),u=a(3),m=a(5),d={LOGIN:"LoginMode",MOVIE:"MovieMode",MOVIE_EDIT:"MovieMode-EditMovie",MOVIE_LOG:"MovieMode-LogMovie",MOVIE_INFO:"MovieInfoMode",MOVIER:"MovieRefresh"};Object.freeze(d);var p=d,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleMenuBtnClick=function(){a.props.mode===p.MOVIE_EDIT||a.props.mode===p.MOVIE_LOG?a.props.changeMode(p.MOVIE):a.props.mode!=p.LOGIN&&a.props.toggleMenuOpen()},a.getMenuBtnIcon=function(){return a.props.mode===p.MOVIE_LOG||a.props.mode===p.MOVIE_EDIT?"fa fa-arrow-left":a.props.menuOpen?"fa fa-times":"fa fa-bars"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"navbar",className:"navbar"},o.a.createElement("span",{className:"navbar-items"},o.a.createElement("button",{id:"sidemenu-btn",onClick:this.handleMenuBtnClick},o.a.createElement("span",{id:"sidemenu-btn-icon",className:"sidemenu-btn-icon "+this.getMenuBtnIcon()})),o.a.createElement("span",{id:"topBarTitle",className:"navbar-title"},"\xa0\xa0\xa0",this.props.title,"\xa0\xa0\xa0")))}}]),t}(o.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleLogin=function(){if(a.setState({loginBtnIcon:"fa fa-sign-in",loginBtnLabel:"Log In"}),a.props.setUserId(a.emailInputRef.current.value),null==localStorage.getItem(a.props.userId)){localStorage.setItem(a.props.userId,JSON.stringify({movieData:[]}))}a.props.changeMode(p.MOVIE)},a.handleLoginSubmit=function(e){e.preventDefault(),a.setState({loginBtnIcon:"fa fa-spin fa-spinner",loginBtnLabel:"Logging In..."}),setTimeout(a.handleLogin,1e3)},a.emailInputRef=o.a.createRef(),a.passwordInputRef=o.a.createRef(),a.state={loginBtnIcon:"fa fa-sign-in",loginBtnLabel:"Log In",accountName:"",accountPassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.emailInputRef.current.focus()}},{key:"render",value:function(){return o.a.createElement("div",{id:"login-mode-div",className:"padded-page"},o.a.createElement("center",null,o.a.createElement("h1",null),o.a.createElement("form",{onSubmit:this.handleLoginSubmit,onChange:this.handleLoginChange},o.a.createElement("label",{htmlFor:"emailInput",style:{padding:0,fontSize:24}},"Email:",o.a.createElement("input",{ref:this.emailInputRef,className:"form-control login-text",type:"email",placeholder:"Enter Email Address",id:"emailInput",pattern:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}",required:!0})),o.a.createElement("p",null),o.a.createElement("label",{htmlFor:"passwordInput",style:{padding:0,fontSize:24}},"Password:",o.a.createElement("input",{ref:this.passwordInputRef,className:"form-control login-text",type:"password",placeholder:"Enter Password",pattern:"([A-Za-z0-9!@#$%^*]){4,}",required:!0})),o.a.createElement("p",{className:"bg-danger",id:"feedback",style:{fontSize:16}}),o.a.createElement("button",{type:"submit",className:"btn-color-theme btn btn-primary btn-block login-btn"},o.a.createElement("span",{className:this.state.loginBtnIcon}),"\xa0",this.state.loginBtnLabel),o.a.createElement("br",null))))}}]),t}(o.a.Component),b=a(6),g=a.n(b),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a",{className:"floatbtn",onClick:this.props.menuOpen?null:this.props.handleClick},o.a.createElement("span",{className:"floatbtn-icon "+this.props.icon})))}}]),t}(o.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"btn-danger",onClick:this.props.handleClick},"Delete"))}}]),t}(o.a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{className:"editbtn",onClick:this.props.handleClick},"Edit"))}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setRows=function(e){a.setState({rows:e})},a.state={rows:JSON.parse(localStorage.getItem(a.props.userId))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.userId);var e=localStorage.getItem(this.props.userId);if(null==e||0==e.length){this.setState({rows:{movieData:[{title:"no",productionCompany:"Information",length:"To",genre:"Display,",budget:"Sorry",releaseDate:":("}]}}),g()("#movieDataTable")[0].tBodies[0].innerHTML="<tr><td>No</td><td>Info</td><td>To</td><td>Be</td><td>Displayed</td><td>:(</td></tr>"}}},{key:"testFunction",value:function(e){console.log("t:"+e)}},{key:"deleteItem",value:function(e){var t=JSON.parse(localStorage.getItem(this.props.userId));t.movieData.splice(e,1),localStorage.setItem(this.props.userId,JSON.stringify(t)),this.props.changeMode(p.MOVIER),this.forceUpdate()}},{key:"goToEdit",value:function(e){localStorage.setItem(this.props.userId+"_index",e),this.props.changeMode(p.MOVIE_EDIT)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"padded"},o.a.createElement("h1",null,"Movie Data Table"),o.a.createElement("div",{className:"tableDiv"},o.a.createElement("h3",null,"could not get it to print no data to show. should be fine"),o.a.createElement("table",{id:"movieDataTable",className:"movieDataTableClass"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Title"),o.a.createElement("td",null,"Production Company"),o.a.createElement("td",null,"Length"),o.a.createElement("td",null,"Genre"),o.a.createElement("td",null,"Budget"),o.a.createElement("td",null,"Release Date"),o.a.createElement("td",null,"View/Edit"),o.a.createElement("td",null,"Delete"))),o.a.createElement("tbody",null,this.state.rows.movieData.map((function(t,a){return o.a.createElement("tr",null,o.a.createElement("td",null,t.title),o.a.createElement("td",null,t.productionCompany),o.a.createElement("td",null,t.length),o.a.createElement("td",null,t.genre),o.a.createElement("td",null,t.releaseDate),o.a.createElement("td",null,o.a.createElement(I,{handleClick:function(){return e.goToEdit(a)},data:e.state.rows,iIndex:a})),o.a.createElement("td",null,o.a.createElement(O,{handleClick:function(){return e.deleteItem(a)},iIndex:a})))})))))),o.a.createElement(E,{handleClick:function(){return e.props.changeMode(p.MOVIE_LOG)},menuOpen:this.props.menuOpen,icon:"fa fa-plus",userId:this.props.userId}))}}]),t}(o.a.Component),M=a(9),C=function(e){function t(e){var a;if(Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).saveData=function(e){console.log(e),console.log(a.props.userId);var t=JSON.parse(localStorage.getItem(a.props.userId));if(a.props.mode===p.MOVIE_EDIT){var n=localStorage.getItem(a.props.userId+"_index");t.movieData.splice(n,1)}if(console.log(t),null==t){var o={movieData:[]};o.movieData.push(e),localStorage.setItem(a.props.userId,JSON.stringify(o))}else t.movieData.push(e),localStorage.setItem(a.props.userId,JSON.stringify(t));a.props.changeMode(p.MOVIE)},a.handleChange=function(e){var t=e.target.name;a.setState(Object(M.a)({},t,e.target.value))},a.handleSubmit=function(e){a.setState({faIcon:"fa fa-spin fa-spinner",btnLabel:a.props.mode===p.MOVIE_LOG?"Saving...":"Updating..."});var t=a.state;delete t.faIcon,delete t.btnLabel,setTimeout(a.saveData,1e3,t),e.preventDefault()},a.props.mode===p.MOVIE_LOG)a.state={title:"",productionCompany:"",length:0,genre:"",budget:0,releaseDate:"",faIcon:"fa fa-save",btnLabel:"Save Info"};else{console.log(a.props);var n=localStorage.getItem(a.props.userId+"_index"),o=JSON.parse(localStorage.getItem(a.props.userId));a.state={title:o.movieData[n].title,productionCompany:o.movieData[n].productionCompany,length:o.movieData[n].length,genre:o.movieData[n].genre,budget:o.movieData[n].budget,releaseDate:o.movieData[n].releaseDate,faIcon:"fa fa-edit",btnLabel:"Update Info"}}return a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"padded"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("center",null,o.a.createElement("label",null,"Title:",o.a.createElement("input",{name:"title",className:"form-control form-center",type:"text",value:this.state.title,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Production Company:",o.a.createElement("input",{name:"productionCompany",className:"form-control form-center",type:"text",value:this.state.productionCompany,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Length:",o.a.createElement("input",{name:"length",className:"form-control form-center",type:"number",value:this.state.length,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Genre:",o.a.createElement("input",{name:"genre",className:"form-control form-center",type:"text",value:this.state.genre,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Budget:",o.a.createElement("input",{name:"budget",className:"form-control form-center",type:"number",value:this.state.budget,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("label",null,"Release Date:",o.a.createElement("input",{name:"releaseDate",className:"form-control form-center",type:"text",value:this.state.releaseDate,onChange:this.handleChange})),o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-color-theme"},o.a.createElement("span",{className:this.state.faIcon},"\xa0",this.state.btnLabel)))))}}]),t}(o.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"padded"},o.a.createElement("h3",null,"Under Construction"))}}]),t}(o.a.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).renderModeMenuItems=function(){return a.props.mode===p.MOVIE?o.a.createElement("div",null,o.a.createElement("a",{className:"sideMenuItem",onClick:function(){a.props.changeMode(p.MOVIE_LOG)}},o.a.createElement("span",{className:"fa fa-plus"}),"\xa0Add Movie")):null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"sidemenu "+(this.props.menuOpen?"sidemenu-open":"sidemenu-closed")},o.a.createElement("div",{className:"sidemenu-title"},o.a.createElement("img",{src:"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/7/2/3/4/634327-1-eng-GB/Middle-Eastern-wars-hit-Moldovan-lamb-export-sales_wrbm_large.jpg",height:"40px",width:"40px"}),o.a.createElement("span",{id:"userID",className:"userIdText"},this.props.userId)),this.renderModeMenuItems(),o.a.createElement("a",{id:"about",className:"aboutMenuItem menuItem",onClick:this.props.showAbout},o.a.createElement("span",{className:"fa fa-angle-right"},"\xa0About\xa0")),o.a.createElement("a",{id:"logout",className:"logoutMenuItem menuItem",onClick:function(){e.props.changeMode(p.LOGIN)}},o.a.createElement("span",{className:"fa fa-angle-right"},"\xa0Logout\xa0")))}}]),t}(o.a.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleModeBtnClick=function(e){a.props.mode!=e&&a.props.changeMode(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"modebar"+(this.props.mode===p.LOGIN?" invisible":" visible")},o.a.createElement("a",{className:"modebar-btn"+(this.props.mode===p.MOVIE?" modebar-item-selected":""),onClick:this.props.menuOpen?null:function(){return e.handleModeBtnClick(p.MOVIE)}},o.a.createElement("span",{className:"modebar-icon nonMenuItem fa fa-th-list"}),o.a.createElement("span",{className:"modebar-text"},"Movie")),o.a.createElement("a",{className:"modebar-btn"+(this.props.mode===p.MOVIE_INFO?" modebar-item-selected":""),onClick:this.props.menuOpen?null:function(){return e.handleModeBtnClick(p.MOVIE_INFO)}},o.a.createElement("span",{className:"modebar-icon nonMenuItem fa fa-th-list"}),o.a.createElement("span",{className:"modebar-text"},"Movie Info")))}}]),t}(o.a.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.changeMode(p.MOVIE)}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(o.a.Component),D={};D[p.LOGIN]="Welcome",D[p.MOVIE]="Movie Table",D[p.MOVIE_EDIT]="Edit Movie",D[p.MOVIE_LOG]="Add Movie",D[p.MOVIE_INFO]="Addition Info",D[p.MOVIER]="REFRESHING";var S={};S[p.LOGIN]=f,S[p.MOVIE]=v,S[p.MOVIE_EDIT]=C,S[p.MOVIE_LOG]=C,S[p.MOVIE_INFO]=N,S[p.MOVIER]=k;var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeMode=function(e){a.setState({mode:e})},a.openMenu=function(){a.setState({menuOpen:!0})},a.closeMenu=function(){a.setState({menuOpen:!1})},a.toggleMenuOpen=function(){a.setState((function(e){return{menuOpen:!e.menuOpen}}))},a.setUserId=function(e){a.setState({userId:e})},a.handleClick=function(e){a.state.menuOpen&&a.closeMenu(),e.stopPropagation()},a.toggleAbout=function(){a.setState((function(e){return{showAbout:!e.showAbout}}))},a.renderAbout=function(){return o.a.createElement("div",{id:"aboutModal",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("header",null,o.a.createElement("h2",null,"About")),o.a.createElement("br",null),o.a.createElement("p",null,"This application is used for storing movie data."),o.a.createElement("span",{id:"modal-close-id",className:"modal-close",onClick:a.toggleAbout},"OK")))},a.state={mode:p.LOGIN,menuOpen:!1,userId:"",showAbout:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var e=S[this.state.mode];return o.a.createElement("div",{onClick:this.handleClick},o.a.createElement(h,{title:D[this.state.mode],mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen,toggleMenuOpen:this.toggleMenuOpen}),o.a.createElement(y,{mode:this.state.mode,menuOpen:this.state.menuOpen,changeMode:this.handleChangeMode,userId:this.state.userId,showAbout:this.toggleAbout}),o.a.createElement(j,{mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen}),o.a.createElement(e,{menuOpen:this.state.menuOpen,mode:this.state.mode,changeMode:this.handleChangeMode,userId:this.state.userId,setUserId:this.setUserId}),this.state.showAbout?this.renderAbout():null)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e809c6bf.chunk.js.map