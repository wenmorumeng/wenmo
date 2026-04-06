# GitHub Pages 部署说明

这份仓库里原本是 `WordPress` 源码，我已经另外在 `docs/` 目录下搭好了一套适合 `GitHub Pages` 的静态博客。

## 你需要上传哪些内容

把整个项目上传到你的 GitHub 仓库即可，真正会被 Pages 发布的是 `docs/` 目录里的内容。

## GitHub 上怎么开启 Pages

1. 新建一个仓库并把当前目录推上去。
2. 打开仓库 `Settings`。
3. 找到 `Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. `Branch` 选择你的主分支，一般是 `main`。
6. 文件夹选择 `/docs`。
7. 保存后等待 GitHub 构建完成。

完成后你的博客地址会类似：

```text
https://你的用户名.github.io/仓库名/
```

如果你以后改成用户名仓库，例如 `yourname.github.io`，站点地址就会变成根域名。

## `_config.yml` 里一定要改的两项

如果你用的是普通项目仓库，例如 `my-blog`：

```yaml
url: "https://你的用户名.github.io"
baseurl: "/my-blog"
```

如果你用的是用户名仓库，例如 `yourname.github.io`：

```yaml
url: "https://yourname.github.io"
baseurl: ""
```

## 第一次上线前建议改的文件

- `docs/_config.yml`
- `docs/_data/navigation.yml`
- `docs/_data/social.yml`
- `docs/assets/images/avatar.svg`
- `docs/assets/images/banner-day.svg`
- `docs/assets/images/banner-night.svg`

## 怎么写新文章

在 `docs/_posts` 里新建文件，格式如下：

```text
2026-04-06-my-post.md
```

文章头部示例：

```yaml
---
title: 我的新文章
date: 2026-04-06 21:00:00 +0800
categories: [文章]
tags: [随笔, 生活]
cover: /assets/images/your-cover.jpg
excerpt: 首页卡片会显示这段摘要。
---
```

## 怎么替换封面和壁纸

1. 把图片放到 `docs/assets/images`。
2. 在文章头部的 `cover` 填对应路径。
3. 在 `docs/_config.yml` 修改 `banner_day` 和 `banner_night`。

## 评论和留言

现在留言板还是静态占位页。如果你后面想接：

- `Giscus`
- `Waline`
- `Cusdis`

我可以继续帮你接上。
