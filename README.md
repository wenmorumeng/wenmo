# Personal Blog for GitHub Pages

这是一个适合部署在 GitHub Pages 上的极简个人博客，使用 Jekyll 构建，站点源码位于 `docs/` 目录。

## 设计方向

- 极简、克制、留白充足
- 黑白灰为主，搭配低饱和强调色
- 兼顾技术作者的阅读体验与独立开发者主页的个人气质
- 支持深色模式、响应式布局与轻量微交互

## 本地预览

如果本机已安装 Ruby / Bundler / Jekyll，可以在仓库根目录执行：

```bash
bundle install
bundle exec jekyll serve --source docs
```

浏览器访问 `http://127.0.0.1:4000`

## 部署到 GitHub Pages

推荐将 GitHub Pages 的发布源设置为：

- Branch: `main`
- Folder: `/docs`

详细步骤见 [GitHub-Pages部署说明.md](./GitHub-Pages部署说明.md)

## 站点结构

```text
docs/
  _config.yml
  _data/
  _includes/
  _layouts/
  _posts/
  assets/
  about.md
  index.md
  journal.md
```

## 你最可能会改的文件

- `docs/_config.yml`: 站点标题、简介、作者信息
- `docs/_data/social.yml`: 社交链接
- `docs/_data/notes.yml`: 首页状态卡片
- `docs/_posts/`: 博客文章
- `docs/assets/images/avatar.svg`: 头像占位图

