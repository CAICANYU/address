// let utils = require('../../utils/utils')
Component({
  properties: {
    show:{
      type:String,
      value:"",
      observer: function (newVal, oldVal) { 
        var _this = this;
        _this.setData({
          address:newVal
        })
      }
    }
  },
  data:{

  },
  methods:{
    address:function(){
      console.log('e')
      wx.navigateTo({
        url:'/pages/address/address'
      })
    },
    search:function(){
      // console.log('e')
      wx.navigateTo({
        url:'/pages/search/search'
      })
    },
    scanCode:function(){
      // 只允许从相机扫码
      wx.scanCode({
        onlyFromCamera: false,
        success: (res) => {
          console.log(res);
        }
      })
    }
  }
})