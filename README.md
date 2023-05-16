## 安裝環境

`Node.js 16.15.0`

`Gulp 4.0.2`

`Tailwind 3.3.2`

## 運行指令

安裝套件
```
$ npm install
```

執行開發模式
```
$ gulp
```

執行編譯模式
```
$ gulp build --env production
```

清除暫存(dist 資料夾)
```
$ gulp clean
```

將 dist 資料夾部屬到 GitHub
```
$ gulp deploy
```

## 資料夾介紹

```
|--gulpfile.js # Gulp 設定
|--source # 輸出資料夾
|--dist # 輸出資料夾
|--postcss.config.js # postcss 設定
|--tailwind.config.js # tailwind 設定
```

## 使用套件

* [gulp](https://github.com/gulpjs/gulp) - 任務管理工具
* [browser-sync](https://github.com/Browsersync/browser-sync) - 瀏覽器同步檢視
* [gulp-babel](https://github.com/babel/gulp-babel) - JavaScript 編譯工具
* [gulp-clean](https://github.com/peter-vilja/gulp-clean) - 刪除檔案或資料夾
* [gulp-clean-css](https://github.com/scniro/gulp-clean-css) - CSS 壓縮
* [gulp-concat](https://github.com/gulp-community/gulp-concat) - 將多個檔案合併為一個
* [gulp-front-matter](https://github.com/shinnn/gulp-front-matter) - 解析檔案中的 front-matter
* [gulp-layout](https://github.com/macoshita/gulp-layout)、[ejs](https://github.com/mde/ejs) - 將 ejs 等樣板語言解析成瀏覽器看的懂的 html
* [gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) - 一鍵部屬到 github
* [gulp-if](https://github.com/robrich/gulp-if) - 在 Gulp 使用判斷式
* [gulp-plumber](https://github.com/floatdrop/gulp-plumber) - 處理例外或抱錯，讓 Gulp 在運行過程中不中斷
* [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) - 標示壓縮、合併後程式碼的原始位置
* [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - JavaScript 壓縮
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - 壓縮圖片
* [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - 使用 $ 簡化載入套件
* [minimist](https://github.com/minimistjs/minimist) - 命令參數解析工具
* [gulp-postcss](https://github.com/postcss/gulp-postcss) - CSS 後處理器
* [autoprefixer](https://github.com/postcss/autoprefixer) - CSS 加上前綴詞
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)、[sass](https://github.com/sass/dart-sass) - CSS 預處理器
* [tailwind](https://github.com/tailwindlabs/tailwindcss) - CSS 框架
* [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) - Tailwind 官方自定義插件
* [flowbite/plugin](https://github.com/themesberg/flowbite) - 利用 Tailwind 構建的 UI 套件

## 參考來源

[六角學院：使用 gulp 進行網頁前端自動化](https://courses.hexschool.com/p/gulp)