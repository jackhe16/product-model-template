# Product Model Template

## Prerequisites
* [VSCode](https://code.visualstudio.com/)
* node v12.13.0 +
* yarn 1.19.1 +

## get started
```bash
git clone https://github.com/jackhe16/product-model-template.git
cd product-model-template
yarn
```

## 生成product-model.pdf
```bash
yarn build:pdf
```

## 目标
* 以文档的形式记录产品Model的强类型
* 定义资源术语key, 以及结构关系, 体现了对内(开发前后端, 交互设计, ui设计), 对外(开放api, 介绍产品等), 的一致性

## 语法
* Typescript子集, 只使用了简单语法, 既控制了学习成本, 又保证了后续复杂场景的扩展性
* 关键字: interface, enum, extends, [], ?
* 基本数据类型: string, number, boolean, datetime

## 约定
* 一个type或enum定义对应一个文件, 文件以.d.ts结尾
* [typedoc](https://github.com/TypeStrong/TypeDoc)注释

## 示例
* 见[`src/`](/src)