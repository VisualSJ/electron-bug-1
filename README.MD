# Electron 开发过程遇到的问题

webview 移动的时候，会强制销毁，导致内部数据丢失。

并且这个销毁没有办法终止，webview 内没有办法知道自己即将被销毁。