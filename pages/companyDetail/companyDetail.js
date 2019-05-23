var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectIndex:0,
    article:[
      {
        articleItem:[
          {
            top:1,
            title:'雅生活集团商业经营中心总经理徐斌与ZHO...',
            breif:'ZHO共享纸巾将进驻全国雅居乐物业，进一步扩大ZHO服务范围的覆盖领域，通过ZHO智能推送功能...',
            toutiao:1,
            pic:'/image/p4.png',
            rv:2341
          },{
            top:1,
            title:'共享大脑口袋学院上线启动仪式',
            breif:'几年来，随着人们经济水平的飞速提高和二胎政策的放开，人们开始重视儿童启蒙教育',
            toutiao:0,
            pic:'/image/p5.png',
            rv:123,
          }
        ] 
      },{
        articleItem:[
          {
            top:1,
            title:'雅生活集团商业经营中心总经理徐斌与ZHO...',
            breif:'ZHO共享纸巾将进驻全国雅居乐物业，进一步扩大ZHO服务范围的覆盖领域，通过ZHO智能推送功能...',
            toutiao:1,
            pic:'/image/p4.png',
            rv:2341
          },{
            top:1,
            title:'共享大脑口袋学院上线启动仪式',
            breif:'几年来，随着人们经济水平的飞速提高和二胎政策的放开，人们开始重视儿童启蒙教育',
            toutiao:0,
            pic:'/image/p5.png',
            rv:123,
          }
        ] 
      },{
        articleItem:[
          {
            top:1,
            title:'雅生活集团商业经营中心总经理徐斌与ZHO...',
            breif:'ZHO共享纸巾将进驻全国雅居乐物业，进一步扩大ZHO服务范围的覆盖领域，通过ZHO智能推送功能...',
            toutiao:1,
            pic:'/image/p4.png',
            rv:2341
          },{
            top:1,
            title:'共享大脑口袋学院上线启动仪式',
            breif:'几年来，随着人们经济水平的飞速提高和二胎政策的放开，人们开始重视儿童启蒙教育',
            toutiao:0,
            pic:'/image/p5.png',
            rv:123,
          }
        ] 
      },{
        articleItem:[
          {
            top:1,
            title:'雅生活集团商业经营中心总经理徐斌与ZHO...',
            breif:'ZHO共享纸巾将进驻全国雅居乐物业，进一步扩大ZHO服务范围的覆盖领域，通过ZHO智能推送功能...',
            toutiao:1,
            pic:'/image/p4.png',
            rv:2341
          },{
            top:1,
            title:'共享大脑口袋学院上线启动仪式',
            breif:'几年来，随着人们经济水平的飞速提高和二胎政策的放开，人们开始重视儿童启蒙教育',
            toutiao:0,
            pic:'/image/p5.png',
            rv:123,
          }
        ] 
      },
    ],
    companyBreif:'ZHO共享纸巾作为全国首个纸巾免费领取智能设备，由广东共享纸巾网络科技有限公司管理与运营，以人们生活中的刚需为切入点，通过“扫一扫，免费领取”的形式，打造随时随地可以方便领取纸巾使用的大环境，简单便捷地解决人们的用纸问题。减免餐饮商户纸巾购买的成本支出，最终实现资源共享。目前ZHO共享纸巾机已覆盖300多个城市，投放纸巾机近20万多台，每天服务市民即将突破500万人次，投放地包含花园小区、市场、医院、商圈、酒店、旅游景区、办公写字楼、大学校园等等，为市民提供纸巾免费使 用的共享服务，构建共享经济下的一种新型纸巾消费模式。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _this = this;
    wx.getLocation({
     type: 'wgs84',
     success (res) {
       const latitude = res.latitude
       const longitude = res.longitude
       const speed = res.speed
       const accuracy = res.accuracy
       _this.setData({
          latitude:latitude,
          longitude:longitude,
       })
     }
    })
  },
  /**
   * articleDetail--
   */
  informationDetail: function () {
    wx.navigateTo({
      url:'/pages/informationDetail/informationDetail'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  tel: function (e) {
    var _this = this;
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel //仅为示例，并非真实的电话号码
    })
  },

  service: function (e) {
    var _this = this;
    wx.navigateTo({
      url:'/pages/service/service'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  email: function (e) {
    var _this=this;
    wx.setClipboardData({
      data: e.currentTarget.dataset.email,
      success: function(res) {
        wx.showToast({title:'已复制',icon:'none'})
      }
    });
  },
  /**
   * 滑动切换触发函数
   */
  bindChange: function (e) {
    var _this = this;
    _this.setData({
      selectIndex:e.detail.current
    })
  },

  leftSwiper:function(e){
    var _this = this;
    if(e.currentTarget.dataset.id==0){
      wx.showToast({
        title:'暂无更多',
        icon:'none'
      })
    }else{
      _this.setData({
        selectIndex:--_this.data.selectIndex
      })
    }
  },
  rightSwiper:function(e){
    var _this = this;
    if(e.currentTarget.dataset.id==_this.data.article.length-1){
      wx.showToast({
        title:'暂无更多',
        icon:'none'
      })
    }else{
      _this.setData({
        selectIndex:++_this.data.selectIndex
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})