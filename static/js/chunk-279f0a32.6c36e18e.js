(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-279f0a32"],{"1af6":function(e,t,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},3124:function(e,t,a){},"3b4b":function(e,t,a){"use strict";var n=a("3124"),s=a.n(n);s.a},"579e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",[a("div",[a("p",[e._v("切換角色 change layout")]),a("a-radio-group",{model:{value:e.isAdmin,callback:function(t){e.isAdmin=t},expression:"isAdmin"}},[a("a-radio",{attrs:{value:!0}},[e._v("\n        Admin\n      ")]),a("a-radio",{attrs:{value:!1}},[e._v("\n        F&V\n      ")])],1)],1),a("a-divider"),a("div",{staticClass:"form-search pb-15"},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-row",{attrs:{type:"flex"}},[a("a-col",{attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Case Id"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["caseId"],expression:"['caseId']"}],attrs:{placeholder:"case id"}})],1)],1),a("a-col",{attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Assigner"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["assiner"],expression:"['assiner']"}],attrs:{placeholder:"assigner"}},[a("a-select-option",{attrs:{value:"Coco"}},[e._v("\n                Coco\n              ")]),a("a-select-option",{attrs:{value:"Ella"}},[e._v("\n                Ella\n              ")])],1)],1)],1),a("a-col",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"isAdmin"}],attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Acceptor Name"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["accptor"],expression:"['accptor']"}],attrs:{placeholder:"acceptor name"}},[a("a-select-option",{attrs:{value:"yoyo"}},[e._v("\n                yoyo\n              ")]),a("a-select-option",{attrs:{value:"Hebe"}},[e._v("\n                Hebe\n              ")])],1)],1)],1),a("a-col",{attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Case Status"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["caseStatus"],expression:"['caseStatus']"}],attrs:{mode:"multiple",placeholder:"case status"}},e._l(e.caseStatus,function(t,n){return a("a-select-option",{key:n,attrs:{value:n}},[e._v("\n                "+e._s(t.label.en)+"\n              ")])}),1)],1)],1),a("a-col",{attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Target Language"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["targetLanguage"],expression:"['targetLanguage']"}],attrs:{mode:"multiple",placeholder:"target language"}},e._l(e.languages,function(t,n){return a("a-select-option",{key:n,attrs:{value:n}},[e._v("\n                "+e._s(t)+"\n              ")])}),1)],1)],1),a("a-col",{attrs:{lg:8,md:12,xs:24}},[a("a-form-item",{attrs:{label:"Case Updated Date"}},[a("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["updated"],expression:"['updated']"}],style:{width:"100%"}})],1)],1),a("a-col",{attrs:{xs:24}},[a("div",{staticClass:"text-right"},[a("a-button",{staticClass:"mr-10",attrs:{type:"primary",icon:"search","html-type":"submit"}},[e._v("\n              Search\n            ")]),a("a-button",{attrs:{type:"default"},on:{click:e.handleReset}},[e._v("\n              Reset\n            ")])],1)])],1)],1)],1),a("a-divider"),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"isAdmin"}],staticClass:"mb-15"},[a("router-link",{attrs:{to:{name:"CaseAssignment"}}},[a("a-button",{attrs:{type:"primary"}},[a("a-icon",{attrs:{type:"plus"}}),e._v("\n        Case Assignment\n      ")],1)],1)],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.data,loading:e.loading,"row-key":function(e){return e.caseId},pagination:e.pagination,bordered:""},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"caseId",fn:function(t){return a("span",{},[e.isAdmin?[a("router-link",{attrs:{to:{name:"CaseAssignmentReview",params:{caseId:t}}}},[e._v(e._s(t))])]:[a("span",[e._v(e._s(t))])]],2)}},{key:"targetLang",fn:function(t){return a("span",{},[e._v("\n      "+e._s(e.languages[t])+"\n    ")])}},{key:"caseStatus",fn:function(t,n){return a("span",{},[a("a-tag",{staticClass:"m-0",attrs:{color:e.caseStatus[t].color||"#ddd"}},[e._v(e._s(e.caseStatus[t].label.en))]),a("p",{staticClass:"text-center"},[e._v("("+e._s(n.statusManager)+")")])],1)}},{key:"action",fn:function(t){return a("span",{},[e.isAdmin?[a("div",{staticClass:"mb-10"},[a("a-button",{attrs:{type:"primary",icon:"form",size:"small"}},[e._v("Edit")])],1),a("div",[e.data.length?a("a-popconfirm",{attrs:{placement:"topRight",title:"Are you sure cancel this case"},on:{confirm:function(a){return e.onDelete(t.caseId)}}},[a("a-button",{attrs:{type:"danger",icon:"delete",size:"small"}},[e._v("Cancel")])],1):e._e()],1)]:[a("div",{staticClass:"mb-10"},[a("a-button",{attrs:{type:"primary",icon:"form",size:"small"}},[e._v("Edit")])],1),a("div",{staticClass:"mb-10"},[a("a-button",{attrs:{type:"primary",icon:"search",size:"small"}},[e._v("Read")])],1),a("div",{staticClass:"mb-10"},[a("a-button",{attrs:{type:"primary",icon:"check",size:"small"}},[e._v("Accept")])],1),a("div",{staticClass:"mb-10"},[a("a-button",{attrs:{type:"danger",icon:"stop",size:"small"},on:{click:function(a){return e.handleRejectModal(t)}}},[e._v("Reject")])],1),a("span",[e._v("Due date: "+e._s(t.dueDate))])]],2)}}])}),a("reject-case",{ref:"rejectForm",attrs:{potral:"modal",visible:e.modalVisible,"reject-item":e.rejectItem},on:{cancel:e.handleRejectCancel,create:e.handleRejectCreate}})],1)},s=[],r=a("75fc"),o=a("cebc"),i=a("630a"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"Case: "+(e.rejectItem&&e.rejectItem.caseId)+" "},on:{ok:function(){e.$emit("create")},cancel:function(){e.$emit("cancel")}}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"Do you want to reject this case ?"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["reason",{rules:[{required:!0,message:"Input something!"}]}],expression:"[\n          'reason',\n          {\n            rules: [{\n              required: true,\n              message: 'Input something!',\n            }],\n          }\n        ]"}],attrs:{rows:4,placeholder:"reason"}})],1)],1)],1)},l=[],d={name:"RejectModal",props:{visible:{type:Boolean,default:function(){return!1}},rejectItem:{type:Object,default:function(){return null}}},data:function(){return{form:this.$form.createForm(this)}}},u=d,m=a("2877"),p=Object(m["a"])(u,c,l,!1,null,null,null),f=p.exports,v=[{dataIndex:"caseId",title:"Case Id",key:"caseId",scopedSlots:{customRender:"caseId"}},{dataIndex:"productName",title:"Product Name",key:"productName",scopedSlots:{customRender:"name"}},{dataIndex:"targetLang",title:"Target Language",key:"targetLang",scopedSlots:{customRender:"targetLang"}},{dataIndex:"assigner",title:"Assigner",key:"assigner",scopedSlots:{customRender:"assigner"}},{dataIndex:"acceptor",title:"Acceptor",key:"acceptor",scopedSlots:{customRender:"acceptor"}},{dataIndex:"caseStatus",title:"Case status",key:"caseStatus",scopedSlots:{customRender:"caseStatus"}},{dataIndex:"updated",title:"Updated",key:"updated",scopedSlots:{customRender:"updated"}},{title:"Action",key:"action",width:"120px",scopedSlots:{customRender:"action"}}],h=[{caseId:"24849-3-2",productName:"【曼谷泰式按摩 】Lets Relax Spa 按摩體驗預約（Siam Square One 分店)",targetLang:"en",assigner:"Coco",statusManager:"Ella",acceptor:"KK",caseStatus:"s3",updated:"2019-6-3",dueDate:"2019-8-10"}],g={name:"CaseList",components:{"reject-case":f},data:function(){return{isAdmin:!0,columns:v,data:[],loading:!1,pagination:{pageSize:20,total:100,showSizeChanger:!0},form:this.$form.createForm(this),params:{},caseStatus:i["a"],languages:i["c"],modalVisible:!1,rejectItem:null}},computed:{rejectForm:function(){return this.$refs&&this.$refs.rejectForm.form||null}},created:function(){this.getTableList()},methods:{getTableList:function(){var e=this,t=this.pagination.current,a=void 0===t?1:t;if(!a)return!1;this.loading=!0,setTimeout(function(){var t=Object(o["a"])({},e.pagination,{total:100});e.pagination=t,e.data=[].concat(h),e.loading=!1},500)},handleTableChange:function(e){var t=Object(o["a"])({},this.pagination);t.current=e.current,this.pagination=t,this.getTableList()},handleSubmit:function(e){var t=this;e.preventDefault(),this.params={},this.form.validateFields(function(e,a){e||(t.params=Object(o["a"])({},a),t.getTableList())})},handleReset:function(){this.form.resetFields()},onDelete:function(e){var t=Object(r["a"])(this.data);this.data=t.filter(function(t){return t.caseId!==e}),this.$notification["success"]({message:"刪除成功",description:"刪除 => caseId: ".concat(e)})},handleRejectModal:function(e){this.modalVisible=!this.modalVisible,this.rejectItem=Object(o["a"])({},e)},handleRejectCancel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.rejectForm;this.modalVisible=!1,this.rejectItem=null,e&&e.resetFields()},handleRejectCreate:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.rejectForm;t&&t.validateFields(function(t,a){t||(console.log("Received values of form: ",a),e.handleRejectCancel())})}}},b=g,y=(a("3b4b"),Object(m["a"])(b,n,s,!1,null,"5c134c44",null));t["default"]=y.exports},"630a":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return r});var n={s1:{label:{"zh-tw":"未派",en:"Unassigned"},color:"#262626"},s2:{label:{"zh-tw":"已派待確認",en:"To be accepted"},color:"#13c2c2"},s3:{label:{"zh-tw":"接案編譯中",en:"Translating"},color:"#13c2c2"},s4:{label:{"zh-tw":"完成待審",en:"To be proofread"},color:"#faad14"},s5:{label:{"zh-tw":"審核中",en:"Proofreading"},color:"#f50"},s6:{label:{"zh-tw":"退回待改",en:"To be revised"},color:"#ffadd2"},s7:{label:{"zh-tw":"修改中",en:"Revising"},color:"#ffadd2"},s8:{label:{"zh-tw":"已取消",en:"Cancelled"},color:"#c7c7c7"},s9:{label:{"zh-tw":"已結通過",en:"Approved"},color:"#2db7f5"},s10:{label:{"zh-tw":"已結未通過",en:"Failed"},color:"#80dfff"}},s={en:"English",vi:"Tiếng Việt",th:"ไทย","zh-cn":"简体中文","zh-hk":"繁體中文(香港)","zh-tw":"繁體中文(台灣)",ja:"日本語",ko:"한국어"},r={name:"Product Name",experience:"The experience",priceDetail:"Price Detail",itinerary1:"Itinerary1",itinerary2:"Itinerary2"}},"75fc":function(e,t,a){"use strict";var n=a("a745"),s=a.n(n);function r(e){if(s()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var o=a("774e"),i=a.n(o),c=a("c8bb"),l=a.n(c);function d(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(e){return r(e)||d(e)||u()}a.d(t,"a",function(){return m})},"774e":function(e,t,a){e.exports=a("d2d5")},a745:function(e,t,a){e.exports=a("f410")},c8bb:function(e,t,a){e.exports=a("54a1")},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-279f0a32.6c36e18e.js.map