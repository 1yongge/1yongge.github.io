var posts=["2024/12/20/hello-world/","2024/12/20/美化Hexo博客，主题安装配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };