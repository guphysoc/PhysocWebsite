(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(239)},169:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(60),i=a.n(s),l=(a(169),a(3)),o=a(4),c=a(6),m=a(5),u=a(7),h=a(28),p=a.n(h),d=a(14),g=a.n(d),y=(a(9),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",background:"transparent",boxShadow:"none",position:"fixed",margin:"0px 0px"},color:"#00ff00"},r.a.createElement(p.a,{className:"Nav-bar",style:{margin:"0"}},r.a.createElement(g.a,{variant:"h6",style:{color:"#bf616a"}},r.a.createElement("a",{href:"#TopPage",className:"Nav-button",style:{color:"#bf616a"}},"Physoc")),r.a.createElement("div",{style:{flexGrow:"1"}}),r.a.createElement(g.a,{variant:"h6",className:"NotDisplayOnSmallScreens"},r.a.createElement("a",{href:"#AboutUs",className:"Nav-button"},"About")),r.a.createElement(g.a,{variant:"h6",className:"NotDisplayOnSmallScreens"},r.a.createElement("a",{href:"#UpcomingEvents",className:"Nav-button"},"Events")),r.a.createElement(g.a,{variant:"h6",className:"NotDisplayOnSmallScreens"},r.a.createElement("a",{href:"#ContactUs",className:"Nav-button"},"Contact Us")),r.a.createElement(g.a,{variant:"h6",className:"NotDisplayOnSmallScreens"},r.a.createElement("a",{href:"#Sponsors",className:"Nav-button"},"Sponsors")),r.a.createElement(g.a,{variant:"h6"},r.a.createElement("a",{href:"http://www.iop.org/",style:{color:"#bf616a"},className:"Nav-button"},"IOP")),r.a.createElement(g.a,{variant:"h6"},r.a.createElement("a",{href:"https://www.facebook.com/guphysoc/",style:{color:"#6169bf"},className:"Nav-button"},"Facebook"))))}}]),t}(n.Component)),b=a(12),v=a(1),f=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={quarkColors:["BlueQuark3","GreenQuark3","RedQuark3"],quarkElements:[]};for(var n=0;n<12;n++)a.state.quarkElements.push(r.a.createElement("img",{className:"Quark",src:"images/"+a.state.quarkColors[Math.round(2*Math.random())]+".svg",alt:"",style:{width:"calc(5% + ".concat(3*Math.random(),"%)"),top:"calc(10% + ".concat(80*Math.random(),"%)"),left:"calc(10% + ".concat(80*Math.random(),"%)"),animationDelay:"calc(-".concat(120*Math.random(),"s)")}}));return a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header",id:"TopPage"},this.state.quarkElements,r.a.createElement("img",{src:"images/RedQuark3.svg",alt:"Physoc Logo",width:"20%",style:{position:"relative",zIndex:"2",marginTop:"80px"}}),r.a.createElement("img",{src:"images/NEONPhysics3.svg",alt:"Physoc",style:{marginBottom:"1%",width:"50%",zIndex:"2"}}),r.a.createElement("img",{src:"images/NEONTGUPS2.svg",alt:"The Glasgow University Physics Society",className:"neon",style:{marginBottom:"0px",width:"80%",zIndex:"2"}}))}}]),t}(n.Component),E=a(15),O=a.n(E),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"0 auto",alignItems:"center",justifyContent:"center",textAlign:"center",zIndex:"10",position:"relative"}},r.a.createElement("div",{className:"DisplayBlockOnSmallScreens",style:{float:"left",marginRight:"0em",width:"4em",height:"4em",borderRadius:"0.5em",verticalAlign:"center",padding:"0.2em"}},r.a.createElement("img",{src:this.props.img,width:this.props.imgWidth,alt:this.props.alt?this.props.alt:"",style:{}})),r.a.createElement("div",{style:{textAlign:"left",overflow:"auto"}},r.a.createElement(v.a,{variant:"h6"},this.props.title),r.a.createElement(v.a,{variant:"body"},this.props.body)))}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-content",id:"AboutUs"},r.a.createElement(v.a,{variant:"h4",style:{zIndex:"2"}}," About us "),r.a.createElement(v.a,{variant:"h5",color:"text",className:"AboutUsSmallScreen",style:{padding:"20px 18%",zIndex:"2",textAlign:"justify"}},"Hello there! We're Physoc, the Glasgow University physics society.  We have a library (Kelvin Bulding, room 332) which, though not as big as the university's library, still has a fair number of good books.  We also have a common room where we sometimes hold events."),r.a.createElement(v.a,{variant:"h6",style:{margin:"0.2em"}}," Our Events "),r.a.createElement("div",{style:{margin:"1em 10em",width:"60%",alignItems:"center",justifyContent:"center",textAlign:"center"},className:"AboutUsSmallScreen"},r.a.createElement(O.a,{container:!0,spacing:"24"},r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w,{img:"images/EventLecture.svg",title:"Guest Lectures",body:"We often hold guest lectures on a wide varity of topics, from dark matter to sports science",imgWidth:"30px"})),r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w,{img:"images/EventBeer.svg",title:"Pub Crawls",body:"We regularly hold pub crawls where you can meet up and socialise with like minded people",imgWidth:"30px"})),r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w,{img:"images/EventMicrophone.svg",title:"Radio Speaker",body:"We have podcasts given by various lecturers both from within and without the university",imgWidth:"30px"})),r.a.createElement(O.a,{item:!0,xs:12,sm:6},r.a.createElement(w,{img:"images/EventSolarSystem2.svg",title:"Team up with other societies",body:"We team up with astrosoc and other societies for quiz nights, pub crawls and a variety of other events",imgWidth:"50px"})))))}}]),t}(n.Component),S=a(29),j=a.n(S),N=(n.Component,function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-content",style:{backgroundColor:"#2e3440"},id:"UpcomingEvents"},r.a.createElement(v.a,{variant:"h4",style:{margin:"0.2em"}}," Upcoming Events "),r.a.createElement(v.a,{variant:"h5",style:{padding:"3px 10px"},className:"AboutUsSmallScreen"},"We currently have no upcoming events (but it's best to check facebook, just in case)"))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={members:[["President","Lewis Grimmer"],["Secretary","Richard Menzies (also webmaster)"],["Treasurer","Yara Bakour"],["Social Events Convenor","Frances Berslin"],["Physics Events Convenor","x"],["Publicity Officer","x"],["Librarian","Christine Mayer"],["Second Year Rep","Lucy Joyce"],["OCM","Conor Lyons | Agrim Jain | x"]]},a.state.htmlMembers=a.state.members.map(function(e){return r.a.createElement("div",{className:"CommitteePaddingHeadingSmallScreen CommitteeAlignCentreSmallScreen",style:{padding:"10px 0px",margin:0,textAlign:"left"}},r.a.createElement("i",{className:"CommitteeListTitle"},e[0]),r.a.createElement("p",{className:"DisplayBlockOnSmallScreens CommitteePaddingPersonSmallScreen CommitteeAlignCentreSmallScreen",style:{display:"inline",textAlign:"right"}},e[1]," "))}),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-content",style:{position:"relative"},id:"OurCommittee"},r.a.createElement(v.a,{variant:"h4",style:{margin:"0.2em"}}," Our Committee "),r.a.createElement(v.a,{variant:"h5",className:"CommitteeAlignCentreSmallScreen CommitteeList"},this.state.htmlMembers),r.a.createElement("img",{src:"images/Telescope.svg",alt:"",style:{position:"absolute",alignItems:"left",float:"left",right:"7em",top:"10%",width:"120px",zIndex:"-1"}}),r.a.createElement("img",{src:"images/OldLogoGreen.svg",alt:"",style:{position:"absolute",alignItems:"left",float:"left",left:"4%",bottom:"10%",width:"200px",zIndex:"-1"}}))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-content",style:{backgroundColor:"#2e3440"},id:"Sponsors"},r.a.createElement(v.a,{variant:"h4",style:{zIndex:"2",marginBottom:"1em"}}," Sponsors "),r.a.createElement("div",{style:{margin:"1em 10em",width:"65%",alignItems:"center",justifyContent:"center",textAlign:"center"},className:"AboutUsSmallScreen"},r.a.createElement(v.a,{variant:"h6",style:{margin:"0 0%"},className:"SponsorUsSmallScreen"},"We're currently looking for sponsors!  Feel free to use the above email if you're interested.")))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-content",style:{},id:"ContactUs"},r.a.createElement(v.a,{variant:"h4",style:{margin:"0.2em"}}," Contact Us "),r.a.createElement(v.a,{variant:"h5",style:{padding:"15px 10px",color:"#bf616a"},className:"AboutUsSmallScreen"},"guphysoc@gmail.com \xa0",r.a.createElement("p",{style:{display:"inline",fontWeight:"bold",color:"#ecefe4"}},"|")," \xa0",r.a.createElement("a",{href:"https://www.facebook.com/guphysoc/",style:{color:"#6169bf"}},"Facebook")),r.a.createElement(v.a,{variant:"h6",style:{padding:"15px 10px",margin:"0 20%"},className:"AboutUsSmallScreen"},"We're also in the kelvin building student library (room 332) between 12:00 - 14:00 every weekday during term time, so you can come find us there as well (currently the opperation of the student library has been suspended due the pandemic)."))}}]),t}(n.Component),I=(n.Component,Object(b.createMuiTheme)({palette:{primary:{main:"#000000",contrastText:"#ecefe4"},secondary:{main:"#0000ff"},text:"#ecefe4"}})),P=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(b.MuiThemeProvider,{theme:I},r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(f,null),r.a.createElement(x,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement("img",{src:"images/SolarSystem.svg",alt:"",style:{position:"absolute",alignItems:"left",float:"left",left:"-330px",top:"140%",width:"600px",zIndex:"0"}}),r.a.createElement("img",{src:"images/Tardis.svg",alt:"",style:{position:"absolute",alignItems:"left",float:"left",right:"7em",top:"110%",width:"100px",zIndex:"0"}})),r.a.createElement("div",{style:{width:"100%",backgroundColor:"#3b4252",textAlign:"center",paddingTop:"0.7em",paddingBottom:"0.7em"}},r.a.createElement(v.a,{variant:"body",style:{margin:"auto auto",color:"#ecefe4",fontStyle:"italic"}},"You've reached the end, or, as any good physicist knows, you've only just found the beginning."),r.a.createElement("img",{src:"images/SponsorsIOP.svg",alt:"",width:"200em",style:{marginTop:"2em",paddingTop:"0em"}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.0844f50e.chunk.js.map