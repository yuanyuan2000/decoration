<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(0,0,0);">您 的 采 购 计 划</p>
    </div>
    <div class="plan_list">
    	<div v-for="(item,index) in planGroup" :key="index">
        <div class="plan">
          <div class="plan_image">
            <img class="planImage"  :src="item.planImg"></img>
          </div>
          <div class="plan_content">
            <div class="planName">
              <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(140,80,80);">{{item.planName}}</p>
            </div>
            <div class="planType">
              <p style="font-size: 0.8rem; color: rgb(50,50,50);">{{item.planType}}</p>
            </div>
            <div class="planType">
              <p style="font-size: 0.8rem; color: rgb(50,50,50);">材料需求量(单位:㎡):</p>
              <input type="text" class="inputBoard" maxlength=6 value="0" />
            </div>
            <div class="planType">
              <p style="font-size: 0.8rem; color: rgb(50,50,50);;">预期单价(单位:¥/㎡):</p>
              <input type="text" class="inputBoard" maxlength=6 value="0" />
            </div>
          </div>
    		</div>
    	</div>
      <div style="height: 5rem;"></div> <!-- 因为有底部栏要留出一段空白 -->
    </div>

    <div class="bottom">
      <div class="unit">
        <div style="text-align: center; height: 70%;">
          <img class="buttonIcon" src="@/assets/purchase11.svg"></img>
          <p style="font-size: 0.7rem; color: rgb(61,128,234);">采购</p>
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
          <a href="http://localhost:8080/#/user"><img class="buttonIcon" src="@/assets/user00.svg"></img></a>
          <div v-if="global.isShops == true"><p style="font-size: 0.7rem; color: rgb(185,185,185);">商家</p></div>
          <div v-else><p style="font-size: 0.7rem; color: rgb(185,185,185);">用户</p></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Purchase",
    data() {
      return {
        planGroup: //购物车采购计划集合
        [
          {
            "planName": "大理石电视背景墙",
            "planType": "材料类型：电视背景墙",
            "planImg": "../../../static/material_example/materialImage00100.jpg"
          }
        ],
        selectedCityId: '',
        citys: [{
            id: 1,
            name: '北京'
          },
          {
            id: 2,
            name: '上海'
          }
        ]
      }
    }
  };
</script>

<style scoped>
  .page {
    width: 30rem;
  }

  .background{
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
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .plan_list{
    width: 100%;
    position: relative;
    transform: translateY(3rem);
  }
  .middle>div{
    display: inline-block;
    width: 100%;
    height: 15rem;
  }
  .plan{
    margin: 1rem 0;
    width: 85%;
    height: 80%;
    transform: translateX(9%);
    background-color: white;
    position: relative;
    box-shadow: 0.1rem 0.2rem 0.3rem 0.2rem rgb(51, 57, 140);
    border-radius: 6%;
    overflow: auto;
    display: flex;
  }
  .plan_image{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .planImage{
    width: 80%;
    height: 80%;
    border-radius: 10%;
    border-color: rgb(99, 99, 99);
    border-width: 1.2rem;
  }
  .plan_content{
    width: 50%;
    /* height: 70%; */
  }
  .planName{
    width: 100%;
    height: 10%;

  }
  .planType{
    width: 100%;
    height: 15%;
    display: flex;
  }
  .inputBoard {
    width: 25%;
    font-size: 0.7rem;
    color: rgb(60, 60, 60);
    text-align: left;
    position: relative;
    top: 40%;
    transform: translateX(15%);
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
