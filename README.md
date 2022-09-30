# Webpack5

[Информация о релизе Webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release/)

[Migration Guide](https://webpack.js.org/migrate/5/)

# Домашнее задание к занятию "1. Рабочее окружение"

[![Build status](https://ci.appveyor.com/api/projects/status/2odxirj2dfqcwpco?svg=true)](https://ci.appveyor.com/project/HelgaRoosh/ahj-pb-homework-1-contdepl)

В качестве шаблона для развёртывания использован [проект](https://github.com/netology-code/ahj-code/tree/master/env).

В webpack.common.js добавлена оптимизация
optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
}

В webpack.prod.js добавлено
optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})], //, 
}

Обновлениы следующие пакеты:
webpack
terser-webpack-plugin


Установлены следующие пакеты:
jest (+ написан тест)
core-js

Удален файл package-lock.js 
Использовался yarn - добавлен файл yarn.lock
