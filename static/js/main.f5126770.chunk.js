(this["webpackJsonpaudio-s2"]=this["webpackJsonpaudio-s2"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(4),i=n.n(c),s=n(1),r=n(2),a=n.p+"static/media/20210806_102244_222_radiohistory_ep0544.c5856041.mp3",l=n.p+"static/media/20210430_113621_533_radiohistory_ep0518.ca72e8b5.mp3",o=n.p+"static/media/20210424_105237_279_radiohistory_ep0517.b513b552.mp3",d=n.p+"static/media/20210424_105226_180_radiohistory_ep0516.8d1306e4.mp3",u=n.p+"static/media/radireki_thumbnail.264ebb1a.jpeg",j=n(0),p=[{src:a,date:"2021.08.10",title:"0544_\u30a4\u30b9\u30e9\u30e0\u6559\u306e\u516d\u4fe1\u4e94\u884c\u304b\u3089\u8003\u3048\u308b\u65e5\u672c\u4eba\u306b\u3068\u3063\u3066\u306e\u300c\u8056\u5178\u300d\u3068\u300c\u884c\u52d5\u898f\u7bc4\u300d",thumbnail:u,epiNum:"epi544",duration:1247},{src:l,date:"2021.05.11",title:"0518_\u4e2d\u56fd\u306e\u7b2c2\u4e09\u56fd\u5fd7\u3002\u667a\u52c7\u517c\u5099\u30fb\u97f3\u5bb9\u517c\u7f8e\u306e\u30a4\u30b1\u30e1\u30f3\u7687\u65cf\u862d\u9675\u738b\u306f\u4e0d\u6557\u306e\u540d\u5c06",thumbnail:u,epiNum:"epi518",duration:911},{src:o,date:"2021.05.07",title:"0517_\u300c\u591a\u6570\u6c7a\u304c\u6c11\u4e3b\u4e3b\u7fa9\u3067\u306f\u306a\u3044\u300d\u3068\u8aac\u3044\u305f\u30eb\u30bd\u30fc\u306e\u793e\u4f1a\u5951\u7d04\u8ad6",thumbnail:u,epiNum:"epi517",duration:952},{src:d,date:"2021.05.04",title:"0516_\u300c\u898b\u3048\u3056\u308b\u624b\u300d\u306b\u96a0\u3055\u308c\u305f\u30a2\u30c0\u30e0\u30fb\u30b9\u30df\u30b9\u306e\u7d4c\u6e08\u3078\u306e\u30a2\u30c4\u3044\u601d\u3044",thumbnail:u,epiNum:"epi516",duration:1115}],b=function(){var e=Object(s.useRef)(null),t=Object(s.useState)(0),n=Object(r.a)(t,2),c=n[0],i=n[1],a=p[c],l=a.title,o=a.date,d=a.duration,u=a.thumbnail,b=a.epiNum,m=p[c].src,h=Object(s.useRef)(new Audio(m)),O=h.current.currentTime,g=Math.floor(O/p[c].duration*100);console.log(g);var x=Object(s.useState)(!1),f=Object(r.a)(x,2),_=f[0],v=f[1];console.log("isPlay "+_);var N=Object(s.useState)(0),k=Object(r.a)(N,2),y=k[0],w=k[1],S=[1,1.3,1.5,2,.5,.7],C=Object(s.useState)(0),T=Object(r.a)(C,2),I=T[0],R=T[1],E=Object(s.useState)(1),M=Object(r.a)(E,2),B=M[0],A=M[1],F=function(e){return Math.floor(e/60/60).toString().padStart(2,"0")+":"+Math.floor(e/60%60).toString().padStart(2,"0")+":"+Math.floor(e%60).toString().padStart(2,"0")};Object(s.useEffect)((function(){h.current=new Audio(m)}),[m]),Object(s.useEffect)((function(){if(_)h.current.play(),null===e.current&&(e.current=setInterval((function(){h.current.ended?(console.log("nextTrack\u5b9f\u884c"),D()):(w(h.current.currentTime),console.log(_),console.log(h.current.currentTime),console.log("\u518d\u751f\u30c8\u30e9\u30c3\u30af"+c))}),[1e3]));else{if(h.current.pause(),null===e.current)return;clearInterval(e.current),e.current=null}}),[_]);var J,X,P=Object(s.useRef)(null),q=function(){v(!_),console.log(_)},z=function(t){if(_){if(v(!1),h.current.pause(),null===e.current)return;clearInterval(e.current),e.current=null,i(t.currentTarget.id),q()}else i(t.currentTarget.id)},D=function(){_&&(v(!1),console.log(_),c<p.length-1?(console.log("\u518d\u751f\u30c8\u30e9\u30c3\u30af"+c),i(c+1)):(i(0),console.log("\u6700\u521d\u306e\u30c8\u30e9\u30c3\u30af\u306b\u623b\u308b")),v(!0),console.log("\u6b21\u306e\u30c8\u30e9\u30c3\u30af"+c),console.log(_))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"app",className:"app",children:[Object(j.jsxs)("div",{id:"audio_thumb",onClick:q,children:[Object(j.jsx)("img",{className:"ep_img",src:u,width:"160",height:"160",alt:b}),_?Object(j.jsx)("i",{id:"pause_ico",className:"material-icons",children:"pause_circle_outline"}):Object(j.jsx)("i",{id:"play_ico",className:"material-icons",children:"play_circle_outline"})]}),Object(j.jsxs)("div",{id:"audio_desc",children:[Object(j.jsx)("div",{className:"ep-date",children:o}),Object(j.jsxs)("div",{className:"ep-title",children:[l,Object(j.jsx)("span",{className:"sp-nodisp"})]}),Object(j.jsx)("div",{id:"timebar",children:Object(j.jsx)("div",{id:"timebar-bg",onClick:function(e){J=e.target.getBoundingClientRect().width,X=e.nativeEvent.offsetX,console.log(e.target.getBoundingClientRect().width),console.log(e.nativeEvent.offsetX),h.current.currentTime=X/J*p[c].duration},ref:P,children:Object(j.jsx)("div",{id:"timebar-past",style:{width:g+"%"},children:Object(j.jsx)("div",{id:"timebar-num",children:g+"%"})})})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{id:"time_disp",children:[F(y),"/",F(d)]}),Object(j.jsxs)("p",{className:"time_control_area",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{id:"playback",src:"https://propo.fm/image/rewind.png",width:"23",alt:"rewind",onClick:function(){console.log("playback"),h.current.currentTime-=15}})}),Object(j.jsx)("span",{children:Object(j.jsx)("img",{id:"skip",src:"https://propo.fm/image/skip.png",width:"23",alt:"skip",onClick:function(){console.log("playskip"),h.current.currentTime+=30}})}),Object(j.jsxs)("span",{id:"speed_ctrl",onClick:function(){I===S.length-1?(R(0),A(B+1)):(R(I+1),B===S.length-1?A(0):A(B+1)),h.current.playbackRate=S[B],console.log(I),console.log(B+"next")},children:[S[I].toFixed(1),"x"]})]})]})]})]}),Object(j.jsx)("ul",{className:"allContents-list",children:p.map((function(e,t){return Object(j.jsxs)("li",{className:"contentItem episodeContent",onClick:z,id:t,children:[Object(j.jsxs)("div",{className:"content-inner1",children:[Object(j.jsx)("div",{className:"content-text",children:Object(j.jsx)("div",{className:"content-ttl-wrap",children:Object(j.jsx)("h2",{className:"content-ttl",children:e.title})})}),Object(j.jsxs)("div",{className:"content-linkItem",children:[Object(j.jsx)("span",{className:"material-icons ico-listen",children:"play_circle_outline"}),Object(j.jsx)("span",{className:"play-text listen",children:"\u8074\u304f"})]})]}),Object(j.jsxs)("div",{className:"content-inner2 content-info",children:[Object(j.jsx)("span",{className:"date",children:e.date}),Object(j.jsx)("span",{children:" / "}),Object(j.jsx)("span",{className:"time",children:F(e.duration)})]})]},e.epiNum)}))})]})},m=(n(10),function(){return Object(j.jsx)(b,{})});i.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f5126770.chunk.js.map