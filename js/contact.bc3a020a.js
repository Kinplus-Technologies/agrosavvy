(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{1445:function(t,e,a){"use strict";a("f5e6")},1681:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("contact-page")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"mx-auto",attrs:{title:"Best Charcoal, Sesame Seeds, Shea Butter, Dried Cashew Nuts, Peanuts, contact agrosavvy"}},[a("v-col",{attrs:{cols:"12",sm:"6",order:"3","order-sm":"1"}},[a("div",{staticClass:"contact"},[a("h2",[t._v(" Contact Us: ")]),a("br"),a("contact-details"),a("social-site")],1)]),a("v-col",{attrs:{cols:"12",sm:"6",order:"2"}},[a("v-card",{attrs:{elevation:"6"}},[a("v-container",[a("v-form",[a("v-text-field",{attrs:{label:"Your Name",title:"AgroSavvy needs your name",color:t.themeColor,required:""}}),a("v-text-field",{attrs:{label:"Your E-mail",title:"AgroSavvy needs your email",color:t.themeColor,required:""}}),a("v-text-field",{attrs:{label:"Your Phone Number",title:"AgroSavvy needs your phone number",color:t.themeColor,required:""}}),a("v-text-field",{attrs:{label:"Subject",title:"AgroSavvy needs to know the subject of your message ",color:t.themeColor,required:""}}),a("v-textarea",{attrs:{rows:"3","auto-grow":"",color:t.themeColor,label:"Message",title:"AgroSavvy needs your message to serve you better",required:""}}),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{to:{name:"home"},color:"error"}},[t._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{dark:""}},[t._v("Submit")])],1)],1)],1)],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{title:""}},[a("div",[a("span",{staticClass:" d-block",attrs:{title:""}},[t._v("AgroSavvy,")]),a("span",{staticClass:" d-block",attrs:{title:""}},[t._v("10740 109 Str. NW, Edmonton,")]),a("span",{staticClass:" d-block",attrs:{title:""}},[t._v("Alberta T5H 3B6, Canada")]),a("span",{attrs:{title:""}},[t._v("Tel: +1(780)716-4898")])])])}],c={name:"ContactDetails"},u=c,d=a("2877"),v=Object(d["a"])(u,i,l,!1,null,null,null),h=v.exports,m=a("4942"),f={name:"ContactPage",components:{ContactDetails:h,SocialSite:m["a"]},data:function(){return{themeColor:"#ffb222"}}},p=f,g=(a("1445"),a("6544")),b=a.n(g),w=a("8336"),C=a("b0af"),y=a("99d9"),x=a("62ad"),S=a("a523"),_=a("ce7e"),H=a("4bd4"),V=a("0fd9"),k=a("2fa4"),I=a("8654"),N=(a("a9e3"),a("5530")),A=(a("1681"),a("58df")),$=Object(A["a"])(I["a"]),j=$.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(N["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},I["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=I["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){I["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),G=Object(d["a"])(p,n,s,!1,null,null,null),T=G.exports;b()(G,{VBtn:w["a"],VCard:C["a"],VCardActions:y["a"],VCol:x["a"],VContainer:S["a"],VDivider:_["a"],VForm:H["a"],VRow:V["a"],VSpacer:k["a"],VTextField:I["a"],VTextarea:j});var z={name:"Contact",components:{ContactPage:T}},B=z,E=Object(d["a"])(B,o,r,!1,null,null,null);e["default"]=E.exports},f5e6:function(t,e,a){}}]);
//# sourceMappingURL=contact.bc3a020a.js.map