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
  go() {
    wx.navigateTo({
      url: '/pages/index1/index1',
    })

  },
  onShow() {
    console.log("onShow")
    let that = this
    wx.cloud.database().collection("news").where({
      type: "科技"
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
  },
  //点击下单按钮
  makeOrder(event) {
    //获取商品信息
    let item = event.currentTarget.dataset.item;

    console.log(event.currentTarget.dataset.item)
    wx.cloud.database().collection("order").add({
      data: {
        id: item._id,
        name: item.name,
        price: item.price
      },
      success(res) {
        console.log("提交成功")
        wx.switchTab({
          url: '../order/order',
        })
      },
      fail(res) {
        console.log("提交失败")

      }
    })
  }

})