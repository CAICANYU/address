// component/wx-index-list/wx-index-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { 
        this.resetRight(newVal);
        if(wx.getStorageSync('historyAddress')){
          this.setData({
            historyAddress:wx.getStorageSync('historyAddress')
          })
        }
      }
    },
    myCity: {
      type: String,
      value: "",
    },
    // 用于外部组件搜索使用
    search:{
      type:String,
      value:"",
      observer: function (newVal, oldVal) { 
        console.log(newVal)
        this.value = newVal;
        this.searchMt();
      }
    }
  },

  data: {
    inputValue: '',
    list: [],
    rightArr: [],// 右侧字母展示
    jumpNum: '',//跳转到那个字母
    myCityName: '请选择', // 默认我的城市
    screenHeight:wx.getSystemInfoSync().screenHeight,
    historyAddress:null,
  },
  ready() {
    let data = this.data.data;
    this.resetRight(data);
    if (this.data.myCity) {
      this.getCity()
    }
  },
  methods: {
    // 数据重新渲染
    resetRight(data) {
      let rightArr = []
      for (let i in data) {
        rightArr.push(data[i].title.substr(0, 1));
      }
      this.setData({
        list: data,
        rightArr
      })
    },
    getCity() {
      var _this = this;
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          _this.latitude = res.latitude;
          _this.longitude = res.longitude;
          console.log(res)
        }
      })
    },
    // 右侧字母点击事件
    jumpMt(e) {
      let jumpNum = e.currentTarget.dataset.id;
      this.setData({jumpNum:jumpNum});
      console.log(this.data.jumpNum,'jumpNum')
    },
    // 列表点击事件
    detailMt(e) {
      let detail = e.currentTarget.dataset.detail;
      if(e.currentTarget.dataset.mycity){
        var mycity = {
          name:detail,
          key:'我的城市'
        }
        detail = mycity
      }
      
      let myEventOption = {
        bubbles: false,//事件是否冒泡
        composed: false,//事件是否可以穿越组件边界
        capturePhase: false //事件是否拥有捕获阶段
      } // 触发事件的选项
      this.triggerEvent('detail', detail, myEventOption);
      console.log(detail,'detail');
      if(wx.getStorageSync('historyAddress')){
        var arr = wx.getStorageSync('historyAddress');
        for(var i=0;i<arr.length;i++){
          if(arr[i].name==detail.name){
            var arr1 = arr[i];
            var arr2 = arr[0];
            var arr3 = [];
            arr3 = arr1; 
            arr[i] = arr[0];
            arr[0] = arr3;
            wx.setStorageSync('historyAddress',arr)
            break;
          }
          if(i==arr.length-1){
            // var aa= [
            //   {name:detail.name,key:detail.key}
            // ];
            // aa.push(detail)
            // arr[arr.length] = detail; 
            arr = prepend(arr,detail); 
            wx.setStorageSync('historyAddress',arr);
            function prepend(arr, item) {
                 //将arr数组复制给a
                 var a = arr.slice(0);
                 //使用unshift方法向a开头添加item
                 a.unshift(item);
                 return a;
             }
            break;
          }
        }
      }else{
        var newArr = [];
        newArr.push(detail);
        wx.setStorageSync('historyAddress',newArr)
      }
      
      // wx.setStorageSync('historyAddress',_this.data.myConcern);
    },
    // 获取搜索输入内容
    input(e) {
      this.value = e.detail.value;
      this._search();
      this.setData({
        inputValue:e.detail.value
      })
    },
    clear() {
      this.value = '';
      this.setData({
        inputValue:''
      })
      this._search();
    },
    // 基础搜索功能
    searchMt() {
      this._search();
    },
    _search(){
      console.log("搜索")
      let data = this.data.data;
      let newData = [];
      for (let i = 0; i < data.length; i++) {
        let itemArr = [];
        for (let j = 0; j < data[i].item.length; j++) {
          if (data[i].item[j].name.indexOf(this.value) > -1) {
            let itemJson = {};
            for (let k in data[i].item[j]) {
              itemJson[k] = data[i].item[j][k];
            }
            itemArr.push(itemJson);
          }
        }
        if (itemArr.length === 0) {
          continue;
        }
        newData.push({
          title: data[i].title,
          type: data[i].type ? data[i].type : "",
          item: itemArr
        })
      }
      this.resetRight(newData);
    },
    // 城市定位
    locationMt() {

      // TODO 暂时没有实现 定位自己的城市，需要引入第三方api
    }

  }
})
