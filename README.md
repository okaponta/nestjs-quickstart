# nestjs-quickstart

こちらの記事を参考に、ちょっとGraphQLとNestJSを触って見ました。
https://zenn.dev/hakushun/articles/7daac74ae9af25

# リクエストサンプル

## find

```
{
  findAll{
    id,
    title,
    status
  }
}
```

## create

```
mutation{
  create(todo: {title:"fuga"}){
    id
  }
}
```

## update

```
mutation{
  update(todo: {
    id:"770ad362-7329-435e-8e5f-cf76894aa0a6",
    status:IN_PROGRESS
  }){
    id
  }
}
```

## delete

```
mutation{
  delete(todo: {
    id:"3f55f9cd-d449-4bb9-bc62-5824b8fb5a74",
  }){
    id
  }
}
```
