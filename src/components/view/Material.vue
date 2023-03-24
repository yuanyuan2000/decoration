<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.2rem; font-weight: bolder; font-weight: 600; color: rgb(40, 40, 40);">
        {{materialInformation.materialName}}</p>
    </div>
    <a :href="source"><img class="goback" src="@/assets/goback.png" /></a>
    <div style="height: 3rem;"></div> <!-- 留一段空白 -->
    <div class="unit1" @mouseover="changeInterval(true)" @mouseleave="changeInterval(false)">
      <div style="width: 10%; display: flex; justify-content: center; align-items: center;">
        <div @click="clickIcon('up')" class="iconDiv">
          <i class="el-icon-caret-left"></i>
        </div>
      </div>
      <div style="width: 80%; display: flex; justify-content: center;">
        <img v-for="(item) in materialInformation.materialImage" :key="item.id" :src="item.url" alt="暂无图片"
            v-show="item.id===currentIndex">
      </div>
      <div style="width: 10%; display: flex; justify-content: center; align-items: center;">
        <div @click="clickIcon('down')" class="iconDiv">
          <i class="el-icon-caret-right"></i>
        </div>
      </div>
      <!-- 图片下面的小圆点 -->
      <!-- <div class="banner-circle">
        <ul>
          <li @click="changeImg(item.id)" v-for="(item) in materialInformation.materialImage" :key="item.id"
            :class="item.id===currentIndex? 'active': '' " style="list-style-type: none;"></li>
        </ul>
      </div> -->
    </div>
    <div class="unit2">
      <p style="font-size: 1.1rem; font-weight: bolder; color: rgb(140,80,80);">{{materialInformation.materialName}}</p>
      <div class="collectIcon">
        <p style="font-size: 0.9rem; color: rgb(147, 150, 49);">&nbsp;&nbsp;</p>
        <img style="height: 70%;" :src="collectIconPath" @click="collect()"></img>
        <p style="font-size: 0.9rem; color: rgb(147, 150, 49);">收藏&nbsp;&nbsp;</p>
      </div>
    </div>
    <div class="unit3">
      <p style="font-size: 0.9rem; color: rgb(207, 66, 19);">¥ 预算价位</p>
      <p style="font-size: 0.8rem; font-weight: 300; color: rgb(207, 66, 19); margin-left: 10%;">
        {{materialInformation.materialPrice}}{{materialInformation.materialMessurement}}
      </p>
    </div>
    <div class="unit4">
      <p style="font-size: 0.9rem; color: rgb(100, 100, 100);">{{materialInformation.materialDescription}}</p>
    </div>
    <div class="unit5">
      <div v-for="(item,index) in unit5" :key="index" style="display: inline-block; width: 50%; height: 50%">
        <div class="basicUnit5">
          <div style="width: 30%; height: 100%; display: flex; align-items: center; justify-content: center;">
            <img style="height: 50%;" :src="item.iconPath"></img>
          </div>
          <div style="width: 70%; height: 100%; text-align: center;">
            <p style="font-size: 0.8rem; font-weight: 600; color: rgb(100, 100, 100);">{{item.text1}}</p>
            <p style="font-size: 0.8rem; font-weight: 400; color: rgb(61,128,234);">{{item.text2}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="unit7">
      <div class="shopsName">
        <img src="../../../static/wtb.jpg" style="height: 60%; border-radius: 50%;"></img>
        <p style="font-size: 0.9rem; color: rgb(234,128,61);">&nbsp;&nbsp;{{materialInformation.materialShopsName}}</p>
      </div>
      <div class="shopsCityPhone">
        <div style="width: 40%; height: 100%; display: flex; justify-content: flex-start; align-items: center;">
          <img src="../../../static/position.png" style="height: 70%;"></img>
          <p style="font-size: 0.9rem; font-weight: 700; color: rgb(70,120,100);">
            &nbsp;&nbsp;{{materialInformation.materialShopsCity}}</p>
        </div>
        <div style="width: 60%; height: 100%; display: flex; justify-content: flex-start; align-items: center;">
          <img src="../../../static/phone.png" style="height: 50%;"></img>
          <p style="font-size: 0.9rem; color: rgb(100,180,150);">&nbsp;&nbsp;{{materialInformation.materialShopsPhone}}
          </p>
        </div>
      </div>
    </div>
    <div class="unit6">
      <div class="bkqs">
        <p style="font-weight: bold; font-size: 1.1rem; color: rgb(222, 0, 3);">知 识 库</p>
      </div>
      <div class="tips">
        <ul>
          <li v-for="(item,index) in materialInformation.materialTips" :key="index"
            style="font-size: 0.9rem; font-weight: 600; color: rgb(40, 40, 40);margin-bottom: 0.5rem;">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="unit8">
      <img v-for="(item) in materialInformation.materialIntroduction" :key="item.id" :src="item.url" alt="暂无图片">
    </div>
    <div style="height: 5rem;"></div> <!-- 留一段空白 -->
  </div>
</template>

<script>
  export default {
    name: 'Material',
    data() {
      return {
        source: 'http://localhost:8080/#/',
        index: 0,
        materialInformation: '',
        currentIndex: 0, //当前所在图片下标
        timer: null, //定时轮询
        collectIconPath: '../../../static/collect01.png',
        unit5: [{
            'iconPath': '../../../static/workpoint.png',
            'text1': '材料工作点',
            'text2': ''
          },
          {
            'iconPath': '../../../static/material.png',
            'text1': '材料类型',
            'text2': ''
          },
          {
            'iconPath': '../../../static/craft.png',
            'text1': '材料工艺',
            'text2': ''
          },
          {
            'iconPath': '../../../static/color.png',
            'text1': '材料色泽',
            'text2': ''
          }
        ]
      }
    },
    methods: {
      collect: function() {
        if (this.collectIconPath == '../../../static/collect01.png') this.collectIconPath =
          '../../../static/collect02.png';
        else this.collectIconPath = '../../../static/collect01.png';
      },
      //开启定时器
      startInterval() {
        // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.currentIndex++;
          if (this.currentIndex > this.materialInformation.materialImage.length - 1) {
            this.currentIndex = 0
          }
        }, 3000)
      },
      // 点击左右箭头
      clickIcon(val) {
        if (val === 'down') {
          this.currentIndex++;
          if (this.currentIndex === this.materialInformation.materialImage.length) {
            this.currentIndex = 0;
          }
        } else {
          if (this.currentIndex === 0) {
            this.currentIndex = this.materialInformation.materialImage.length;
          }
          this.currentIndex--;
        }
      },
      // 点击控制圆点
      changeImg(index) {
        this.currentIndex = index
      },
      //鼠标移入移出控制
      changeInterval(val) {
        if (val) {
          clearInterval(this.timer)
        } else {
          this.startInterval()
        }
      }
    },
    created() {
      this.source = 'http://localhost:8080/#/' + this.$route.params.source;
      this.index = this.$route.params.id;
      this.materialInformation = this.$route.params.material;
      this.unit5[0].text2 = this.materialInformation.materialWorkPoint;
      this.unit5[1].text2 = this.materialInformation.materialType;
      this.unit5[2].text2 = this.materialInformation.materialCraft;
      this.unit5[3].text2 = this.materialInformation.materialColor;
    },
    //进入页面后启动定时轮询
    mounted() {
      this.startInterval()
    }
  }
</script>

<style scoped>
  .page {
    width: 30rem;
    background-color: rgb(245, 245, 245);
  }

  /* 清除li前面的圆点 */
  /* li {
    list-style-type: none;
  } */

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
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }

  /* 轮播图片 */
  .unit1 img {
    position: relative;
    min-width: 50%;
    max-width: 100%;
    max-height: 20rem;
    border-radius: 5%;
  }

  /* 箭头图标 */
  .iconDiv {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid #666;
    border-radius: 1rem;
    background-color: rgba(125, 125, 125, .2);
    line-height: 2rem;
    text-align: center;
    font-size: 1.6rem;
    cursor: pointer;
  }
  .iconDiv:hover {
    background-color: white;
  }

  /* 控制圆点 */
  .banner-circle {
    position: absolute;
    bottom: 0;
    transform: translateX(25%);
    width: 100%;
    height: 1.3rem;
  }

  .banner-circle ul {
    margin: 0 3rem;
    margin-bottom: 13rem;
    height: 100%;
  }

  .banner-circle ul li {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 0.3rem;
    border-radius: 0.5rem;
    background-color: rgba(200, 200, 200, 0.8);
    cursor: pointer;
  }

  .active {
    background-color: black !important;
  }

  .unit2 {
    width: 95%;
    height: 2.5rem;
    padding-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .collectIcon {
    height: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(230, 230, 230);
    border-radius: 40% 0% 0% 40%;
  }

  .unit3 {
    width: 100%;
    height: 1.2rem;
    padding-left: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .unit4 {
    width: 84%;
    height: auto;
    padding: 0% 8% 1% 8%;
    display: flex;
    justify-content: flex-start;
  }

  .unit5 {
    width: 90%;
    height: 8rem;
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgb(255, 254, 225);
    border-radius: 0.8rem;
    border: 0.1rem solid rgb(235, 235, 230);
  }

  .basicUnit5 {
    width: 80%;
    height: 100%;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .unit6 {
    width: 86%;
    height: auto;
    margin: 5% 7% 5% 7%;
    display: block;
    border: 0.15rem solid bisque;
    border-radius: 1rem;
    background-color:bisque;
  }
  .bkqs{
    width: 100%;
    height: 2rem;
    text-align:center;
  }
  .tips{
    width: 90%;
    margin:0 7% 0 3%;
  }

  .unit7 {
    width: 80%;
    height: 6rem;
    margin-top: 1rem;
    margin-left: 10%;
    margin-right: 10%;
    background-color: rgb(255, 255, 255);
    border-radius: 5%;
  }

  .shopsName {
    transform: translateX(7%);
    width: 85%;
    height: 50%;
    display: flex;
    border-bottom: 0.05rem solid rgb(140, 140, 140);
    align-items: center;
  }

  .shopsCityPhone {
    transform: translateX(7%);
    width: 85%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .unit8{
    width: 100%;
    height: auto;
    margin-top: 3rem;
  }
  .unit8 img{
    width: 100%;
    height: auto;
  }
</style>
