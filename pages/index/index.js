let QRCode = require('../../utils/qrcode.js').default;

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    qrtext: '',
  },
  bindKeyInput:function(e){
    var that = this;
    console.log(e.detail.value,"输入框内容")
    that.setData({
      //监听输入框事件
      qrtext: e.detail.value
    })
  },
  createQRCode:function(){
    var that = this;

    this.QR.clear();//清空二维码内之前的内容
    this.QR.makeCode(that.data.qrtext);//内容来自输入框

   //清空输入框
    that.setData({
      qrtext: ''
    })
  },
  onLoad: function () {
    //获取系统的相关信息
    let res = wx.getSystemInfoSync();
    //console.log(res);

    let qrcode = new QRCode('qrcode', {
      text: '欢迎',
      width: res.windowWidth*660/750,
      height: res.windowWidth*660/750,
      colorDark: '#000',
      colorLight: '#ffffff',
      correctLevel: QRCode.correctLevel.H
    });
    this.QR = qrcode;
  },
})
