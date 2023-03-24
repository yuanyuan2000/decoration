<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="user_info_wrap">
      <div class="user_info">
        <img class="user_icon" src="@/assets/lovecodingmonkey.jpg"></img>
        <div class="user_type">
          <div v-if="global.isShops == true"><p style="font-size: 0.8rem; color: rgb(56, 19, 218);">商家用户</p></div>
          <div v-else><p style="font-size: 0.8rem; color: rgb(56, 19, 218);">普通用户</p></div>
        </div>
        <div class="user_name">
          <p style="font-size: 1.2rem; font-weight: bolder; color: rgb(20,20,20);">{{nickName}}</p>
        </div>
      </div>
    </div>
    <div class="user_content">
      <div class="user_main">
        <div class="wrap">
          <div class="wrap_item">
            <img src="@/assets/icon_identity.png"></img>
            <div v-if="global.isShops == true" @click="toShop()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;编辑商家资料卡</p></div>
            <div v-else @click="toBudget()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;填写装修需求</p></div>
          </div>
          <div class="wrap_item">
            <img src="@/assets/icon_setting.png"></img>
            <div v-if="global.isShops == true" @click="toUploadMaterial()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;上传装修材料案例</p></div>
            <div v-else @click="toFirst()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;智能推荐装修材料</p></div>
          </div>
          <div class="wrap_item" @click="toCollect()">
            <img src="@/assets/icon_folder.png"></img>
            <p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;我的收藏夹</p>
          </div>
          <div class="wrap_item1">
            <img src="@/assets/icon_friends.png"></img>
            <div v-if="global.isShops == true" @click="beShops()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;我已是商家</p></div>
            <div v-else @click="beShops()"><p style="font-size: 1.2rem; color: rgb(120,120,120);">&nbsp;&nbsp;申请成为商家</p></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="unit">
        <div style="text-align: center; height: 70%;">
          <a href="http://localhost:8080/#/purchase"><img class="buttonIcon" src="@/assets/purchase00.svg"></img></a>
          <p style="font-size: 0.7rem; color: rgb(185,185,185);">采购</p>
        </div>
      </div>
      <div class="unit">
        <div style="text-align: center; height: 70%;">
          <a href="http://localhost:8080/#/first"><img class="buttonIcon" src="@/assets/first00.svg"></img></a>
          <p style="font-size: 0.7rem; color: rgb(185,185,185);">发现</p>
        </div>
      </div>
      <div class="unit">
        <div style="text-align: center; height: 70%;">
          <img class="buttonIcon" src="@/assets/user11.svg"></img>
          <div v-if="global.isShops == true"><p style="font-size: 0.7rem; color: rgb(61,128,234);">商家</p></div>
          <div v-else><p style="font-size: 0.7rem; color: rgb(61,128,234);">用户</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        nickName: "爱敲代码的猿猿"
      }
    },
    methods: {
      beShops:function(){
        if(this.global.isShops == false) this.global.isShops = true;
        else this.global.isShops = false;
        window.location.href = "http://localhost:8080/#/first";
        //window.location.reload();
        //this.$router.go(0);
      },
      toBudget:function(){
        window.location.href = "http://localhost:8080/#/budget";
      },
      toUploadMaterial:function(){
        window.location.href = "http://localhost:8080/#/uploadMaterial";
      },
      toCollect:function(){
        window.location.href = "http://localhost:8080/#/collect";
      },
      toFirst:function(){
        window.location.href = "http://localhost:8080/#/first";
      },
      toShop:function(){
        window.location.href = "http://localhost:8080/#/shop";
      }
    }
  };
</script>

<style scoped>
  .page {
    width: 30rem;
  }

  .background {
    position: fixed;
    z-index: -10;
    left: 50% - 15rem;
    top: 0;
  }

  .backgroundImage {
    height: 100%;
    width: 30rem;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }

  .user_info_wrap {
    height: 12rem;
    overflow: hidden;
    position: relative;
  }
  .user_info {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6%;
    text-align: center;
    /* background-color: red; */
  }
  .user_icon {
    width: 35%;
    height: 35%;
    border-radius: 50%;
    border-color: rgb(99, 99, 99);
    border-width: 1.2rem;
  }
  .user_type {
    position: absolute;
    left: 65%;
    top: -10%;
  }
  .user_name {
    width: 100%;
    height: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user_content {
    position: relative;
  }
  .user_main {
    padding-bottom: 12rem;
    position: absolute;
    width: 70%;
    left: 15%;
    top: 50%;
  }
  .wrap {
    border: 0.1rem solid rgb(99, 99, 99);
    border-radius: 4%;
  }
  .wrap_item {
    transform: translateX(7%);
    width: 85%;
    /* left: 70%; */
    height: 3.5rem;
    display: flex;
    flex: 8;
    flex-direction: row;
    padding: 0.5rem;
    border-bottom: 0.05rem solid rgb(209, 209, 209);
    align-items: center;
    text-decoration: none;
  }
  /* 最后一行不用下划线 */
  .wrap_item1 {
    transform: translateX(7%);
    width: 85%;
    left: 70%;
    height: 3.5rem;
    display: flex;
    flex: 8;
    flex-direction: row;
    padding: 0.5rem;
    align-items: center;
    font-size: 1.3rem;
  }

  .bottom{
    width: 30rem;
    height: 4.5rem;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: rgb(252,252,252);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .unit{
    width: 33%;
    height: 100%;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buttonIcon{
    height: 50%;
  }
</style>
