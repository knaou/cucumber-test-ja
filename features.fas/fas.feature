Feature: frame and surface ウェブサイトのページ遷移テスト
  Scenario: frame and surface ウェブサイトでのページ遷移を確認する
    Given "https://fas.co.jp" を開く
    When "text=コンセプト/事業内容" をクリックして遷移する
    When 2.5 秒待つ
    Then スクリーンショットを撮る
    Then ページに "提供中のサービス" が含まれる

