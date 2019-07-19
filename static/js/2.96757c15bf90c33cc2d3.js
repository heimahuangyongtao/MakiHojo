webpackJsonp([2],{"9Acn":function(e,t,a){var n={"./SalMonth.vue":"R27X","./SalSearch.vue":"mNON","./SalSob.vue":"VnTu","./SalSobCfg.vue":"YbFX","./SalTable.vue":"tQt2"};function i(e){return a(l(e))}function l(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id="9Acn"},R27X:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    月末处理\n  ")])])}]},i=a("VU/8")(null,n,!1,null,null,null);t.default=i.exports},VnTu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{dialogVisible:!1,tableLoading:!1,index:0,salaries:[],multipleSelection:[],salary:{id:"",createDate:"",basicSalary:"",trafficSalary:"",lunchSalary:"",bonus:"",pensionBase:"",pensionPer:"",medicalBase:"",medicalPer:"",accumulationFundBase:"",accumulationFundPer:""}}},methods:{deleteAll:function(){var e=this;this.$confirm("删除["+this.multipleSelection.length+"]条记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t="";e.multipleSelection.forEach(function(e){t=t+e.id+","}),e.doDelete(t)}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e,t){this.dialogVisible=!0,t.createDate=new Date(t.createDate),delete t.allSalary,this.salary=t},handleDelete:function(e,t){var a=this;this.$confirm("删除["+t.name+"]账套, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.doDelete(t.id)}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},doDelete:function(e){var t=this;t.tableLoading=!0,this.deleteRequest("/salary/sob/salary/"+e).then(function(e){if(t.tableLoading=!1,e&&200==e.status){e.data;t.loadSalaryCfg()}})},next:function(){var e=this,t=this;7==this.index?this.salary.createDate&&this.salary.basicSalary&&this.salary.trafficSalary&&this.salary.lunchSalary&&this.salary.bonus&&this.salary.pensionBase&&this.salary.pensionPer&&this.salary.medicalBase&&this.salary.medicalPer&&this.salary.accumulationFundBase&&this.salary.accumulationFundPer?this.salary.id?(t.tableLoading=!0,this.putRequest("/salary/sob/salary",this.salary).then(function(e){if(t.tableLoading=!1,e&&200==e.status){e.data;_,t.dialogVisible=!1,t.index=0,t.loadSalaryCfg()}})):this.$prompt("请输入账套名称","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(a){var n=a.value;e.salary.name=n,e.postRequest("/salary/sob/salary",e.salary).then(function(e){if(e&&200==e.status){e.data;t.dialogVisible=!1,t.index=0,t.loadSalaryCfg()}})}).catch(function(){}):this.$message({type:"error",message:"字段不能为空!"}):this.index++},loadSalaryCfg:function(){this.tableLoading=!0;var e=this;this.getRequest("/salary/sob/salary").then(function(t){e.tableLoading=!1,t&&200==t.status&&(e.salaries=t.data)})},emptySalary:function(){this.salary={id:"",createDate:"",basicSalary:"",trafficSalary:"",lunchSalary:"",bonus:"",pensionBase:"",pensionPer:"",medicalBase:"",medicalPer:"",accumulationFundBase:"",accumulationFundPer:""},this.index=0}},mounted:function(){this.loadSalaryCfg()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","padding-left":"0px"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加账套")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:e.loadSalaryCfg}})],1),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.salaries,stripe:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{width:"120",prop:"name",label:"账套名称"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"basicSalary",label:"基本工资"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"trafficSalary",label:"交通补助"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"lunchSalary",label:"午餐补助"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bonus",width:"70",label:"奖金"}}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"启用时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.createDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{prop:"pensionPer",width:"70",label:"比率"}}),e._v(" "),a("el-table-column",{attrs:{width:"70",prop:"pensionBase",label:"基数"}})],1),e._v(" "),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"medicalPer",label:"比率"}}),e._v(" "),a("el-table-column",{attrs:{prop:"medicalBase",width:"70",label:"基数"}})],1),e._v(" "),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"accumulationFundPer",label:"比率"}}),e._v(" "),a("el-table-column",{attrs:{prop:"accumulationFundBase",width:"70",label:"基数"}})],1),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"}},[a("el-table-column",{attrs:{label:"编辑",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"删除",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                ")])]}}])})],1)],1)],1),e._v(" "),0!=e.salaries?a("div",{staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-button",{attrs:{type:"danger",round:"",size:"mini",disabled:0==e.multipleSelection.length},on:{click:e.deleteAll}},[e._v("批量删除\n        ")])],1):e._e()])],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[a("el-dialog",{attrs:{title:"添加工资账套",visible:e.dialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.emptySalary}},[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-steps",{attrs:{active:e.index,direction:"vertical"}},[a("el-step",{attrs:{title:"基本工资",size:"mini"}}),e._v(" "),a("el-step",{attrs:{title:"交通补助"}}),e._v(" "),a("el-step",{attrs:{title:"午餐补助"}}),e._v(" "),a("el-step",{attrs:{title:"奖金"}}),e._v(" "),a("el-step",{attrs:{title:"养老金"}}),e._v(" "),a("el-step",{attrs:{title:"医疗保险"}}),e._v(" "),a("el-step",{attrs:{title:"公积金"}}),e._v(" "),a("el-step",{attrs:{title:"启用时间"}})],1),e._v(" "),a("div",{staticStyle:{"margin-left":"30px",display:"flex","justify-content":"center","align-items":"center",width:"80%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.index,expression:"index==0"}]},[e._v("\n            基本工资：\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入基本工资...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.basicSalary,callback:function(t){e.$set(e.salary,"basicSalary",t)},expression:"salary.basicSalary"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]},[e._v("\n            交通补助：\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入交通补助...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.trafficSalary,callback:function(t){e.$set(e.salary,"trafficSalary",t)},expression:"salary.trafficSalary"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]},[e._v("\n            午餐补助：\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入午餐补助...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.lunchSalary,callback:function(t){e.$set(e.salary,"lunchSalary",t)},expression:"salary.lunchSalary"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]},[e._v("\n            奖金：\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入奖金...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.bonus,callback:function(t){e.$set(e.salary,"bonus",t)},expression:"salary.bonus"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==e.index,expression:"index==4"}]},[a("div",[e._v("\n              养老金比率：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入养老金比率...",size:"mini",type:"number"},model:{value:e.salary.pensionPer,callback:function(t){e.$set(e.salary,"pensionPer",t)},expression:"salary.pensionPer"}})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("\n              养老金基数：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入养老金基数...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.pensionBase,callback:function(t){e.$set(e.salary,"pensionBase",t)},expression:"salary.pensionBase"}})],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==e.index,expression:"index==5"}]},[a("div",[e._v("\n              医疗保险比率：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入医疗保险比率...",size:"mini",type:"number"},model:{value:e.salary.medicalPer,callback:function(t){e.$set(e.salary,"medicalPer",t)},expression:"salary.medicalPer"}})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("\n              医疗保险基数：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入医疗保险基数...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.medicalBase,callback:function(t){e.$set(e.salary,"medicalBase",t)},expression:"salary.medicalBase"}})],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==e.index,expression:"index==6"}]},[a("div",[e._v("\n              公积金比率：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入公积金比率...",size:"mini",type:"number"},model:{value:e.salary.accumulationFundPer,callback:function(t){e.$set(e.salary,"accumulationFundPer",t)},expression:"salary.accumulationFundPer"}})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("\n              公积金基数：\n              "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入公积金基数...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.accumulationFundBase,callback:function(t){e.$set(e.salary,"accumulationFundBase",t)},expression:"salary.accumulationFundBase"}})],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:7==e.index,expression:"index==7"}]},[e._v("\n            启用时间：\n            "),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.salary.createDate,callback:function(t){e.$set(e.salary,"createDate",t)},expression:"salary.createDate"}})],1)])],1),e._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",padding:"0px",margin:"0px"}},[0!=e.index?a("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.index--}}},[e._v("上一步")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",round:"",size:"mini"},domProps:{textContent:e._s(7==e.index?"完成":"下一步")},on:{click:e.next}})],1)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(e){a("en9Q")},null,null);t.default=l.exports},YbFX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.emps,size:"mini",border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",align:"left",fixed:"",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workID",width:"120",align:"left",label:"工号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"email",width:"200",align:"left",label:"电子邮件"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",width:"120",label:"电话号码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department.name",align:"left",width:"120",label:"所属部门"}}),e._v(" "),a("el-table-column",{attrs:{label:"工资账套",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t.row.salary?[a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("基本工资")]),e._v("\n                ￥"+e._s(t.row.salary.basicSalary)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("奖金")]),e._v("\n                ￥"+e._s(t.row.salary.bonus)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("午餐补助")]),e._v("\n                ￥"+e._s(t.row.salary.lunchSalary)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("交通补助")]),e._v("\n                ￥"+e._s(t.row.salary.trafficSalary)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("养老金基数")]),e._v("\n                ￥"+e._s(t.row.salary.pensionBase)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("养老金比率")]),e._v("\n                "+e._s(t.row.salary.pensionPer)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("公积金基数")]),e._v("\n                ￥"+e._s(t.row.salary.accumulationFundBase)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("公积金比率")]),e._v("\n                "+e._s(t.row.salary.accumulationFundPer)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("医疗保险基数")]),e._v("\n                ￥"+e._s(t.row.salary.medicalBase)+"\n              ")],1),e._v(" "),a("div",[a("el-tag",{attrs:{size:"mini"}},[e._v("医疗保险比率")]),e._v("\n                "+e._s(t.row.salary.medicalPer)+"\n              ")],1)]:e._e()],2),e._v(" "),a("el-tag",{attrs:{size:"mini"}},[e._v(e._s(t.row.salary?t.row.salary.name:"暂未设置"))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{key:t.row.id,attrs:{placement:"right",width:"200",trigger:"click"},on:{hide:function(a){e.updateSalaryCfg(t.row.id)}}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.sid,callback:function(t){e.sid=t},expression:"sid"}},e._l(e.salaries,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){e.showUpdateView(t.row)}},slot:"reference"},[e._v("修改账套\n          ")])],1)]}}])})],1),e._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalCount},on:{"current-change":e.currentChange}})],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{emps:[],salaries:[],tableLoading:!1,totalCount:-1,sid:"",osid:"",currentPage:1}},mounted:function(){this.loadEmps()},methods:{showUpdateView:function(e){this.loadSalaries(),e.salary?(this.sid=e.salary.id,this.osid=e.salary.id):(this.sid="",this.osid="")},loadSalaries:function(){var e=this;this.getRequest("/salary/sobcfg/salaries").then(function(t){t&&200==t.status&&(e.salaries=t.data)})},updateSalaryCfg:function(e){var t=this;this.osid!=this.sid&&this.putRequest("/salary/sobcfg/",{eid:e,sid:this.sid}).then(function(e){e&&200==e.status&&(e.data,t.loadEmps())})},currentChange:function(e){this.currentPage=e,this.loadEmps()},loadEmps:function(){this.tableLoading=!0;var e=this;this.getRequest("/salary/sobcfg/emp?page="+this.currentPage+"&size=10").then(function(t){if(e.tableLoading=!1,t&&200==t.status){var a=t.data;e.emps=a.emps,e.totalCount=a.count}})}}},n,!1,null,null,null);t.default=i.exports},en9Q:function(e,t){},mNON:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("\n    工资表查询\n  ")])])}]},i=a("VU/8")(null,n,!1,null,null,null);t.default=i.exports},tQt2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticStyle:{"text-align":"left","padding-left":"0px","margin-top":"10px"}},[a("el-tag",{attrs:{size:"medium"}},[e._v("请选择部门:")]),e._v(" "),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.depId,callback:function(t){e.depId=t},expression:"depId"}},e._l(e.deps,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-main",[e._v("Main")])],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{depId:1,deps:[]}},methods:{loadDeps:function(){var e=this;this.getRequest("/salary/table/deps").then(function(t){t&&200==t.status&&(e.deps=t.data)})}},mounted:function(){this.loadDeps()}},n,!1,null,null,null);t.default=i.exports}});
//# sourceMappingURL=2.96757c15bf90c33cc2d3.js.map