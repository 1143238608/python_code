import wxauto

print(wxauto.VERSION)

wx = wxauto.WeChat()

print(wx.GetSessionList())

msg = '你好~'
who = '文件传输助手'
# wx.SendMsg(msg, who)

print(wx.GetAllFriends())