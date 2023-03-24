<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.0rem; font-weight: 600; color: rgb(40, 40, 40);">上 传 装 修 材 料 案 例</p>
    </div>
    <a  href="http://localhost:8080/#/user"><img class="goback" src="@/assets/goback.png"/></a>
    <div style="height: 3rem;"></div> <!-- 留一段空白 -->
    <div class="unit1">
      <img class="materialImage" :src="materialImagePath"></img>
    </div>
    <div class="unit2">
      <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(140,80,80);">填写装修材料名称:&nbsp;</p>
      <input type="text" maxlength=16 style="width: 50%; font-size: 1.0rem; font-weight: bolder; color: rgb(140,80,80);"/>
    </div>
    <div class="unit3">
      <p style="font-size: 0.9rem; color: rgb(207, 66, 19);">¥ 预算价位</p>
      <input type="text" maxlength=8 value="(填单价,如10)" style="width: 20%; font-weight: bold; font-size: 0.9rem; color: rgb(207, 66, 19); margin-left: 5%;"/>
      <input type="text" maxlength=9 value="(填单位:如元/㎡)" style="width: 25%; font-size: 0.9rem; color: rgb(0, 0, 0); margin-left: 1%;"/>
    </div>
    <div class="unit4">
      <p style="width: 25%; font-size: 0.9rem; color: rgb(100, 100, 100);">填写材料介绍，不超过100字:</p>
      <textarea rows=5 maxlength=100 style="width: 75%; height: 5rem; font-size: 0.9rem; color: rgb(40, 40, 40);"></textarea>
    </div>
    <div class="unit5">
      <div v-for="(item,index) in unit5" :key="index" style="display: inline-block; width: 50%; height: 50%">
        <div class="basicUnit5">
          <div style="width: 30%; height: 100%; display: flex; align-items: center; justify-content: center;">
            <img style="height: 50%;" :src="item.iconPath"></img>
          </div>
          <div style="width: 70%; height: 100%; text-align: center;">
            <p style="font-size: 0.8rem; font-weight: 600; color: rgb(100, 100, 100);">{{item.text1}}</p>
            <div v-if="index==0" style="width: 90%; margin-left: 5%;">
              <el-select v-model="speciesValue" placeholder="请选择" @change="pickChange">
                <el-option v-for="item in materialSpecies" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </div>
            <div v-else-if="index==1" style="width: 90%; margin-left: 5%;">
              <el-select v-model="categoryValue" placeholder="请选择">
                <el-option v-for="item in materialSpecies[speciesValue].category" :label="item.name" :value="item.id" :key="item.id"></el-option>
              </el-select>
            </div>
            <div v-else>
              <input type="text" maxlength=10 :value="item.text2" style="width: 90%; margin-left: 5%;font-size: 1.0rem; color: rgb(61,128,234);"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="unit4">
      <p style="width: 25%; font-size: 0.9rem; color: rgb(100, 100, 100);">填写注意事项，不超过100字:</p>
      <textarea rows=5 maxlength=100 style="width: 75%; height: 5rem; font-size: 0.9rem; color: rgb(40, 40, 40);"></textarea>
    </div>
    <div style="height: 5rem;"></div> <!-- 留一段空白 -->
    <div class="bottom">
      <input type="button" value="确认上传" style="width: 30%; height: 70%; font-size: 1.0rem; font-weight: bold;color:rgb(56, 19, 218);"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadMaterial',
    data() {
      return {
        materialImagePath: '../../../static/material_example/materialImage00200.jpg',
        materialSpecies: '',
        speciesValue: 0,
        categoryValue: 0,
        unit5: [{
            'iconPath': '../../../static/workpoint.png',
            'text1': '材料大类:',
            'text2': '如：地板'
          },
          {
            'iconPath': '../../../static/material.png',
            'text1': '材料小类:',
            'text2': '如：木纹砖'
          },
          {
            'iconPath': '../../../static/craft.png',
            'text1': '材料工艺:',
            'text2': '如：釉面砖'
          },
          {
            'iconPath': '../../../static/color.png',
            'text1': '材料色泽:',
            'text2': '如：仿橡木'
          }
        ]
      }
    },
    methods: {
       pickChange(){
        this.categoryValue = 0;
      },
    },
    created() {
      this.materialSpecies = this.global.materialSpecies;
    }
  }
</script>

<style scoped>
  .page {
    width: 30rem;
    background-color: rgb(245, 245, 245);
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
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .materialImage {
    min-width: 45%;
    max-width: 90%;
    max-height: 12rem;
    border-radius: 5%;
    border: 0.2rem dotted rgb(100,100,100);
  }

  .unit2 {
    width: 95%;
    height: 2.5rem;
    padding-left: 5%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    width: 90%;
    height: auto;
    padding: 2% 5% 2% 5%;
    display: flex;
    justify-content: flex-start;
  }

  .unit5 {
    width: 90%;
    height: 12rem;
    margin-left: 5%;
    margin-right: 5%;
    background-color: rgb(255, 250, 230);
    border-radius: 10%;
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
