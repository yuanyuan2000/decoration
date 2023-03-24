<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.0rem; font-weight: 600; color: rgb(40, 40, 40);">填 写 装 修 需 求</p>
    </div>
    <a href="http://localhost:8080/#/user"><img class="goback" src="@/assets/goback.png" /></a>
    <div style="height: 3rem;"></div> <!-- 留一段空白 -->
    <div class="user_info_wrap">
      <div class="user_info">
        <img class="user_icon" src="@/assets/lovecodingmonkey.jpg"></img>
        <div class="user_name">
          <p style="font-size: 1.2rem; font-weight: bolder; color: rgb(20,20,20);">{{nickName}}</p>
        </div>
      </div>
    </div>
    <div class="user_content">
      <div class="user_main">
        <div class="wrap">
          <div class="wrap_item">
            <p style="width: 27%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">房屋面积&nbsp;&nbsp;</p>
            <input ref="houseArea" :value="houseArea" type="number" oninput="if(value>1000)value=1000;if(value<0)value=0"
              style="width: 58%; font-size: 1.0rem; color: rgb(20,20,20);" />
            <p style="width: 15%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">&nbsp;&nbsp;㎡</p>
          </div>
          <div class="wrap_item">
            <p style="width: 25%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">装修档次&nbsp;&nbsp;</p>
            <el-select class="select_item1" v-model="houseLevel" placeholder="请选择">
              <el-option v-for="item in strLevel" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </div>
          <div class="wrap_item">
            <p style="width: 25%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">房屋户型&nbsp;&nbsp;</p>
            <el-select class="select_item" v-model="houseNumber.room" placeholder="请选择">
              <el-option v-for="item in strRoom" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
            <el-select class="select_item" v-model="houseNumber.livingroom" placeholder="请选择">
              <el-option v-for="item in strLivingRoom" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
            <el-select class="select_item" v-model="houseNumber.kitchen" placeholder="请选择">
              <el-option v-for="item in strKitchen" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </div>
          <div class="wrap_item">
            <p style="width: 25%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">&nbsp;&nbsp;</p>
            <el-select class="select_item" v-model="houseNumber.toilet" placeholder="请选择">
              <el-option v-for="item in strToilet" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
            <el-select class="select_item1" v-model="houseNumber.balcony" placeholder="请选择">
              <el-option v-for="item in strBalcony" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
          </div>
          <div class="wrap_item">
            <p style="width: 25%; font-size: 1.0rem; font-weight: bold; color: rgb(20,20,20);">装修风格&nbsp;&nbsp;</p>
            <el-select class="select_item2" v-model="houseStyle" placeholder="请选择">
              <el-option v-for="item in strStyle" :label="item.name" :value="item.id" :key="item.id"></el-option>
            </el-select>
            <input type="button" value="风格测试" class="testButton" @click="gotoTest()" />
          </div>
          <div class="wrap_item1">
            <input type="button" value="保存装修需求" class="calculateButton" @click="getData()" />
          </div>
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
        nickName: "爱敲代码的猿猿",
        houseArea: 0,
        houseLevel: 1,
        houseStyle: 1,
        houseNumber:{
          room: 3,
          livingroom: 2,
          kitchen: 1,
          toilet: 2,
          balcony: 1
        },
        strLevel: [{id: 1,name: '简装'}, {id: 2,name: '精装'}, {id: 3,name: '豪装'}],
        strStyle: [{id: 1,name: '新中式风'}, {id: 2,name: '美式风'}, {id: 3,name: '欧式风'}, {id: 4,name: '北欧风'}, {id: 5,name: '现代简约风'}],
        strRoom: [{id: 1,name: '1室'}, {id: 2,name: '2室'}, {id: 3,name: '3室'}, {id: 4,name: '4室'}, {id: 5,name: '5室'}, {id: 6,name: '6室'}],
        strLivingRoom: [{id: 0,name: '0厅'}, {id: 1,name: '1厅'}, {id: 2,name: '2厅'}, {id: 3,name: '3厅'}],
        strKitchen: [{id: 0,name: '0厨'}, {id: 1,name: '1厨'}, {id: 2,name: '2厨'}, {id: 3,name: '3厨'}],
        strToilet: [{id: 0,name: '0卫'}, {id: 1,name: '1卫'}, {id: 2,name: '2卫'}, {id: 3,name: '3卫'}],
        strBalcony: [{id: 0,name: '0阳台'}, {id: 1,name: '1阳台'}, {id: 2,name: '2阳台'}, {id: 3,name: '3阳台'}]
      }
    },
    methods: {
      getData: function() {
        this.global.houseArea = Number(this.$refs.houseArea.value);
        this.global.houseLevel = this.houseLevel;
        this.global.houseNumber = this.houseNumber;
        this.global.houseStyle = this.houseStyle;
        // console.log(this.global.houseArea, this.global.houseLevel, this.global.houseNumber.room,this.global.houseStyle);
        this.global.testState = 1;
      },
      gotoTest: function() {

      }
    },
    created() {
      this.houseArea = this.global.houseArea;
      this.houseLevel = this.global.houseLevel;
      this.houseStyle = this.global.houseStyle;
      this.houseNumber = this.global.houseNumber;
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
  }

  .user_icon {
    width: 35%;
    height: 35%;
    border-radius: 50%;
    border-color: rgb(99, 99, 99);
    border-width: 1.2rem;
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
    width: 86%;
    left: 7%;
    top: 50%;
  }

  .wrap {
    border: 0.1rem solid rgb(220, 220, 220);
    box-shadow: 0.05rem 0.1rem 0.1rem 0.1rem rgb(230, 230, 230);
    border-radius: 4%;
    background-color: white;
  }

  .wrap_item {
    transform: translateX(6%);
    width: 85%;
    height: 2.5rem;
    padding: 0.5rem;
    display: flex;
    /* flex: 8;
    flex-direction: row; */
    border-bottom: 0.05rem solid rgb(209, 209, 209);
    align-items: center;
  }

  .select_item {
    width: 20%;
    margin-left: 1%;
  }
  .select_item1 {
    width: 25%;
    margin-left: 1%;
  }
  .select_item2 {
    width: 35%;
    margin-left: 1%;
  }

  .wrap_item1 {
    transform: translateX(6%);
    width: 85%;
    height: 3rem;
    padding: 0.5rem;
    display: flex;
    /* flex: 8;
    flex-direction: row; */
    justify-content: center;
    align-items: center;
  }

  .testButton {
    width: 25%;
    margin-left: 10%;
    height: 80%;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    background-color: rgb(97, 112, 244);
    border-radius: 0.5rem;
  }

  .calculateButton {
    width: 90%;
    height: 80%;
    font-size: 1.0rem;
    font-weight: bold;
    color: white;
    background-color: rgb(27, 73, 244);
    border-radius: 0.5rem;
  }
</style>
