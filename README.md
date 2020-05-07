# Product Model Template

## get started
```bash
git clone https://github.com/jackhe16/product-model-template.git
```

## 生成product-model.pdf
```bash
yarn build:pdf
```

## 目标
* 以文档的形式表现产品的强约定, 强关系
* 定义资源术语key, 以及结构关系, 体现了对内(开发前后端, 交互设计, ui设计), 对外(开放api, 介绍产品等), 的一致性

## 语法
* Typescript子集, 只使用了简单语法, 既控制了学习成本, 又保证了后续复杂场景的扩展性
* 关键字: interface, enum, extends, [], ?
* 基本数据类型: string, number, boolean, datetime

## 约定
* 一个type或enum定义对应一个文件, 文件以.ts结尾
* [typedoc](https://github.com/TypeStrong/TypeDoc)注释
