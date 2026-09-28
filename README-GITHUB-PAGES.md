# GitHub Pages公開手順

## 1. GitHubへ配置

この `onboarding` フォルダの中身を、GitHubリポジトリのルートへ配置します。

## 2. Supabaseを準備

1. Supabaseでプロジェクトを作成
2. SQL Editorで `supabase-schema.sql` を実行
3. Project URLと公開用anon keyを確認
4. `supabase-config.js` の2項目へ設定
5. AuthのURL設定で、GitHub Pagesの公開URLをSite URLとRedirect URLに登録

`service_role` や `sb_secret` は、GitHub Pagesへ絶対に置かないでください。

## 3. GitHub Pagesを有効化

GitHubリポジトリの Settings → Pages → Deploy from a branch を選択し、mainブランチのrootを公開します。

公開後は `access.html` を入口にし、申請者がメールアドレス・氏名を送信します。

## 4. 管理者が承認

SupabaseのTable Editorで `access_requests` を開き、対象ユーザーの `status` を `approved` に変更します。

承認後、申請者は「承認後のログイン」からメールリンクを受け取り、オンボーディングへ入場します。
