(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/pokemon/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("3ebb")},"10f3":function(t,e,i){t.exports=i.p+"img/pokemon-logo.de8a0f82.png"},"224a":function(t,e,i){t.exports=i.p+"img/pokemon-ball.1a5366f2.svg"},"25fb":function(t,e,i){t.exports=i.p+"fonts/AtariClassicChunky-PxXP.ddb5e164.ttf"},"3ebb":function(t,e,i){var n=i("e31a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("499e").default;o("61bc0355",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("PokemonList")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"sideBtn"},[this.$store.state.isPlay?n("button",{on:{click:function(e){return t.closeAudio("close")}}},[t._v(" SOUND"),n("br"),t._v(" OFF")]):n("button",{on:{click:function(e){return t.closeAudio("open")}}},[t._v("SOUND"),n("br"),t._v("ON")])]),n("div",{staticClass:"input"},[n("img",{staticClass:"logo",attrs:{src:i("10f3"),alt:"pokemon-logo"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?i:i[0]}}},[n("option",{attrs:{value:"all"}},[t._v("all")]),n("option",{attrs:{value:"fire"}},[t._v("fire")]),n("option",{attrs:{value:"grass"}},[t._v("grass")]),n("option",{attrs:{value:"electric"}},[t._v("electric")]),n("option",{attrs:{value:"water"}},[t._v("water")]),n("option",{attrs:{value:"ground"}},[t._v("ground")]),n("option",{attrs:{value:"rock"}},[t._v("rock")]),n("option",{attrs:{value:"fairy"}},[t._v("fairy")]),n("option",{attrs:{value:"poison"}},[t._v("poison")]),n("option",{attrs:{value:"bug"}},[t._v("bug")]),n("option",{attrs:{value:"dragon"}},[t._v("dragon")]),n("option",{attrs:{value:"psychic"}},[t._v("psychic")]),n("option",{attrs:{value:"flying"}},[t._v("flying")]),n("option",{attrs:{value:"fighting"}},[t._v("fighting")]),n("option",{attrs:{value:"normal"}},[t._v("normal")])]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputHandle.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"grid"},t._l(t.titleMenu,(function(e,i){return n("PokeCard",{key:i,attrs:{pokeitem:e},on:{modalData:t.getModalData,modalColor:t.getModalColor}})})),1)]),n("div",{staticClass:"modal-bg"},[n("div",{staticClass:"modal"},[n("button",{staticClass:"close-btn",on:{click:function(e){return t.closeModal()}}},[t._v("X")]),n("audio",{attrs:{id:"click",src:i("c94c")}}),n("h1",[t._v(t._s(t.modal.name[0].toUpperCase()+t.modal.name.slice(1)))]),n("div",{staticClass:"img-container"},[n("img",{staticClass:"img",attrs:{src:t.imgUrl,alt:"pokeimg"}})]),n("div",{staticClass:"informations"},[n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("Height")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.height)+"m")])]),n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("Weight")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.weight)+"kg")])]),n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("Type")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.types[0].type.name))])]),n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("First Ability")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.abilities[0].ability.name))])]),n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("Hidden Ability")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.abilities[1].ability.name))])]),n("div",{staticClass:"information"},[n("p",{staticClass:"infoText"},[t._v("Base_experience")]),n("p",{staticClass:"infoValue"},[t._v(t._s(t.modal.base_experience))])])])])])])},s=[],c=i("1da1"),l=(i("d3b7"),i("159b"),i("4de4"),i("b0c0"),i("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pokecard",style:t.backgroundColor},[n("audio",{attrs:{id:"hover",src:i("5943")}}),n("div",{staticClass:"img-container"},[n("img",{staticClass:"img",attrs:{src:t.imgUrl,alt:"pokeimg"}})]),n("div",{staticClass:"info"},[n("span",{staticClass:"number"},[t._v("#"+t._s(t.pokeitem.id.toString().padStart(3,"0")))]),n("h3",{staticClass:"name"},[t._v(" "+t._s(t.pokeitem.name[0].toUpperCase()+t.pokeitem.name.slice(1))+" ")]),n("small",{staticClass:"type"},[t._v("Type: "),n("span",[t._v(t._s(t.pokeitem.types[0].type.name))])])]),n("button",{staticClass:"view-btn",on:{click:function(e){return t.openModal()}}},[t._v("view more")]),n("audio",{attrs:{id:"click",src:i("c94c")}})])}),u=[],p=(i("d81d"),i("b64b"),i("07ac"),{name:"PokeCard",props:["pokeitem"],data:function(){return{colors:[{fire:"#FDDFDF"},{grass:"#DEFDE0"},{electric:"#FCF7DE"},{water:"#DEF3FD"},{ground:"#f4e7da"},{rock:"#d5d5d4"},{fairy:"#fceaff"},{poison:"#98d7a5"},{bug:"#f8d5a3"},{dragon:"#97b3e6"},{psychic:"#eaeda1"},{flying:"#F5F5F5"},{fighting:"#E6E0D4"},{normal:"#F5F5F5"}],bgcolor:""}},mounted:function(){var t=this.colors.map((function(t){return Object.keys(t)[0]})),e=this.colors.map((function(t){return Object.values(t)[0]})),i=t.indexOf("".concat(this.pokeitem.types[0].type.name));this.bgcolor=e[i];var n=document.querySelectorAll(".pokecard");1==this.$store.state.isPlay&&n.forEach((function(t){t.addEventListener("mouseenter",(function(){var t=document.getElementById("hover");t.play()}))}))},computed:{imgUrl:function(){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(this.pokeitem.id,".png")},backgroundColor:function(){return"background-color:".concat(this.bgcolor)}},methods:{openModal:function(){if(this.pokeitem){this.$emit("modalData",this.pokeitem),this.$emit("modalColor",this.bgcolor);var t=document.getElementById("click");1==this.$store.state.isPlay&&t.play()}}}}),d=p,m=(i("b8d6"),i("2877")),f=Object(m["a"])(d,l,u,!1,null,"7676e9b9",null),g=f.exports,v=i("d4ec"),A=i("bee2"),h=function(){function t(){Object(v["a"])(this,t)}return Object(A["a"])(t,[{key:"getPokemon",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return i=t.sent,t.abrupt("return",i.json());case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),b=h,y={name:"PokemonList",components:{PokeCard:g},data:function(){return{listLength:150,pokeList:[],showList:[],type:"all",title:"",modal:{name:"name",height:null,weight:null,base_experience:null,abilities:[{ability:{name:""}},{ability:{name:""}}],types:[{type:{name:""}}]},color:""}},mounted:function(){this.fetchPokemons()},methods:{fetchPokemons:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=1;case 1:if(!(i<=t.listLength)){e.next=7;break}return e.next=4,t.getPokeList(i);case 4:i++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})))()},getPokeList:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function i(){var n,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=new b,i.next=3,n.getPokemon(t);case 3:o=i.sent,e.pokeList.push(o);case 5:case"end":return i.stop()}}),i)})))()},getModalData:function(t){this.modal=t;var e=document.querySelector(".modal-bg");e.classList.add("bg-active")},getModalColor:function(t){this.color=t;var e=document.querySelector(".modal");e.style["background-color"]=t},closeModal:function(){var t=document.querySelector(".bg-active");t.classList.remove("bg-active");var e=document.getElementById("click");1==this.$store.state.isPlay&&e.play()},closeAudio:function(t){var e=document.querySelectorAll(".pokecard"),i=document.getElementById("hover");"close"===t&&(this.$store.commit("closeMusic"),e.forEach((function(t){t.addEventListener("mouseenter",(function(){var t=i.play();void 0!==t&&t.then((function(){i.pause()}))}))}))),"open"===t&&(this.$store.commit("playMusic"),e.forEach((function(t){t.addEventListener("mouseenter",(function(){var t=i.play();void 0!==t&&t.then((function(){i.play()}))}))})))}},computed:{typeMenu:function(){var t=this;return"all"!==this.type?this.pokeList.filter((function(e){return e.types[0].type.name===t.type})):this.pokeList},titleMenu:function(){var t=this;return this.title?this.typeMenu.filter((function(e){var i=e.name.toLowerCase(),n=t.title.toLowerCase();return-1!==i.indexOf(n)})):this.typeMenu},imgUrl:function(){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(this.modal.id,".png")}}},k=y,x=(i("73f8"),Object(m["a"])(k,r,s,!1,null,null,null)),w=x.exports,C={name:"App",components:{PokemonList:w}},j=C,M=(i("034f"),Object(m["a"])(j,o,a,!1,null,null,null)),I=M.exports,P=i("2f62");n["a"].use(P["a"]);var E=new P["a"].Store({state:{isPlay:!0},mutations:{closeMusic:function(t){t.isPlay=!1},playMusic:function(t){t.isPlay=!0}},actions:{},modules:{}});i("15f5"),i("7051");n["a"].config.productionTip=!1,new n["a"]({store:E,render:function(t){return t(I)}}).$mount("#app")},5943:function(t,e){t.exports="data:audio/mpeg;base64,SUQzAwAAAAABWVRJVDIAAAAsAAAAWWlzZWxsLmNvbSAtIMzhuam6o8G/0vTQp8XkwNbL0cv3z8LU2Lf+zvGjoVRQRTEAAAAmAAAA0vTQps34IC0g0vTQp7/sy9nL0cv3o6zF5MDWv+zL2bfWz+2joVRBTEIAAAAwAAAA0vTQps34IC0gyta7+rXnxNTL5sTjt8POyqOsv+zL2cfQu7ujrL/sy9nK1cz9o6FUWUVSAAAABQAAADIwMThDT01NAAAAGAAAAGVuZwDS9NCmzfggLSBZaXNlbGwuY29tAAAAAAAAAABTO75KreYPkzzxSJIWGo993V2HyU0oIot/Jjc+57guYbHTSn9Ru43eee4ijQHyDZ1NFX/Hxu43eee43JiKJhKHiTqwREQi//JvPPcS3MJ+MjYkhpgjGAuJjYkn////////////////8T8//k/mT/mTP/kzJ/+RlCX/+EoSh/1AoFKHDMP/AoFAoFMMwzDD/+DBgweGEMIYUYV////////////////8QCAIFAwHAAAAAAYEIapEHIRI3z93MhZwof/7kmQMgAPRkFpuPaAASDILsMWcAA7yQW54w4ABMMgvAxJQAHEv3fcmtBmHw2JiaKYcwOWLcJ8A7QeJuhHIfxNRlmw/fSQZZJkqPYk1D/+btpqGQgukd/t08oopJX/9lveaNrUzJr//6bUE3+pkl///7Og36fvc0X9S///////////////vsyodnj+DY9l3nMsZmDg6KupCNnbzAdjcmJwIiwp+hj2UiyfzDDD6mHHnP//5qWX/mf/////////////////////////////IDAgFBxnmKxOQ6gJEVHYkedGP65NZPG5EiPBAepoDA2IhIfABceWJAvOKCIOtLpxMKzheYcSCE4dHkTXPzRqcc869mWTeeQzjTTe6Izm+lUUs/0Hvzjk/6Mzmfmx475t9/889DFQ5v6msh03p//////////////6ReayJEXeTptswE67VoQXK4EI0TFRMgkLFGhwUF1Ew6ImiXwKDkNmMhv5CXOnr/IikfKn//03////////////////////////////+AAKAAggMAwGiEuzLmqxTAd3/+5JkCIADrJBcVjzgAEoyC8DHlAAM7kF3OMUAAU5IL1cYUAAhBnG5N5Dytbz+eiBYeFRUVgvHzwWqAIcrM6MPhOMllCIZaeeafNLmjjuOnPIK+WNblp3ujGPfkFfPGo6R/n7rqdKGdTc5f/v89Njl5yHf9m/tbc9TLv/1Of//////////////9+c9Rp7UppsYcx2ITFatfTfOxEEGlO4WERIql7FdA/UUAafhEY9A62b9XbV0/+5F7Vbl///////////////////////////////4AFoYACQN2f55YJZokUHUf7cJh6nV/X88lQ5YNYhI/CaSGEBKpI0elj2LkTrRmXuRIyGHHkjPk4+Q7PV1XtMbIjzGMO7nuZ+//Odm/Yzb57qSv7Xmr/////6p7////////////////wARI5gH0jDNLdEW2xMCTTxU0d2KcoiSBAOo0AnRM7uPVnZ3Oqud3MilRjpnRjnFA6jUd1Pv+YqL/9G/SjUl////////////////////////////8AAQAgSDacC0hmir1dBzdBo+aF4N//uSZAoAA+mQWpY9QABEUgvQwxwADxJBcVjzgAEhyC8DGHAAsEBgfiwFyCCe4XRohCUqI4AQFoZCLEQJQwISEKQ45idDSjvuRUkhQLtgvBPREIyqXRpxRdCQscS5ouICp3o6oQI/U8hLHHdjCj+qmscZ/UiW/85zVX90/7Jq91//////////////////+N7aSOz2PNCMp8JwsQU2pe60PHiJxpqves8nqaacdqfq9zT7NRX+f9l6tX9Pf//////////////////////////////gBAAAgAoEMlqWPQIENfaSpEBLsQuVa63N8fBc8Ti8qEsdCU+PlC7BKjmgMEoig8ahucVHVVDULIymIOuzR5FN0GhA8y1nPKN0Qkue8+abbuecanmp57nvmJTrmzTvWhhn+jq69Gcwzv/NY1H/////////////////Qa8SzpOLh6c/YyUMCFzYO4QCWKhKUoPZvHjbmDQwyceRZR255u7vZavX/556L//M////////////////////////////////wBIAQaAQ4SwMZlHmKYCAif/7kmQHgAN2kFw+MOAAThILoMeUAA66QXNYZQABH0guwxJwAEcHMJ0RdvL0jrSNpjICAvG5IohjTz6CMh08193Y7NQ5rFzSxcViiw8OmHJmKf7XLHpNY0eJW2PffQxT0Of6/zLGm/u6HP/mXf5k+3/51DvnKq79u9///////////////v6wqQMRFOXqIma3FIkFdalUaMDxAccIGLIskkRNo6VIYTHa7+LjiHepnKpbXO5e1iob/8nrJ////2qVv////////////////////////AItAAKAIIZpcdsuEqGuQusStN/fdJA8DCjI4wEhXPApD4uYUJVQmdifYm+T+aU0Qww8eokjLGGbExddSueWfu6XVcuWZ/Q9mfsa5pr6HHlTj1Q7+1lbrY49vqkxraNdG7q3qis7ZxjNvWYv//////////////v7kJ19ttGqAu4sGDxxzQnJj5kdrRFjx/1ucx5jauNe6O5pxpyHGeo6a2YvnKan/+n///3//////////////////////////8AAAAITkAAAAhAgABRFJw3oEKP/+5JkCQADyJBbfhlAAEkSC5XDFAAPGkFruGOAARLILYMUcAAhQ+yYPSb6U+UWQj+SsoKApTi4tjoxjJSYn6oWP5hzGZpZpxGRD6Y5E8xHXPJD35pEeaYaju5xptVzzE/Y79T2/tcw9/NqTs7eYn+cVc01+xynKrPq7PszMZXf////////////////KKAikobf9yT622CQX3NlApBqKAg6KtMdtG5ua2xFFDqoqbrYpXfeJGIx4hev//7I6f///f///9Jf/////////////////////wkBg0AAACEUA0VYYnnSJF3Q04dkzk3D9yqjUTuOCIYRAIB4YJjWcbd3kjuhU83ZzKOcSQcGxLdDnzObmmmnFDqmHjRT8004440ikww9XM2skeNbz8+nohpt/7MeTX6HGGqc+YYYx8/T6UT6f2Sb//////////////zhf4sMnDMuQjWgBIDxYNUOFw4wBgnMQdGvMtsub//msaqPRDlI/v+8/T83/3/pT///v/b//////////////////////+BEACmAEAAACAxti4DC8WaS//uSZAgAA5CQV24goABKcgrgwRwAEKpBBhkqAADzSCYjBFAA8l3BweKw0WNtWEhMClYDiwWBw60weBHZRIpYn6nZcqG0KVjv3EhciWUpekagmZzqWQmpRIWL9ZWZvUjkGkmShlm6KdT/5UdH+qFZ2//mK3rR1bq3V2Orf///////////////EL5xOLB8AUJDhsqqAeGDFFQuLuxTavHRcQJnzTVb77Vo6X/X9zz3bWpv/zv+d/6nOWIuQcz/RW/+3////////////////////+A8A3vwBFAE/wzAyfizQby+BlE4GyygZ55+B69AWCCQsDIBVK/IsICihAv8G5/8R4OUVzBRe//IsaithTSfC0UAk1//gJCBdcG+jVC5kBcYK8Fwwj7//8cokjhkXncujqUbf//+Q0UiQiZDTUTaGNREhAcdIskqf//////////////////4EGEAAEgAH8vsF9RHxGI/h0Iiol/o8y/+X///zCP/+IkDwkds3////////6I/X///////////////////4FRBR1lpc2VsbC5jb20gLSDM4bmpuqPBv9L00KfF5MDWy9L00KbN+CAtINL00Ke/7MvZy9HL96OsxeTA1r/sy9L00KbN+CAtIMrWu/q158TUy+bE47fDzsqjrL/syzIwMTjS9NCmzfggLSBZaXNlbGwuY29tAAAAAAAAAAAAAAD/"},"5b54":function(t,e,i){var n=i("9190");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("499e").default;o("1c8fe2d0",n,!0,{sourceMap:!1,shadowMode:!1})},"73f8":function(t,e,i){"use strict";i("9a8c")},8697:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("224a");e=n(!1);var r=o(a);e.push([t.i,"*{margin:0}body{background-image:url(https://gamingdna.co.nz/wp-content/uploads/2018/05/Pokemon-BG.jpg);background-repeat:repeat}.sideBtn{position:fixed;top:1rem;right:1rem;z-index:10}.sideBtn button{margin:0 .5rem}.sideBtn button:hover{cursor:pointer}.container{max-width:1100px;margin:auto;padding:2rem 0;position:relative}.logo{width:100px;margin-right:20px}.input{display:flex;align-items:center;width:70%;font-size:1.2rem;background-color:#ffac9e;color:#fff;padding:1rem;border-radius:10px;margin:0 auto 2rem;text-align:center}.input select{width:20%}.input input,.input select{outline:none;border:none;height:1.8rem;border-radius:10px}.input input{width:50%;margin:0 1.2rem}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;justify-items:center}.modal-bg{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.4);visibility:hidden;opacity:1;transition:visibility visibility 0s .5s}.bg-active{visibility:visible;visibility:1}.modal{background-color:#fff;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);opacity:0;transition:.5s;border-radius:10px;padding:1.5rem}.modal h1{text-align:center;font-family:AtariClassicChunky;line-height:2}.bg-active .modal{top:50%;opacity:1}.img-container{background-color:hsla(0,0%,100%,.6);border-radius:50%;width:120px;height:120px;text-align:center;margin:1rem auto;display:flex}.img{width:150px;margin:auto}.informations{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr)}.information{margin:4px;padding:10px;text-align:center;background-color:hsla(0,0%,100%,.6);border:1px solid #fff;font-family:monospace}.infoText{font-size:24px;margin-bottom:10px;font-weight:700}.infoValue{font-size:26px}.close-btn{display:block;margin-left:auto;cursor:url("+r+"),auto!important}button{border:2px solid #575757;padding:.5rem;border-radius:4px;background-color:#fff;font-family:AtariClassicChunky}@media screen and (max-width:800px){.container{max-width:100%;padding:1rem 0}.sideBtn{display:flex;flex-direction:column;top:30%;right:.5rem}.sideBtn button{margin:.1rem 0}.logo{width:50px;margin-right:10px}.input{width:90%;padding:.8rem;margin:0 auto .5rem}.input input{width:60%;margin:0 .5rem}.grid{grid-template-columns:repeat(1,1fr)}.modal{width:80%;height:500px}.modal h1{font-size:1rem;line-height:1}.informations{grid-template-columns:repeat(1,1fr);grid-template-rows:repeat(6,1fr)}.information{display:flex;align-items:center}.infoValue{margin:0 .5rem;font-size:1rem}.infoText{font-size:1rem;margin:0}}",""]),t.exports=e},9190:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("224a");e=n(!1);var r=o(a);e.push([t.i,".pokecard[data-v-7676e9b9]{width:80%;font-family:AtariClassicChunky;line-height:2;text-align:center;padding:1rem;border-radius:20px;box-shadow:0 3px 15px hsla(0,0%,39.2%,.5);transition:2s cubic-bezier(.165,.84,.44,1)}.pokecard[data-v-7676e9b9]:hover{transform:scale3d(1.1,1.1,1);box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.15)}.info[data-v-7676e9b9]{margin-top:20px}.number[data-v-7676e9b9]{background-color:rgba(0,0,0,.1);border-radius:10px;font-size:1rem;padding:5px 10px}.name[data-v-7676e9b9]{margin:15px 0 7px;letter-spacing:1px}.view-btn[data-v-7676e9b9]{display:block;margin:1rem auto 0;cursor:url("+r+"),auto}@media screen and (max-width:800px){.card[data-v-7676e9b9]{width:80%}}",""]),t.exports=e},"9a8c":function(t,e,i){var n=i("8697");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("499e").default;o("4ed2a260",n,!0,{sourceMap:!1,shadowMode:!1})},b8d6:function(t,e,i){"use strict";i("5b54")},bbae:function(t,e,i){t.exports=i.p+"fonts/AtariClassicChunky-PxXP.f43f8865.woff"},c852:function(t,e,i){t.exports=i.p+"fonts/AtariClassicChunky-PxXP.4064de92.eot"},c94c:function(t,e,i){t.exports=i.p+"media/click.0dc67c90.mp3"},e31a:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("bbae"),r=i("25fb"),s=i("c852");e=n(!1);var c=o(a),l=o(r),u=o(s);e.push([t.i,"@font-face{font-family:AtariClassicChunky;src:url("+c+') format("woff"),url('+l+') format("truetype"),url('+u+') format("embedded-opentype")}',""]),t.exports=e}});
//# sourceMappingURL=app.587e7ad5.js.map