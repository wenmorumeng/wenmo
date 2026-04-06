# GitHub Pages 部署说明

## 推荐部署方式

这个仓库已经按 `docs/` 目录作为站点源来组织，最适合 GitHub Pages 的部署方式是：

1. 将代码推送到 GitHub 仓库
2. 进入仓库 `Settings`
3. 打开 `Pages`
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/docs`
5. 保存后等待 GitHub 构建完成

## 首次上线前建议修改

1. 打开 `docs/_config.yml`
2. 修改以下字段：
   - `title`
   - `description`
   - `url`
   - `author.name`
   - `author.tagline`
   - `author.bio`
   - `author.location`
3. 打开 `docs/_data/social.yml`，换成你的链接
4. 打开 `docs/assets/images/avatar.svg`，替换为你的头像或继续使用当前占位图

当前仓库信息如果对应：

- GitHub 用户名：`wenmorumeng`
- 仓库名：`wenmo`

那么站点地址通常会是：

```text
https://wenmorumeng.github.io/wenmo/
```

## 自定义域名

如果你使用自定义域名，可以在 `docs/` 下新增 `CNAME` 文件，内容为你的域名，例如：

```text
blog.example.com
```

同时记得在 `docs/_config.yml` 中设置：

```yml
url: "https://blog.example.com"
baseurl: ""
```

## 本地调试

如果你希望在本地预览：

```bash
bundle install
bundle exec jekyll serve --source docs
```

## 注意事项

- GitHub Pages 对 Jekyll 插件有白名单限制，所以当前方案尽量避免依赖额外插件
- 文章文件请放在 `docs/_posts/` 下，文件名格式建议为 `YYYY-MM-DD-title.md`
- 如果站点部署在子路径下，请同时调整 `baseurl`
