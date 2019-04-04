# myTypeScriptStudy
在项目中使用TypeScript

1.校验规则
no-consecutive-blank-lines：不允许有超过2行的空格
max-line-length           : 定义每行代码数
no-empty                  : 函数体不允许空
await-promise             :不允许没有Promise的情况下使用await
noImplicitAny             :是否可以直接在 TypeScript 中引用 JavaScript（无声明文件）的库
2. webpack 中配置了alias，在 TS 中使用时会出现找不到模块
解决方案：
只需在 tsconfig.json 添加baseUrl和paths的配置即可
https://daief.github.io/2018-09-04/declaration-files-of-typescript.html