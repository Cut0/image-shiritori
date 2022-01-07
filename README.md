## 概要

日常から英単語をみつけるアプリケーション(https://image-shiritori.web.app/)

## 構成・使用技術

- [発表スライド](https://docs.google.com/presentation/d/1YBCnewIttyem9TFAOguQTSyC1vojlkJC0VRQBZgGRn8/edit?usp=sharing)を参照

## 開発フロー
- 基本的にdevelopにPRを作成します。PR作成時にCIが走ってプレビュー用のサイトを公開するため確認できたらマージします。
- masterにマージするとFirebase Hosting のCIが走り、自動的に本番環境に公開されます。

## 環境構築

- node(16 系あたり),yarn を利用
- プロジェクトルートに.env ファイルを作成
  ```
  REACT_APP_APIKEY=""
  REACT_APP_AUTHDOMAIN=""
  REACT_APP_PROJECTID=""
  REACT_APP_STORAGEBUCKET=""
  REACT_APP_MESSAGEINGSENDERID=""
  REACT_APP_APPID=""
  ```

## コマンド

- `yarn start`:

  サーバーを立ち上げます。

- `yarn build`:

  ビルドします。

- `yarn test`:

  テストします。(各 Hooks やビジネスロジックに関するテストを書こうと思ったのですが、時間の都合上サボっちゃいました。随時追加する予定です。)

- `yarn eject`:

  CRA の eject 機能です。利用する際には eject ブランチを作成することを推奨します。主に webpack の output 用のファイル名を変更する目的です。課題の提出ファイル名が[学籍番号_名前.html]だったため採用しました。

- `yarn create:user`:

  user のダミーデータを firestore に作成するコマンドです。

## 関連

- [発表スライド](https://docs.google.com/presentation/d/1YBCnewIttyem9TFAOguQTSyC1vojlkJC0VRQBZgGRn8/edit?usp=sharing)

- [デザイン](https://www.figma.com/file/ZyHloAxuB3BgCmiuUafa8T/IMAGE-SHIRITORI?node-id=0%3A1)
