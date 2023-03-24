<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <p style="font-size: 1.0rem; font-weight: 600; color: rgb(40, 40, 40);">我 的 收 藏 夹</p>
    </div>
    <a  href="http://localhost:8080/#/user"><img class="goback" src="@/assets/goback.png"/></a>

    <div class="middle">
      <div v-for="(item,index) in collectGroup" :key="index">
        <div class="collectMaterial">
          <router-link style="text-decoration: none;" :to="{name:'Material',params:{source:'collect', id:index, material:item}}">
            <img class="materialImage" :src="item.materialImage[0].url"></img>
            <div class="materialName">
              <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(113, 64, 64); text-decoration: none;">
                {{item.materialName}}</p>
            </div>
            <div class="materialAd">
              <p style="font-size: 0.6rem; color: rgb(140,140,140);">{{item.materialAd}}</p>
            </div>
            <div class="materialData">
              <div class="materialPrice">
                <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(227, 138, 86);">¥ {{item.materialPrice}}</p>
              </div>
              <div class="materialBuy">
                <p style="font-size: 0.7rem; color: rgb(166, 176, 18);">销量:{{item.materialBuyData}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div style="height: 3rem;"></div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "First",
    data() {
      return {
        msg: "Welcome to first app",
        searchInput: '大家正在搜:地板',
        collectGroup: //收藏夹装修材料的集合
          [
              {
                "materialName": "橡木木纹砖",
                "materialAd": "纹路逼真 自然朴实 防水耐腐蚀",
                "materialImage": [
                  {"id": 0, "url": "../../../static/material_example/materialImage00200.jpg"},
                  {"id": 1, "url": "../../../static/material_example/materialImage00201.jpg"},
                  {"id": 2, "url": "../../../static/material_example/materialImage00202.jpg"},
                  {"id": 3, "url": "../../../static/material_example/materialImage00203.jpg"},
                  {"id": 4, "url": "../../../static/material_example/materialImage00204.jpg"}
                ],
                "materialIntroduction": [
                  {"id": 0, "url": "../../../static/material_introduction/materialIntroduction00200.jpg"},
                  {"id": 1, "url": "../../../static/material_introduction/materialIntroduction00201.jpg"},
                  {"id": 2, "url": "../../../static/material_introduction/materialIntroduction00202.jpg"}
                ],
                "materialBuyData": 2300,
                "materialCollectData": 90,
                "materialPrice": 400,
                "materialMessurement": "/㎡",
                "materialWorkPoint": "泥工",
                "materialType": "地板",
                "materialCraft": "釉面砖",
                "materialColor": "卡布奇诺",
                "materialShopsName": "吾托邦装饰有限公司",
                "materialShopsCity": "广州市",
                "materialShopsPhone": "020-12345678",
                "materialDescription": "木纹砖表面经防水处理，易于清洗，可直接用水擦拭。本身具有阻燃，不腐蚀的特点，纹路逼真、自然朴实、不褪色、耐磨，易保养，防火、防水、防霉、不受虫蛀，产品使用寿命长，耐磨，无需像木制产品那样周期性地打蜡保养，是绿色、环保型建材。",
                "materialTips": [
                  "相关工艺：1.木纹砖相比木地板而言，更加环保，特别适合儿童房；2.适合有地暖的家庭，木纹砖的散热效果更好；3.耐污、防潮、抗腐蚀",
                  "切割方法：1.在热门的369铺法中，就是把砖按三等分切割来铺；2.28分则是2比8的比例，37分是3比7，工字拼是55分，切割时要按照比例切割；3.此外还有人字铺贴、鱼骨铺贴等方法，切割时材料损耗较大但是更美观",
                  "安装方法：1.通铺，不要加过门石；2.顺着一个走势铺；3.全瓷木纹砖要干铺，把水泥砂浆抹到瓷砖里再挂膏处理，更平整且不容易空鼓",
                  "保养方法：木纹砖有的会比较难擦洗，最好选择纹理数量适中（太平容易显脏，太杂容易乱）的木纹砖，填缝剂的颜色尽量靠近砖本身或选耐污颜色"
                  ]
              },
              {
                "materialName": "水晶吊灯",
                "materialAd": "客厅灯 北欧简约 现代大气",
                "materialImage": [
                  {"id": 0, "url": "../../../static/material_example/materialImage00300.jpg"},
                  {"id": 1, "url": "../../../static/material_example/materialImage00301.jpg"},
                  {"id": 2, "url": "../../../static/material_example/materialImage00302.jpg"}
                ],
                "materialIntroduction": [
                  {"id": 0, "url": "../../../static/material_introduction/materialIntroduction00300.jpg"},
                  {"id": 1, "url": "../../../static/material_introduction/materialIntroduction00301.jpg"},
                  {"id": 2, "url": "../../../static/material_introduction/materialIntroduction00302.jpg"}
                ],
                "materialBuyData": 300,
                "materialCollectData": 20,
                "materialPrice": 500,
                "materialMessurement": "/件",
                "materialWorkPoint": "家电",
                "materialType": "灯具",
                "materialCraft": "LED灯",
                "materialColor": "单色/三色",
                "materialShopsName": "吾托邦装饰有限公司",
                "materialShopsCity": "广州市",
                "materialShopsPhone": "020-12345678",
                "materialDescription": "五金磨砂灯体，电镀拉丝工艺，防腐防锈。高透光亚克力灯罩，透光均匀，耐高温，温馨舒适。灯光柔和，远离频闪炫光危害，健康安全放心。",
                "materialTips": [
                  "相关工艺：无",
                  "切割方法：无",
                  "搬运方法：无",
                  "配置方法：无",
                  "安装方法：无",
                  "使用方法：无",
                  "保养方法：无",
                  "安全注意事项：无"]
              }
          ]
      };
    },
    methods: {

    },
    created() {

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

  .middle {
    width: 100%;
    position: relative;
    transform: translateY(2.2rem);
  }

  .middle>div {
    display: inline-block;
    width: 50%;
    height: 15rem;
  }

  .collectMaterial {
    margin: 1rem 0;
    width: 86%;
    height: 100%;
    transform: translateX(8%);
    background-color: white;
    position: relative;
    box-shadow: 0.05rem 0.1rem 0.5rem 0.1rem rgb(170, 170, 170);
    border-radius: 6%;
    overflow: auto;
    display: block;
  }

  .materialImage {
    width: 100%;
    height: 65%;
  }
  
  .materialName {
    width: 100%;
    height: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .materialAd {
    width: 100%;
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .materialData {
    width: 100%;
    height: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .materialPrice {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .materialBuy{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
