module.exports = {
  ignores: [(commit) => commit.includes("ignores")],
  extends: ["@commitlint/config-conventional", "cz"],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", //  修复
        "docs", // 文档变更
        "style", // 代码格式（不影响代码运行的变动）
        "refactor", // 重构（既不是增加feature）,也不是修复bug
        "pref", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退
        "build", // 打包
      ],
    ],
    // subject 大小写不做校验
    "subject-case": [0],
  },
};

// 这是一个 Commitlint 的配置文件，用于定义 Git 提交消息规范的验证规则。

// ignores：

// 这个配置项定义了一个忽略规则，用于忽略某些提交消息不受规范检查的影响。
// 在这个配置中，使用一个箭头函数 (commit) => commit.includes("init") 来定义一个规则，它会忽略包含 "init" 字符串的提交消息，这意味着这些提交消息不会受到后续的规则检查。
// extends：

// 这个配置项指定了要扩展的配置规则集合。
// 在这个配置中，使用了两个扩展规则集合："@commitlint/config-conventional" 和 "cz"。
// "@commitlint/config-conventional" 是一个常见的 Commitlint 规则集合，用于检查符合常见的 Git 提交消息约定，如 "feat:", "fix:", 等。
// "cz" 扩展可能是一个自定义的规则集合，具体规则可能需要查看项目中的配置文件以获取更多信息。
// rules：

// 这个配置项定义了具体的规则和它们的配置。
// 在这个配置中，列出了多个规则，每个规则都有一个名称和一个配置数组。
// 例如，"body-leading-blank" 规则要求在正文（body）和页脚（footer）之间始终存在一个空行，如果不符合这个规则会标记为错误。
// "subject-empty" 规则要求提交消息的主题部分（subject）不应为空，如果为空会标记为错误。
// "type-enum" 规则要求提交消息的类型（type）必须是预定义的一组值，包括 "feat"、"fix"、"perf" 等，如果不在这些值中则标记为错误。
// 其他规则按照类似的方式定义了不同的验证条件
