const zgyIP = "116.56.143.162";
const zgyPort = "3308";
const zgyUser = "root";
const zgyPw = "mysql@b8_102_scut_3308";
const zgyVersion = "5.7.21";
const testState = 0;
const isShops = false;
const houseArea = 120;
const houseLevel = 2;
const houseStyle = 1;
const houseNumber = {
  room: 3,
  livingroom: 2,
  kitchen: 1,
  toilet: 2,
  balcony: 1
};

const materialSpecies = [{
  id: 0,
  name: "泥工",
  category: [{id: 0, name:"水泥"},{id: 1, name:"瓷砖"},{id: 2, name:"地板"},
  {id: 3, name:"墙壁"},{id: 4, name:"油漆"},{id: 5, name:"美缝"},{id: 6, name:"其他"}]
},{
  id: 1,
  name: "水电工程",
  category: [{id: 0, name:"水管"},{id: 1, name:"水龙头"},{id: 2, name:"地漏"},
  {id: 3, name:"电线"},{id: 4, name:"开关插座"},{id: 5, name:"其他"}]
},{
  id: 2,
  name: "木工",
  category: [{id: 0, name:"吊顶"},{id: 1, name:"橱柜"},{id: 2, name:"门"},
  {id: 3, name:"窗"},{id: 4, name:"床"},{id: 5, name:"其他"}]
},{
  id: 3,
  name: "家电",
  category: [{id: 0, name:"空调"},{id: 1, name:"冰箱"},{id: 2, name:"热水器"},
  {id: 3, name:"油烟机"},{id: 4, name:"灯具"},{id: 5, name:"其他"}]
}
];

export default {
  testState,
  isShops,
  houseArea,
  houseLevel,
  houseStyle,
  houseNumber,
  materialSpecies
};
