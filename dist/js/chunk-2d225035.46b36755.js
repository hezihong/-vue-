(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225035"],{e31b:function(t,s,e){"use strict";e.r(s);var d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-nav-bar",{attrs:{title:t.$route.name}}),e("van-address-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenAddressId,callback:function(s){t.chosenAddressId=s},expression:"chosenAddressId"}})],1)},n=[],r={data:function(){return{chosenAddressId:null,list:[]}},methods:{onAdd:function(){this.$router.push("/addressAdd")},onEdit:function(t){this.$router.push({path:"addressEdit",query:{index:t.id}})},onSelect:function(t){this.$store.state.address.defaultId=t.id,this.$router.go(-1)}},created:function(){this.list=this.$store.state.address.lists,this.chosenAddressId=this.$store.state.address.defaultId,this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},a=r,o=e("623f"),i=Object(o["a"])(a,d,n,!1,null,"42cf7f3c",null);s["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d225035.46b36755.js.map