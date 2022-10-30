// # TypeScript とは

// 変数 str は string 型を持っているという型注釈 （type annotation）が書かれている
const str: string = "foobar";

// ## 静的型付けの良い点

// - 型安全
// - ドキュメント化

// ## 型安全性

// - コンパイル時に型チェックしコンパイルエラーを発生させる
function repeatHello(count: number): string {
  return "hello".repeat(count);
}

// ↓ここで型エラーが発生
console.log(repeatHello("wow"));

// ↓型エラーが消える
console.log(repeatHello(10));

// ## ドキュメント化と入力補完

// number 型の引数を受け取って string 型の返り値を返す事がわかる
function repeatHello(count: number): string {
  return "hello".repeat(count)
}


