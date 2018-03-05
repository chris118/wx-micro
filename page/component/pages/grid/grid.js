// page/component/pages/grid/grid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyData: [
      { name: '品牌男装' },
      { name: '潮流女装' },
      { name: '家用电器' },
      { name: '鞋靴箱包' },
      { name: '厨房用品' },
      { name: '家居建材' },
      { name: '手机数码' }
    ],
    brandData: [
      {
        name: '品牌推荐',
        item: [
          { name: '美的' },
          { name: '海尔' },
          { name: '格力' },
          { name: '飞利浦' },
          { name: '华帝' },
          { name: '海信' },
          { name: '九阳' },
          { name: '三洋' },
          { name: '三星' },]
      },
      {
        name: '电视',
        item: [
          { name: '合资品牌' },
          { name: '国产品牌' },
          { name: '互联网品牌' }]
      },
      {
        name: '空调',
        item: [
          { name: '悬挂式空调' },
          { name: '柜式空调' },
          { name: '空调配件' },
          { name: '中央空调' }
        ]
      }



    ]
  },
  onLoad: function (options) {
    console.log(options.name);
  },
  //单击改变分栏的显示状态
  backgroundClick: function (e) {
    console.log('backgroundClick', e)
    console.log('toggle', e.target.dataset.toggle)
    if (e.target.dataset.toggle == undefined) {
      this.data.classifyData[e.target.dataset.index].toggle = true;
      for (var i = 0; i < this.data.classifyData.length; i++) {
        if (i != e.target.dataset.index) {
          this.data.classifyData[i].toggle = undefined;
        }
      }
      this.setData({
        classifyData: this.data.classifyData
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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