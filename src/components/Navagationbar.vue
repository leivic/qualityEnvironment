<template>
    <div>
        <div class="row" id="nav">
            <div class="col-3" id="nav1">
                <div class="nav flex-column nav-pills btn_xs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link" v-if="display1"style="display1" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="xyjfClass" v-on:click="xyjfrouter">{{xyjf}}</a>
                <a class="nav-link nav-link2" v-if="display2"  id="v-pills-profile-tab" data-toggle="pill" href="#/zpgc1" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="zpgcClass" v-on:click="zpgcrouter">{{zpgc}}</a>
                <a class="nav-link nav-link3" v-if="display3"  id="v-pills-profile-tab" data-toggle="pill" href="#/" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="gcccClass">{{gccc}}</a>
                <a class="nav-link nav-link4" v-if="display4"  id="v-pills-settings-tab" datia-toggle="pill" href="#/zpgw" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="zpgwClass" v-on:click="zpgwrouter">{{zpgw}}</a>
                <a class="nav-link nav-link5" v-if="display5"  id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="gwccClass">{{gwcc}}</a>
                <a class="nav-link nav-link6" v-if="display6"  id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="wjxdClass" @click="windowhref(wjxd1)">{{wjxd}}</a>
                <a class="nav-link nav-link7" v-if="display7"  id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-bind:class="wmgzzClass">{{wmgzz}}</a>
                <a class="nav-link nav-link8" v-if="display8"  id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="ztyxClass">{{ztyx}}</a>
                <a class="nav-link nav-link9" v-if="display9"  id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="dtnszClass">{{dtnsz}}</a>
                <a class="nav-link nav-link10" v-if="display10"  id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="ssfxClass">{{ssfx}}</a>
                <a class="nav-link nav-link11" v-if="display11"  id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-bind:class="yjbxClass">{{yjbx}}</a>
                <a class="nav-link nav-link12" v-if="display12"  id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="yxzsClass">{{yxzs}}</a>
                <a class="nav-link nav-link13" v-if="display13"  id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="jfyxClass">{{jfyx}}</a>
                <a class="nav-link nav-link14" v-if="display14"  id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="glyClass"v-on:click="glyrouter">{{gly}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
console.log("运行到这儿")
import Vue from 'vue';

export default {
   data(){
       return {
           xyjf:"质量信用积分",
           zpgc:"质量生态环境自评过程",
           gccc:"质量生态环境过程抽查",
           zpgw:"质量生态环境自评工位",
           gwcc:"质量生态环境工位抽查",
           wjxd:"质量生态环境文件修订",
           wmgzz:"质量生态环境文明工作者",
           ztyx:"SGMW质量内部损失成本总体运行",
           dtnsz:"各基地单台内损值",
           ssfx:"重庆分公司质量内部损失分析",
           yjbx:"各区域质量内部损失业绩表现",
           yxzs:"月度运行走势",
           jfyx:"质量生态持续模块积分运行",
           gly:"管理员",
           display1: this.display.display1,//this.display 是原型prototype里面的值 所有vue实例共同有的一个值  相当于全局变量 
           display2: this.display.display2,
           display3: this.display.display3,
           display4: this.display.display4,
           display5: this.display.display5,
           display6: this.display.display6,
           display7: this.display.display7,
           display8: this.display.display8,
           display9: this.display.display9,
           display10: this.display.display10,
           display11: this.display.display11,
           display12: this.display.display12,
           display13: this.display.display13,
           display14: this.display.display14,
           wjxd1:"http://localhost:8080/#/wjxd1" 
       }
   },
   mounted(){
      /* 
      this.$axios({
              method:"get",
              url:'http://localhost:8090/a1',
              }).then((res)=>{
                  console.log(res.data);
                  switch (res.data.authorities[0].authority){
                      case "ROLE_admin":
                          this.display1="display:block",
                          this.display2="display:block",
                          this.display4="display:block"
                  }
              }) */
      /*this.$axios({
              method:"get",
              url:'http://localhost:8090/a1',
              }).then((res)=>{
                  console.log(res.data);
                  switch (res.data.authorities[0].authority){
                      case "ROLE_admin":
                          this.display1=true,
                          this.display2=true,
                          this.display3=true,
                          this.display4=true
                               
                           }
              })*/
              console.log(this.display.display1),
              console.log(this.display.display5)
              
   },
   props:["xyjfClass","zpgcClass","gcccClass","zpgwClass","gwccClass","wjxdClass","wmgzzClass","ztyxClass","dtnszClass","ssfxClass","yjbxClass","yxzsClass","jfyxClass","glyClass"],
   methods:{
       xyjfrouter:function(event){
           window.location.href="http://localhost:8080/#/xyjf"
       },
       zpgwrouter:function(event){
           window.location.href="http://localhost:8080/#/zpgw"
       },
       zpgcrouter:function(event){
          window.location.href="http://localhost:8080/#/zpgc1" 
       },
       glyrouter:function(event){
          window.location.href="http://localhost:8080/#/gly" //页面跳转的一个写法 
       },
       windowhref(option){
           window.location.href=option
       }
   }
}
</script>
<style>
#nav {
width: 78%;
font-size: 90%;
position:absolute;
left: 0px;
top:100px;
}
</style>