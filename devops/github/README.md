# Github CI/CI

- [Github CI/CI](#github-cici)
  - [部屬至Github page](#部屬至github-page)


## 部屬至Github page
- 實作專案 : [stockor-dashboard-web](https://github.com/FLameSunRisE/stockor-dashboard-web)
- 如果是部屬而額外的repo,則必須在路徑前加上repo的名稱
- 設定調整方式
  - ```vite.config.js``` 在<REPO>加上自己的repo名稱
    ```js
    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [vue()],
    build: {
        minify: true,
    },
    resolve: {
        alias: {
        '@': path.resolve(__dirname, './src'),
        },
    },
    base: process.env.NODE_ENV === 'production' ? '/<REPO>/' : './',
    });
    ```
  - 針對<REPO>變數, 透過參數設定自動產生
    - ```package.json```
    ```json
        {
            "name": "...",
            "version": "0.0.0",
            "scripts": {
                "dev": "vite",
                "build": "vite build --base=/<REPO>/",
                "serve": "vite preview"
            },
        }
    ```

- 部屬
    - 參考[官方文件](https://vitejs.dev/guide/static-deploy.html#github-pages)寫法

    ```sh
        #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run build

    # navigate into the build output directory
    cd dist

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git checkout -b main
    git add -A
    git commit -m 'deploy'

    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

    # if you are deploying to https://<USERNAME>.github.io/<REPO>
    # git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

    cd -
    ```