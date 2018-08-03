## js领域内对象之间的比较

### 原生的比较方式，基本都是判断值相同，指针指向相同。

### 要定制的方式，才能实现对象之间的内容比较
- `compare_obj_underscore.js`: 用underscore 的 isEqual()
- `compare_obj_mine.js`: 自己实现的 eq()
