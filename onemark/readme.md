# 云收藏

## API能力

### 添加

- axios方式

```js
axios.post('/DOCID/add', {
  name: "名称",
  icon: "图像",
  data: "数据",
  tags: ["标签1", "标签2"]
  uid: "用户ID"
});

```

### 列表

- axios方式

```js
axios.get('/DOCID/list', {
  query: "odoc方式"
});

```

### 删除

- axios方式

```js
axios.post('/DOCID/delete', {
  id: "收藏记录ID"
});

```