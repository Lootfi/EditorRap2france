(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{431:function(t,a,e){"use strict";e.r(a);var i=e(111),s=e.n(i),l=e(112),n=e.n(l),c=e(121),o=e.n(c),r=e(113),d=e.n(r),u=e(114),m=e.n(u),p=e(115),v=e.n(p),h=e(117),f=e.n(h),g=e(118),b=e.n(g),x=e(119),y=e.n(x),w=e(116),_=e.n(w),C=e(17),k=e.n(C),S=e(51),T=e.n(S);e(168);function R(t){return function(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}(t)||function(t){if(n()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F={components:{"v-select":k.a,flatPickr:T.a},data:function(){return{editor:null,title:"",avatar:"",Scheduled:!1,Featured:!1,category:null,text:"",hashtags:null,artists:null,isSending:!1,imgURL:"",rotation:0,selected:[],options:[],artistOptions:[],hashtagOptions:[],publishTime:null,configdateTimePickerPublish:{enableTime:!0,dateFormat:"Y-m-d H:i:s",minDate:"today",minTime:Date.now(),enableSeconds:!0},featuredRange:null,configdateTimePickerfeatured:{mode:"range",enableTime:!0,dateFormat:"Y-m-d H:i:s",minDate:"today",minTime:Date.now(),enableSeconds:!0}}},mounted:function(){var t=this;this.$vs.loading({type:"corners",text:"Patientez s'il vous plait"}),this.$http.get("/api/settings/categories",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(a){a.data.map((function(a){t.options=R(t.options).concat([{label:a.nom,value:a.id}])})),t.selected=t.options[0]})).catch((function(t){console.error(t)})),this.$http.get("/api/settings/hashtags",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(a){a.data.map((function(a){t.hashtagOptions=R(t.hashtagOptions).concat([{label:a.nom,value:a.id}])}))})).catch((function(t){console.error(t)})),this.$http.get("/api/settings/artists",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(a){a.data.map((function(a){t.artistOptions=R(t.artistOptions).concat([{label:a.name,value:a.id}]),t.$vs.loading.close()}))})).catch((function(t){console.error(t)})),this.editor=new o.a({placeholder:"Start Writing here",tools:{list:{class:y.a,inlineToolbar:!0},Marker:{class:_.a,shortcut:"CMD+SHIFT+M"},underline:b.a,header:{class:d.a,shortcut:"CMD+SHIFT+H",inlineToolbar:["link"]},embed:{class:m.a,inlineToolbar:!1,config:{services:{html:"<iframe height='900' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:900,width:600}}},quote:{class:f.a,inlineToolbar:!0},image:{class:v.a,config:{endpoints:{byFile:"/api/articles/uploadImageByFile",byUrl:""},field:"avatar",additionalRequestHeaders:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}}}})},methods:{JsonFormatter:function(t){var a=this,e="";return t.blocks.map((function(t){if("paragraph"==t.type&&(e="".concat(e,'<div class="my-4"><p>').concat(t.data.text,"</p></div>"),a.text="".concat(a.text," ").concat(t.data.text)),"list"==t.type){if("ordered"==t.data.style){var i="";t.data.items.map((function(t){i="".concat(i,"<li>").concat(t,"</li>")})),e="".concat(e,'<div class="m-4"><ol style="list-style-type:decimal;" >').concat(i,"</ol></div>"),console.log(e)}if("unordered"==t.data.style){i="";t.data.items.map((function(t){i="".concat(i,"<li>").concat(t,"</li>")})),e="".concat(e,'<div class="m-4"><ul style="list-style-type:disc;">').concat(i,"</ul></div>")}}if("header"==t.type&&(e="".concat(e,'<div class="my-4"><h').concat(t.data.level,">").concat(t.data.text,"</h").concat(t.data.level,"></div>")),"quote"==t.type&&(e="".concat(e,'<div class="my-4">\n                <blockquote class="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">\n                       <div style="font-size: 5rem; right: 100%;" class="mr-2 font-dank-mono text-neutral-500 absolute top-0 leading-none;" aria-hidden="true">\n                         &ldquo;\n                      </div>\n                              <p class="mb-4 text-3xl italic">').concat(t.data.text,'</p>\n                              <cite class="flex items-center">\n                              <div class="flex flex-col items-start">\n                                <span class="mb-1 text-sm italic font-bold">\n                                Said By \n                                  ').concat(t.data.caption,"\n                                </span>\n                              </div>\n                              </cite>\n                      </blockquote></div>")),"image"==t.type&&(t.data.file&&(e="".concat(e,'<div class="my-4 "><img style="max-width:100%;" src="').concat(t.data.file.url,'" />\n              <p class="text-center mt-2 font-bold">').concat(t.data.caption,"</p>\n              </div>")),t.data.url&&(e="".concat(e,'<div class="my-4 "><img style="max-width:100%;" src="').concat(t.data.url,'" />\n              <p class="text-center mt-2 font-bold">').concat(t.data.caption,"</p>\n              </div>"))),"embed"==t.type){if("instagram"==t.data.service){var s='<iframe width="'.concat(t.data.width,'" height="900px" src="').concat(t.data.embed,'" frameborder="0"></iframe><p class="text-center mt-2 font-bold">').concat(t.data.caption,"</p>");e="".concat(e,'<div class="my-4 text-center">').concat(s,"</div>")}if("youtube"==t.data.service){var l='<iframe width="'.concat(t.data.width,'" height="').concat(t.data.height,'" src="').concat(t.data.embed,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="text-center font-bold">').concat(t.data.caption,"</p>");e="".concat(e,'<div class="my-4 mx-auto text-center">').concat(l,"</div>")}if("twitter"==t.data.service){var n='<iframe border=0 frameborder=0 height="'.concat(t.data.height,'" width="').concat(t.data.width,'"\n                    src=').concat(t.data.embed,'></iframe><p class="text-center mt-2 font-bold">').concat(t.data.caption,"</p>");e="".concat(e,'<div class="my-4 mx-auto text-center">').concat(n,"</div>")}}})),e},handleSave:function(t){var a=this;t.preventDefault(),this.$validator.validateAll().then((function(t){a.isSending=!0,t&&a.editor.save().then((function(t){var e=a.$refs.clipper.clip().toDataURL("image/jpeg",1);a.$http.post("/api/articles/add-new-article",{data:t,avatar:e,title:a.title,category:a.category.value,hashtags:a.hashtags,artists:a.artists,formattedJsonContent:a.JsonFormatter(t),text:a.text,dateactu:a.publishTime,featured:a.featuredRange},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){a.$router.push("/articles")}))}))}))}}},j=e(3),A=Object(j.a)(F,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-4"},[e("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full my-4",attrs:{label:"Titre",name:"title"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("title")))]),t._v(" "),e("div",{staticClass:"bg-white py-4",attrs:{id:"editorjs"}}),t._v(" "),e("div",{staticClass:"my-4"},[e("clipper-upload",{staticClass:"inline-block p-2 my-2 bg-primary rounded text-white",model:{value:t.imgURL,callback:function(a){t.imgURL=a},expression:"imgURL"}},[t._v("Importer L'image de l'article")]),t._v(" "),e("div",{staticClass:"flex",staticStyle:{"max-width":"100%"}},[e("clipper-basic",{ref:"clipper",staticClass:" flex-grow-3",attrs:{src:t.imgURL,preview:"my-preview",rotate:t.rotation}}),t._v(" "),e("clipper-preview",{staticClass:"flex-grow-2 ml-2 my-clipper",attrs:{name:"my-preview"}})],1),t._v(" "),t.imgURL?e("div",{staticClass:"centerx"},[e("vs-input-number",{attrs:{min:"0",max:"360",step:"90",label:"Rotation"},model:{value:t.rotation,callback:function(a){t.rotation=a},expression:"rotation"}})],1):t._e()],1),t._v(" "),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"vs-input--label"},[t._v("Categorie")]),t._v(" "),e("v-select",{attrs:{selected:t.selected,options:t.options},model:{value:t.category,callback:function(a){t.category=a},expression:"category"}})],1),t._v(" "),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"vs-input--label"},[t._v("Hashtags")]),t._v(" "),e("v-select",{attrs:{multiple:"",taggable:"","push-tags":"",dir:t.$vs.rtl?"rtl":"ltr",options:t.hashtagOptions},model:{value:t.hashtags,callback:function(a){t.hashtags=a},expression:"hashtags"}})],1),t._v(" "),e("div",{staticClass:"mt-4"},[e("label",{staticClass:"vs-input--label"},[t._v("Artists")]),t._v(" "),e("v-select",{attrs:{multiple:"",dir:t.$vs.rtl?"rtl":"ltr",options:t.artistOptions},model:{value:t.artists,callback:function(a){t.artists=a},expression:"artists"}})],1),t._v(" "),e("vs-collapse",[e("vs-collapse-item",[e("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n    Réglages avancés \n  ")]),t._v(" "),e("div",{staticClass:"flex items-center "},[e("div",{staticClass:"col-md-4"},[e("label",{staticClass:"vs-input--label"},[t._v("Programmer La publication")]),t._v(" "),e("vs-switch",{model:{value:t.Scheduled,callback:function(a){t.Scheduled=a},expression:"Scheduled"}})],1),t._v(" "),e("div",{staticClass:"ml-5 col-md-6"},[e("label",{staticClass:"vs-input--label"},[t._v("Date de publication")]),t._v(" "),e("flat-pickr",{staticClass:"block w-full",attrs:{disabled:!t.Scheduled,config:t.configdateTimePickerPublish,placeholder:"Date de publication"},model:{value:t.publishTime,callback:function(a){t.publishTime=a},expression:"publishTime"}})],1)]),t._v(" "),e("div",{staticClass:"flex items-center "},[e("div",{staticClass:"col-md-4"},[e("label",{staticClass:"vs-input--label"},[t._v("Publication à la une ")]),t._v(" "),e("vs-switch",{model:{value:t.Featured,callback:function(a){t.Featured=a},expression:"Featured"}})],1),t._v(" "),e("div",{staticClass:"ml-5 col-md-6"},[e("label",{staticClass:"vs-input--label"},[t._v("Date de la promotion")]),t._v(" "),e("flat-pickr",{staticClass:"block w-full",attrs:{disabled:!t.Featured,config:t.configdateTimePickerfeatured,placeholder:"Date de promotion"},model:{value:t.featuredRange,callback:function(a){t.featuredRange=a},expression:"featuredRange"}})],1)])])],1),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("div",{staticClass:"mt-8 flex flex-wrap items-center justify-end"},[e("vs-button",{staticClass:"ml-auto mt-2",attrs:{disabled:t.isSending},on:{click:t.handleSave}},[t._v("Save Article")])],1)])])],1)}),[],!1,null,null,null);a.default=A.exports}}]);