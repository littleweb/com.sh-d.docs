# 云用户

## API能力

- 创建用户

```js
axios.post('/DOCID/add', {
  name: "姓名",
  sex: "男", // 汉字
  age: 20, //年龄
});

```
- 更新用户

```js
axios.post('/DOCID/update', {
  id: "用户ID",
  field: "内容" //增量更新
});

```

- 用户列表

```js
axios.get('/DOCID/list', {
  params: {
    query: 'query语法'
  }
});

```

- 用户详情

```js
axios.get('/DOCID/用户ID');

```

- 删除用户

```js
axios.get('/DOCID/delete?id=用户ID');

```