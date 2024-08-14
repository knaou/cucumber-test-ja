Feature: 天彩(のあ)のウェブサイトを探索するテスト
  Scenario: 天彩(のあ)の基金募集のページにアクセスして内容を確認する
    Given "https://noah-project.or.jp/" を開く
    Then スクリーンショットを撮る
    When "text=基金募集のお願い" をクリックして遷移する
    Then スクリーンショットを撮る
    Then ページに "基金募集のお願い" が含まれる
