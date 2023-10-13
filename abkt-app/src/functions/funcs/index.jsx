// Firebase Functionsを使うのに必要なモジュールをインポート
import * as functions from "firebase-functions";

// 上でインポートしたfunctionsが持つメソッドの1つであるHTTPリクエストメソッドを利用
// HTTPリクエストがくると関数が発火する
export const helloWorld = functions.https.onRequest((request, response) => {
  // FirebaseConsole（GUIの管理画面）のFunctionsにログを出力
  // ログについては後程詳しく解説するので、今は無視でOK
  functions.logger.info("Hello logs!", { structuredData: true });
  // response.sendでリクエスト元に値を返す。今回は文字列を返している。
  response.send("Hello from Firebase!");
});