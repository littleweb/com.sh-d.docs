# 云书签

### 添加|编辑

- axios方式

```js
axios.post('/DOCID/mark', {
  id: "id", // 记录ID，唯一性
  name: "名称",
  cover: "封面",
  type: "mark|history", // 书签|记录
  content_type: "news|image|video|music|自定义类型", // 内容类型
  data: {}, // 自定义数据
  uid: "uid" //用户ID
});

```

### 列表

- axios方式

```js
axios.get('/DOCID/list', {
  id: "id", // 记录ID，唯一性
  name: "名称",
  cover: "封面",
  type: "mark|history", // 书签|记录
  content_type: "news|image|video|music|自定义类型", // 内容类型
  data: {}, // 自定义数据
  uid: "uid", //用户ID
  startDate: "开始时间",
  endDate: "结束时间",
  sort: "asc|desc", // 按创建时间排序
});

```

### 删除

- axios方式

```js
axios.post('/DOCID/delete', {
  id: "记录ID"
});

```