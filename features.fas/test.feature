# features/myFeature.feature
Feature: グーグル検索を行ってみるテスト

  Scenario: Googleで Cucumber.js を検索して公式サイトがヒットするかどうか評価する
    Given "https://google.com" を開く
    When "textarea[name=q]" に "Cucumber.js" を入力する
    When "textarea[name=q]" で "Enter" を押して遷移する
    Then スクリーンショットを撮る
    Then ページに "Cucumber.js - Cucumber Documentation" が含まれる


