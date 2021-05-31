<template>
    <div>
        <div class="row" id="nav">
            <div class="col-3" id="nav1">
                <div class="nav flex-column nav-pills btn_xs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="xyjfClass">{{xyjf}}</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="zpgcClass">{{zpgc}}</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="zpgwClass">{{zpgw}}</a>
                <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="gwccClass">{{gwcc}}</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="wjxdClass">{{wjxd}}</a>
                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-bind:class="wmgzzClass">{{wmgzz}}</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="ztyxClass">{{ztyx}}</a>
                <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="dtnszClass">{{dtnsz}}</a>
                <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-bind:class="ssfxClass">{{ssfx}}</a>
                <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-bind:class="yjbxClass">{{yjbx}}</a>
                <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" v-bind:class="yxzsClass">{{yxzs}}</a>
                <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" v-bind:class="jfyxClass">{{jfyx}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
       }
   },
   props:["xyjfClass","zpgcClass","gcccClass","zpgwClass","gwccClass","wjxdClass","wmgzzClass","ztyxClass","dtnszClass","ssfxClass","yjbxClass","yxzsClass","jfyxClass"] 
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