const app = getApp()
Page({
  data: {
    datalist: []
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
      url: '/pages/videosDetail/videosDetail'
    })
  },
  onLoad: function () {
    let that = this
    wx.cloud.database().collection("news").where({
      type: "视频"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          datalist: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }

    })
  }
})