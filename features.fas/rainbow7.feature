Feature: Rainbow7 ウェブサイトのページ遷移テスト
  Scenario: Rainbow7のウェブサイトで適当にページ遷移を2回する
    Given "https://rainbow7.jp/" を開く
    When "text=Service" をクリックして遷移する
    Then スクリーンショットを撮る
    Then ページに "Webサイト制作" が含まれる
    When "text=Inquiry" をクリックして遷移する
    Then スクリーンショットを撮る
    Then ページに "お問い合わせ" が含まれる



