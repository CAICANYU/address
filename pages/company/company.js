var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabId:0,
    tabId2:0,
    tap:[
      {name:'综合',id:0,},
      {name:'美食',id:1,},
      {name:'距离',id:2,},
      {name:'筛选',id:3,},
    ],
    hotCompany:[
      {
        pic:'/image/hot.jpg',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.34
      },{
        pic:'/image/p1.png',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.14
      },{
        pic:'/image/p2.png',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.11
      },{
        pic:'/image/p3.png',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.03
      },{
        pic:'/image/p3.png',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.03
      },{
        pic:'/image/p3.png',
        title:'喜东东便利超市',
        label:[
          {
            name:'超市',
            color:'red'
          },{
            name:'便利店',
            color:'#3e67d9'
          },
        ],
        city:'中山',
        town:'石岐区',
        distance:1.03
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * companyDetail
   */
  companyDetail: function () {
    wx.navigateTo({
      url:'/pages/companyDetail/companyDetail'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  tabSort: function (e) {
    var _this = this;
    _this.setData({
      tabId:e.currentTarget.dataset.id
    })
  },

  tabSort2: function (e) {
    var _this = this;
    _this.setData({
      tabId2:e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    if(app.globalData.address){
      _this.setData({
        address:app.globalData.address
      })
    }
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