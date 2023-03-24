<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.0rem; font-weight: 600; color: rgb(40, 40, 40);">编 辑 商 家 资 料 卡</p>
    </div>
    <a  href="http://localhost:8080/#/user"><img class="goback" src="@/assets/goback.png"/></a>
    <div style="height: 3rem;"></div> <!-- 留一段空白 -->

    <div class="unit1">
      <p style="font-size: 1.0rem; font-weight: bold; color: rgb(140,80,80);">商家头像:&nbsp;</p>
      <img class="shopImage" :src="shopImagePath"></img>
    </div>
    <div class="shopInformation">
      <div class="unit2">
        <p style="font-size: 1.0rem; font-weight: bold; color: rgb(140,80,80);">商家名称:&nbsp;</p>
        <input type="text" :value="shopInformation.name" maxlength=16 style="width: 50%; font-size: 1.0rem; font-weight: bolder; color: rgb(140,80,80);"/>
      </div>
      <div class="unit2">
        <p style="font-size: 1.0rem; font-weight: bold; color: rgb(68, 208, 61);">商家联系电话:&nbsp;</p>
        <input type="text" :value="shopInformation.phone" maxlength=16 style="width: 50%; font-weight: bold; font-size: 1.0rem; color: rgb(68, 208, 61); margin-left: 5%;"/>
      </div>
      <div class="unit2">
        <p style="font-size: 1.0rem; font-weight: bold; color: rgb(42, 165, 108);">商家所在城市:&nbsp;</p>
        <input type="text" :value="shopInformation.city" maxlength=16 style="width: 50%; font-weight: bold; font-size: 1.0rem; color: rgb(42, 165, 108); margin-left: 5%;"/>
      </div>
    </div>
    <div style="height: 5rem;"></div> <!-- 留一段空白 -->
    <div class="bottom">
      <input type="button" value="确认修改" style="width: 30%; height: 70%; font-size: 1.0rem; font-weight: bold;color:rgb(56, 19, 218);"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadMaterial',
    data() {
      return {
        shopImagePath: '../../../static/wtb.jpg',
        shopInformation: {
          'name': '吾托邦装饰有限公司',
          'city': '广州市',
          'phone': '020-12345678'
        }
      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style scoped>
  .page {
    width: 30rem;
    /* background-color: rgb(245, 245, 245); */
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

  .top {
    width: 30rem;
    height: 3rem;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .goback {
    width: 1.5rem;
    height: 1.5rem;
    position: fixed;
    top: 0.75rem;
    transform: translateX(50%);
    z-index: 2;
  }

  .unit1 {
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 2rem;
  }

  .shopImage {
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 50%;
    border: 0.2rem dotted rgb(100,100,100);
  }

  .shopInformation {
    width: 86%;
    height: 10rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: 8%;
    margin-right: 8%;
    background-color: rgb(245,245,230);
    text-align: center;
    border-radius: 20%;
    border: 0.15rem dotted rgb(100,100,100);
  }

  .unit2 {
    width: 90%;
    height: 33%;
    padding-left: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .bottom {
    width: 30rem;
    height: 4rem;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
