# tiqav-angular-frontend

Angular + Materialデザインを使ってtiqavのクライアントを作成する。  

## Demo
https://daikiojm.github.io/tiqav-angular-frontend/search

**注意**: DemoページはGitHubPageにホストしているためhttpsですが、tiqavのAPIがhttpsに対応していないため、  
使用するブラウザによっては混在コンテンツの警告が表示されます。  
※ Google Chromeの場合はアドレスバーに表示される盾マークから混在コンテンツの許可を行うことで閲覧可能です。

## tiqavとは

公式サイト  
http://tiqav.com/
>tiqav / ちくわぶ は、画像会話用画像検索エンジンです。


## API

tiqavのデベロッパーページ  
http://dev.tiqav.com/
>tiqav API Documentation

## 起動・確認

開発サーバーの起動
```
$ npm start
```

Webブラウザから以下のアドレスにアクセス
```
http://localhost:4200
```

## Demoページのデプロイ

デモページのデプロイには、 [angular-cli-ghpages](https://github.com/angular-buch/angular-cli-ghpages) を使った。

ビルド
```
$ ng build -prod --aot=false --base-href '/tiqav-angular-frontend/'
```

GHページへのデプロイ
```
$ angular-cli-ghpages
```

## 参考

画像一覧のスタイリングをGooglePhoto風にする際に、大変参考になった  
https://github.com/xieranmaya/blog/issues/6