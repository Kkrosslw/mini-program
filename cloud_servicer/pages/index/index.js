Page({
  //小程序加载index页面时执行onLoad方法
  dataList:[],
  swiperList: [],
  onLoad() {
    this.getHomeList(); //调用网络请求的方法：getHomeList
  },

  navbtn(event) {
    const that = this;
    const id = event.currentTarget.dataset.id;
    let ballType = '0';
    that.setData({
      gameType: id,
      ballType: ballType,
    })
  },
  //ball
  go(event) {
    console.log(event);
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })

  },

  getSwiperList() {
    let that = this;
    wx.request({
      url: 'http://203.195.254.200/news/img1.php',
      success(res) {
        // console.log(res.data);
        if (res.data.code == 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  //获取网络数据
  getHomeList() {
    let that = this
    wx.request({
      url: "http://203.195.254.200/toutiao",
      success: function(res) { //请求成功
       
        // console.log("请求成功",res); //在调试器里打印网络请求到的json数据
         that.setData({
          dataList:res.data
        })
      },
      fail: function(err) { // 请求失败
        // console.log("请求失败", err); 
      }
    })
  }
})