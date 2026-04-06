# 闻墨如梦：GitHub Pages 发布说明

这个仓库已经整理成适合 GitHub Pages 的静态博客，只需要发布 `docs/` 目录。

## GitHub 上怎么设置

1. 打开仓库 `wenmorumeng/wenmo`
2. 进入 `Settings`
3. 打开 `Pages`
4. 在 `Build and deployment` 中选择 `Deploy from a branch`
5. Branch 选 `main`
6. Folder 选 `/docs`
7. 保存

发布地址会是：

```text
https://wenmorumeng.github.io/wenmo/
```

## 博客身份信息在哪改

- `docs/_config.yml`
- `docs/_data/social.yml`
- `docs/about.md`

## 新文章怎么加

在 `docs/_posts/` 新建文件，命名格式：

```text
YYYY-MM-DD-your-post-name.md
```

头部格式示例：

```yaml
---
title: 文章标题
date: 2026-04-09 20:00:00 +0800
categories: [文章]
tags: [随笔, 记录]
excerpt: 首页卡片摘要会显示这里的内容。
cover: /assets/images/your-cover.jpg
---
```

## 图片怎么换

- 头像：`docs/assets/images/avatar.svg`
- 横幅白天：`docs/assets/images/banner-day.svg`
- 横幅夜间：`docs/assets/images/banner-night.svg`

如果你后面想接留言评论，我可以继续把 `message-board` 页面接成 `Giscus` 或 `Waline`。
