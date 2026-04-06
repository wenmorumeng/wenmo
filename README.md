# GitHub Pages 静态博客

这个目录原本包含一份 `WordPress` 博客源码。我已经另外整理出一套适合 `GitHub Pages` 的静态博客版本，放在 `docs/` 目录下。

## 仓库里哪些内容会上传

当前 `.gitignore` 已经配置成只跟踪这些内容：

- `docs/`
- `README.md`
- `GitHub-Pages部署说明.md`

这样做的目的是让你的 GitHub 仓库保持干净，只发布真正需要的静态博客文件，不把原始 `WordPress` 程序一起推上去。

## 站点特点

- Argon 风格的左侧栏和卡片文章列表
- 顶部横幅和夜间模式
- Markdown 写作
- 文章目录、归档页、关于页、留言板占位页
- 适合直接部署到 GitHub Pages

## 常改文件

- `docs/_config.yml`
- `docs/_data/navigation.yml`
- `docs/_data/social.yml`
- `docs/_posts/`
- `docs/assets/images/`

## 部署

详细步骤见 `GitHub-Pages部署说明.md`。
