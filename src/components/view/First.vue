<template>
  <div class="page">
    <div class="background">
      <img class="backgroundImage" src="@/assets/background.png"></img>
    </div>
    <div class="top">
      <div class="searchBoard">
        <img class="searchImage" src="@/assets/search.png" @click="searchMaterial()"></img>
        <input type="text" class="inputBoard" maxlength=15 v-model="search" />
      </div>
    </div>

    <div class="middle">
      <!-- 注意！注意！注意！这里循环遍历的是items，不再是data里的list数组 -->
      <div v-for="(item,index) in items" :key="index">
        <div class="recommendMaterial">
          <router-link style="text-decoration: none;"
            :to="{name:'Material',params:{source:'first', id:index, material:item}}">
            <img class="materialImage" :src="item.materialImage[0].url"></img>
            <div class="materialName">
              <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(113, 64, 64); text-decoration: none;">
                {{item.materialName}}
              </p>
            </div>
            <div class="materialAd">
              <p style="font-size: 0.6rem; color: rgb(140,140,140);">{{item.materialAd}}</p>
            </div>
            <div class="materialData">
              <div class="materialPrice">
                <p style="font-size: 1.0rem; font-weight: bolder; color: rgb(227, 138, 86);">¥
                  {{item.materialPrice}}{{item.materialMessurement}}
                </p>
              </div>
              <div class="materialBuy">
                <p style="font-size: 0.7rem; color: rgb(166, 176, 18);">销量:{{item.materialBuyData}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div style="height: 5rem;"></div> <!-- 因为有底部栏要留出一段空白 -->
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
          <img class="buttonIcon" src="@/assets/first11.svg"></img>
          <p style="font-size: 0.7rem; color: rgb(61,128,234);">发现</p>
        </div>
      </div>
      <div class="unit">
        <div style="text-align: center; height: 70%;">
          <a href="http://localhost:8080/#/user"><img class="buttonIcon" src="@/assets/user00.svg"></img></a>
          <div v-if="global.isShops == true">
            <p style="font-size: 0.7rem; color: rgb(185,185,185);">商家</p>
          </div>
          <div v-else>
            <p style="font-size: 0.7rem; color: rgb(185,185,185);">用户</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    inject: ['reload'],
    name: "First",
    data() {
      return {
        msg: "Welcome to first app",
        searchInput: '大家正在搜:地板',
        recommendGroup: [],
        search: '',
        recommendGroup1: //推荐装修材料的集合
          [{
              "materialName": "大理石电视背景墙",
              "materialAd": "吸音降噪 保护墙面 简约大气",
              "materialImage": [{
                  "id": 0,
                  "url": "../../../static/material_example/materialImage00100.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_example/materialImage00101.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_example/materialImage00102.jpg"
                }
              ],
              "materialIntroduction": [{
                  "id": 0,
                  "url": "../../../static/material_introduction/materialIntroduction00100.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_introduction/materialIntroduction00101.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_introduction/materialIntroduction00102.jpg"
                }
              ],
              "materialBuyData": 1000,
              "materialCollectData": 50,
              "materialPrice": 200,
              "materialMessurement": "/㎡",
              "materialWorkPoint": "泥工",
              "materialType": "墙壁",
              "materialCraft": "大理石",
              "materialColor": "多种颜色",
              "materialShopsName": "吾托邦装饰有限公司",
              "materialShopsCity": "广州市",
              "materialShopsPhone": "020-12345678",
              "materialDescription": "电视背景墙的装修材料有很多，常见的有大理石、墙纸、装饰条、集成板等，而用乳胶漆来装饰电视背景墙是最简单也最省钱的装修方式。白色乳胶漆墙面，挂上液晶电视，再配上一张原木色的电视柜，简洁干净特别清爽，特别适合简约风格装修的客厅。",
              "materialTips": [
                "相关工艺：无",
                "切割方法：无",
                "搬运方法：无",
                "配置方法：无",
                "安装方法：无",
                "使用方法：无",
                "保养方法：无",
                "安全注意事项：无"
              ]
            },
            {
              "materialName": "橡木木纹砖",
              "materialAd": "纹路逼真 自然朴实 防水耐腐蚀",
              "materialImage": [{
                  "id": 0,
                  "url": "../../../static/material_example/materialImage00200.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_example/materialImage00201.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_example/materialImage00202.jpg"
                },
                {
                  "id": 3,
                  "url": "../../../static/material_example/materialImage00203.jpg"
                },
                {
                  "id": 4,
                  "url": "../../../static/material_example/materialImage00204.jpg"
                }
              ],
              "materialIntroduction": [{
                  "id": 0,
                  "url": "../../../static/material_introduction/materialIntroduction00200.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_introduction/materialIntroduction00201.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_introduction/materialIntroduction00202.jpg"
                }
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
              "materialImage": [{
                  "id": 0,
                  "url": "../../../static/material_example/materialImage00300.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_example/materialImage00301.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_example/materialImage00302.jpg"
                }
              ],
              "materialIntroduction": [{
                  "id": 0,
                  "url": "../../../static/material_introduction/materialIntroduction00300.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_introduction/materialIntroduction00301.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_introduction/materialIntroduction00302.jpg"
                }
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
                "安全注意事项：无"
              ]
            },
            {
              "materialName": "黑桃木书柜",
              "materialAd": "纯实木 简约现代 北欧书房",
              "materialImage": [{
                  "id": 0,
                  "url": "../../../static/material_example/materialImage00400.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_example/materialImage00401.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_example/materialImage00402.jpg"
                }
              ],
              "materialIntroduction": [{
                  "id": 0,
                  "url": "../../../static/material_introduction/materialIntroduction00400.jpg"
                },
                {
                  "id": 1,
                  "url": "../../../static/material_introduction/materialIntroduction00401.jpg"
                },
                {
                  "id": 2,
                  "url": "../../../static/material_introduction/materialIntroduction00402.jpg"
                },
                {
                  "id": 3,
                  "url": "../../../static/material_introduction/materialIntroduction00403.jpg"
                },
                {
                  "id": 4,
                  "url": "../../../static/material_introduction/materialIntroduction00404.jpg"
                },
                {
                  "id": 5,
                  "url": "../../../static/material_introduction/materialIntroduction00405.jpg"
                }
              ],
              "materialBuyData": 10,
              "materialCollectData": 2,
              "materialPrice": 4000,
              "materialMessurement": "/件",
              "materialWorkPoint": "木工",
              "materialType": "橱柜",
              "materialCraft": "纯实木",
              "materialColor": "黑胡桃木",
              "materialShopsName": "吾托邦装饰有限公司",
              "materialShopsCity": "广州市",
              "materialShopsPhone": "020-12345678",
              "materialDescription": "它不仅是书柜，也是一个很好的展示柜，摒弃传统中式博古架的繁复，只有简洁流畅的线条以及温润黑胡桃木的细腻美感，把珍藏的纪念品都摆上去，让家里充满艺术气息，不仅美，还能随意搭配组合，打造专属你的私人图书馆。",
              "materialTips": [
                "相关工艺：无",
                "切割方法：无",
                "搬运方法：无",
                "配置方法：无",
                "安装方法：无",
                "使用方法：无",
                "保养方法：无",
                "安全注意事项：无"
              ]
            }
          ]
      };
    },
    computed: {
      //过滤方法
      items: function() {
        //先判断search里有无内容，用户没输入就不要匹配空字符串了
        var _search = this.search;
        if (_search) {
          //不区分大小写处理
          var reg = new RegExp(_search, 'ig')
          //es6 filter过滤匹配，有则返回当前，无则返回所有
          return this.recommendGroup.filter(function(e) {
            //匹配所有字段（只有字符串能用match函数匹配，否则会报错）
            // return Object.keys(e).some(function(key) {
            //   return e[key].match(reg);
            // })
            //匹配某个字段
            return e.materialName.match(reg);
          })
        };
        return this.recommendGroup;
      }
    },
    methods: {
      searchMaterial: function() {
        // if (this.global.testState != 2) this.global.testState = 2;
        // else if (this.global.testState == 2) this.global.testState = 0;
        // this.reload();
      }
    },
    created() {
      // let id = this.$route.params.id;
      // console.log(id)
      // console.log(this.global.isShops)
      for (var i = 0; i < 2; i++) {
        if (this.global.testState == 0) {
          this.recommendGroup.push(this.recommendGroup1[0]);
          this.recommendGroup.push(this.recommendGroup1[1]);
          this.recommendGroup.push(this.recommendGroup1[2]);
          this.recommendGroup.push(this.recommendGroup1[3]);
        } else if (this.global.testState == 1) {
          this.recommendGroup.push(this.recommendGroup1[1]);
          this.recommendGroup.push(this.recommendGroup1[2]);
          this.recommendGroup.push(this.recommendGroup1[0]);
          this.recommendGroup.push(this.recommendGroup1[3]);
        } else {
          this.recommendGroup.push(this.recommendGroup1[1]);
        }
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

  .searchBoard {
    width: 95%;
    height: 80%;
    position: relative;
    background-color: rgb(239, 239, 239);
    border-top-left-radius: 1.8rem;
    border-top-right-radius: 1.8rem;
    border-bottom-left-radius: 1.8rem;
    border-bottom-right-radius: 1.8rem;
    overflow: auto;
    display: flex;
    align-items: center;
  }

  .searchImage {
    width: 5%;
    position: relative;
    transform: translateX(80%)
  }

  .inputBoard {
    font-size: 1.2rem;
    color: rgb(160, 160, 160);
    text-align: left;
    position: relative;
    transform: translateX(15%);
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

  .recommendMaterial {
    margin: 1rem 0;
    width: 86%;
    height: 100%;
    transform: translateX(8%);
    background-color: white;
    position: relative;
    box-shadow: 0.05rem 0.1rem 0.5rem 0.1rem rgb(170, 170, 170);
    border-radius: 6%;
    overflow: auto;
    /* display: block; */
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

  .materialBuy {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom {
    width: 30rem;
    height: 4.5rem;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: rgb(252, 252, 252);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .unit {
    width: 33%;
    height: 100%;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonIcon {
    height: 50%;
  }
</style>
