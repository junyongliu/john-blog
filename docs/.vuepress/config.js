module.exports = {
    base: '/john-blog/',
    // 站点配置
    lang: 'zh-CN',
    title: 'johnjy的博客',
    description: '人生有一道难题，那就是如何使一寸光阴等于一寸生命。',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      sidebar: "auto",
      nav: [
        {text: "主页", link: "/"},
        {text: "node", link: "/pages/node/" },
        { 
            text: "前端", 
            items: [
                { text: "html", link:"/pages/html/"},
                { text: "css", link:"/pages/css/"},
                { text: "javascript", link:"/pages/javascript/"}
            ]
        },
        { text: "vue", link: "/pages/vue/"   }
      ],
      sidebar:'auto'
    }
    
}