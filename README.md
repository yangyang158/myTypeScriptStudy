# myTypeScriptStudy
在项目中使用TypeScript

1.校验规则
no-consecutive-blank-lines：不允许有超过2行的空格
max-line-length           : 定义每行代码数
no-empty                  : 函数体不允许空
await-promise             :不允许没有Promise的情况下使用await
no-trailing-whitespace    :尾部空格检测

noImplicitAny:是否可以直接在 TypeScript 中引用JavaScript（无声明文件）的库
member-access:设置成员对象的访问权限（public,private,protect),默认true，render()、函数的前面必须加上public/private/protect
whitespace:决定哪些情况下必须先插入空格。比如check-separator这一项就会要求在初始化数组的时候，相邻元素间不仅要用“,”分隔，还需要在其之后加入空格。

2. webpack 中配置了alias，在 TS 中使用时会出现找不到模块
解决方案：
只需在 tsconfig.json 添加baseUrl和paths的配置即可
https://daief.github.io/2018-09-04/declaration-files-of-typescript.html