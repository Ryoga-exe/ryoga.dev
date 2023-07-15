---
title: ICPC2023 国内予選参加記
date: '2023-07-15'
description: 'ICPC2023 国内予選に Codestroyer として参加しました'
tags: []
status: 'published'
---

# ICPC2023 国内予選参加記

ICPC2023 国内予選に Codestroyer として出ました。せっかくなので参加記を残しておきます。

## メンバー

- [Noela](https://atcoder.jp/users/Noela)
- [Ryoga\_exe](https://atcoder.jp/users/Ryoga_exe)
- [mkv](https://atcoder.jp/users/mkv)

3 人とも学部 1 年で ICPC 初参加です。

## 開催まで

### チーム名決め

当初 3 人の Highest が青水緑だったので「青水緑社会」にしようと思っていましたが、英語のみなことに気づき結局なくなりました。
mkv が「パズルに苦しむチームにふさわしい名前にして」と ChatGPT に聞いたところ「Code Breakers」が返ってきてこれになりかけました。
Noela が「Codestroyer」という天才的命名を提案してくれたので一瞬でこれになりました。
実際、コードをバグり散らかして☆破壊☆していたのでふさわしいチーム名でした。

余談ですが、ICPC グローバルのサイトの API サーバが落ちていたりしており、遅めのチーム登録になりました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ICPC Codestroyerで出ます！<a href="https://twitter.com/Noela3141592?ref_src=twsrc%5Etfw">@Noela3141592</a> <br>コードを、破壊します<a href="https://twitter.com/mkv01?ref_src=twsrc%5Etfw">@mkv01</a> <br>お茶汲みを、破壊します<a href="https://twitter.com/Ryoga_exe?ref_src=twsrc%5Etfw">@Ryoga_exe</a><br>全てを、破壊します</p>&mdash; Noe(Noela)(Nola)(NolaTA)(任意の名前) (@Noela3141592) <a href="https://twitter.com/Noela3141592/status/1677208936141955072?ref_src=twsrc%5Etfw">July 7, 2023</a></blockquote>

破壊しまくり。

### チーム練習

適当に ICPC 国内予選の過去問のバチャを解きまくりました。
2018 年の問題を 5 完できたりしてかなりいけそうじゃね？みたいな感じでしたが、新しい年の問題になるにつれ難しいかつ実装が激重な問題が多くなりかなり怪しい感じでした。

また、ICPC OB/OG の会による模擬国内の存在を申し込み締め切り日翌日くらいに知り、エーーッッ終わりやみたいな会話をしていました。
実際出れなかったのはかなり悲しかったです。

## コンテスト

### 開始前

私と Noela が 1 限の授業があり、早起きをしました。

11 時過ぎくらいからリハーサルに出ました。チーム全員集まって提出の方法などを確認しました。
それと同時にライブラリの印刷などをしました。

3 人とも 3 限から線形代数の授業がありましたが、全員が休み、みんなで仲良くカレーやラーメンを食べました。
今考えるとかなりやばいです。4 限もありましたが、私以外はちゃんと出ていました。
私は大学の会場で適当に過ごしていました。

15 時過ぎに Noela がコンビニでお菓子などを買ってきてくれて助かりました。コンテスト中の糖分不足これで解決！

コンテスト直前にプリンタの確認などをしました。

<blockquote class="twitter-tweet"><p lang="zxx" dir="ltr"><a href="https://t.co/GoA3sB7CBm">pic.twitter.com/GoA3sB7CBm</a></p>&mdash; Yu (@Yu_212_MC) <a href="https://twitter.com/Yu_212_MC/status/1677212710579355648?ref_src=twsrc%5Etfw">July 7, 2023</a></blockquote>

なぜか tourist が印刷されたりなどしました。

### コンテスト中

コンテスト中の時系列順にやったことをまとめます。

[問題文はこちら](https://icpc.iisf.or.jp/past-icpc/domestic2023/contest/all_ja.html)

#### A

私が考えて実装しました。すぐに提出して AC をもらう。
その間に B, C, D の問題を印刷して Noela と mkv に投げます。

#### B

続けて問題を読んだところ、すぐに実装できそうだったので私が実装をすることに。
その間 mkv が C を、Noela が D を考えていました。

適当な DP を書いたので提出したら WA を食らい泣きました。
さらに、バグっていそうなところを直したコードも WA を食らいかなり終わりでした。

実装自体かなり怪しい感じだったので一度全て書き直しなんとか AC をもぎ取りました。

#### C

私が B をバグり散らかしていた間に C の考察がいい感じに煮詰まっていたので実装ができると言っていた Noela に託します。

その間に E を読みつつ D の考察に参加しました。

書けたらしいので mkv が出力をチェックし、良さげなので提出。しかし WA。

おかしそうなところがあったので私も出力の確認に参加。なんか怪しそうなテストケースを錬成し、落ちるケースを発見。

その後、Noela と mkv の 2 人で確認しつつ実装を進める。その間時間はかかるが D が解けそうであることを私が発見。

なんとか C を通し、D の実装に取り掛かります。

#### D

ある程度実装したところで、Noela が個数が 7 以上の組は枝切りできることを発見し、高速化し、実行。しかしそこそこ実行に時間がかかり泣き。

最適化オプション付けてないことに気づき `-O3` を付けると比較的爆速で出力が進みなんとか 1 つ目のデータセットに対して AC を取る。
2 つ目のデータセットをダウンロードし、実行しようとするも残り 1 分半。やばいやばいと実行するもギリギリで間に合わずタイムアップ…

## 結果と感想

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ICPC<br>3.5完 <a href="https://t.co/KWrG1qLgNa">pic.twitter.com/KWrG1qLgNa</a></p>&mdash; Noe(Noela)(Nola)(NolaTA)(任意の名前) (@Noela3141592) <a href="https://twitter.com/Noela3141592/status/1677265756814454796?ref_src=twsrc%5Etfw">July 7, 2023</a></blockquote>

結果は 3.5 完 (？) でフィニッシュ。かなり悔しい結果となりました。

コンテスト終了後、チームメンバーでごはんを食べに行き、反省を含めいろいろと話しました。私含めチーム全員競技プログラミングに対するモチベーションがかなり上がったようで、来年はアジア地区行くぞ！！と気合いを入れたり、そのためにチーム内での練習を組もうという話をしたりしました。
そのほかには AtCoder 黄色になりてぇ～いやなるぞ！という会話をしたりしました。

なぜか一段と競技プログラミングに対するモチベが上がったしなんだかんだで良かったなと感じました。なんといってもチームでの参加は楽しかったです。来年こそは良い成績を残せるよう頑張ります。
