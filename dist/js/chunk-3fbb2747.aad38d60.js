(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fbb2747"],{"8c2e":function(t,e,a){"use strict";var n=a("de92"),s=a.n(n);s.a},"9cc7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"topbar",attrs:{title:"星球"}},[a("van-icon",{attrs:{slot:"right",name:"search"},slot:"right"}),a("van-icon",{staticClass:"backBtn",attrs:{slot:"left",name:"arrow-left",to:"/main"},on:{click:function(e){return t.$router.go(-1)}},slot:"left"})],1),a("van-form",{on:{submit:t.onSubmit}},[a("h3",{staticClass:"title"},[t._v("说点什么：")]),a("van-field",{attrs:{rows:"2",autosize:"",name:"message",label:"留言",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("van-field",{attrs:{name:"uploader",label:"图片上传"},scopedSlots:t._u([{key:"input",fn:function(){return[a("van-uploader",{attrs:{"max-count":1},model:{value:t.uploader,callback:function(e){t.uploader=e},expression:"uploader"}})]},proxy:!0}])}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)],1)],1)},s=[],o=a("9d8a"),r={data:function(){return{message:"",src:"https://img.yzcdn.cn/vant/leaf.jpg",uploader:[]}},methods:{afterRead:function(t){this.src=t.content},onSubmit:function(t){""!=t.message&&""!=t.uploader?(this.postlist={info:t.message,src:t.uploader[0].content,name:this.$store.state.username},this.$store.commit("plant/plantAdd",this.postlist),this.$router.push("/plant")):o["a"].fail("内容不能为空")}},created:function(){this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},i=r,l=(a("8c2e"),a("623f")),c=Object(l["a"])(i,n,s,!1,null,"3f6d66e7",null);e["default"]=c.exports},de92:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3fbb2747.aad38d60.js.map