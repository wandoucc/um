webpackJsonp([8],{NGBH:function(t,e){},XOFH:function(t,e){},f4Ix:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),o=n("NYxO"),s=n("BGi1"),r=n("D/cR"),l={props:["isShow"],computed:i()({},Object(o.c)({gettersrole:"role/gettersrole",adminGetter:"admin/adminGetter",adminCount:"admin/adminCount"})),methods:i()({},Object(o.b)({actionrole:"role/actionrole",actionAdminList:"admin/actionAdminList",actionAdminCount:"admin/actionAdminCount"}),{cancel:function(){this.form={roleid:0,username:"",password:"",status:1},this.isShow.flag=!1},add:function(){var t=this;Object(r.F)(this.form).then(function(e){200==e.data.code?(t.cancel(),t.actionAdminList(),t.actionAdminCount(),Object(s.a)(e.data.msg)):(Object(s.b)(e.data.msg),t.cancel())})},getOne:function(t){var e=this;Object(r.J)(t).then(function(n){e.form=n.data.list,e.pas=e.form.password,e.form.password="",e.form.uid=t})},edit:function(){var t=this;(this.form.password="")&&(this.form.password=this.pas),Object(r.I)(this.form).then(function(e){200==e.data.code?(Object(s.a)(e.data.msg),t.actionAdminList(),t.cancel()):Object(s.b)(e.data.msg)})}}),data:function(){return{form:{roleid:0,username:"",password:"",status:1},pas:""}},mounted:function(){this.actionrole()}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.isShow.edit?"添加菜单":"修改菜单",visible:t.isShow.flag},on:{"update:visible":function(e){return t.$set(t.isShow,"flag",e)},close:t.cancel}},[n("el-form",{ref:"form",attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"所属角色:"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.roleid,callback:function(e){t.$set(t.form,"roleid",e)},expression:"form.roleid"}},[n("el-option",{attrs:{label:"请选择",value:0}}),t._v(" "),t._l(t.gettersrole,function(t){return n("el-option",{key:t.id,attrs:{label:t.rolename,value:t.id}})})],2)],1),t._v(" "),n("el-form-item",{attrs:{label:"用户名:",prop:"name"}},[n("el-input",{model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码:",prop:"name"}},[n("el-input",{model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("span",{staticClass:"p"},[t._v("留空不变")])],1),t._v(" "),n("el-form-item",{attrs:{label:"状态",prop:"delivery"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){return t.cancel()}}},[t._v("取 消")]),t._v(" "),t.isShow.edit?n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.add()}}},[t._v("添 加")]):n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.edit()}}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(l,d,!1,function(t){n("zR93")},null,null).exports,u={computed:i()({},Object(o.c)({adminGetter:"admin/adminGetter",adminCount:"admin/adminCount",adminPage:"admin/adminPage",adminnewpage:"admin/adminnewpage"})),methods:i()({},Object(o.b)({actionAdminList:"admin/actionAdminList",actionAdminCount:"admin/actionAdminCount",actionAdminPage:"admin/actionAdminPage"}),{del:function(t){var e=this;Object(r.H)(t).then(function(t){200==t.data.code?(Object(s.a)(t.data.msg),e.actionAdminList(),e.actionAdminCount()):Object(s.b)(t.data.msg)})},edit:function(t){this.$emit("listedit",t)},change:function(t){console.log(t),this.actionAdminPage(t),this.actionAdminList()}}),data:function(){return{flag:!0}},mounted:function(){this.actionAdminList(),this.actionAdminCount()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"listmenu"},[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.adminGetter,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"id",label:"用户编号",sortable:"",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"username",label:"用户名",sortable:"",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"rolename",label:"所属角色",sortable:"",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[1==e.row.status?n("el-button",{attrs:{type:"primary",plain:""}},[t._v("启用")]):n("el-button",{attrs:{type:"info",plain:""}},[t._v("禁用")]),t._v(" "),n("el-button",{attrs:{type:"success",plain:""},on:{click:function(n){return t.edit(e.row.uid)}}},[t._v("编辑")]),t._v(" "),n("delbutton",{on:{delbtn:function(n){return t.del(e.row.uid)}}})],1)]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.adminPage,total:t.adminCount},on:{"current-change":t.change}})],1)},staticRenderFns:[]};var f={components:{menuAdd:c,menuList:n("VU/8")(u,m,!1,function(t){n("NGBH")},null,null).exports},methods:{add:function(){this.isShow.flag=!0,this.isShow.edit=!0},isMenuEdit:function(t){this.isShow.edit=!1,this.isShow.flag=!0,this.$refs.one.getOne(t)}},data:function(){return{isShow:{flag:!1,edit:!0}}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("menu-list",{on:{listedit:t.isMenuEdit}}),t._v(" "),n("addbuttom",{on:{addnutton:t.add}}),t._v(" "),n("menu-add",{ref:"one",attrs:{isShow:t.isShow},model:{value:t.isShow.flag,callback:function(e){t.$set(t.isShow,"flag",e)},expression:"isShow.flag"}})],1)},staticRenderFns:[]};var h=n("VU/8")(f,p,!1,function(t){n("XOFH")},"data-v-7f2fa840",null);e.default=h.exports},zR93:function(t,e){}});
//# sourceMappingURL=8.474cba9eb14b1eb2cb15.js.map