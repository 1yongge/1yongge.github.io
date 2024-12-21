var posts=["2024/12/20/anzhiyu安装教程-部署cloudfrla/","2024/12/19/docker教程/","2024/12/19/hexo部署教程/","2024/12/19/nginx教程/","2024/12/19/ubuntu共享文件夹配置/","2024/12/20/ubuntu命令/","2024/12/19/ubuntu常用命令/","2024/12/20/美化Hexo博客，主题安装配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };