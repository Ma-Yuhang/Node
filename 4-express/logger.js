const log4js = require("log4js");
const path = require("path");

log4js.configure({
  appenders: {
    api: {
      //定义一个sql日志出口
      type: "dateFile",
      filename: path.resolve(__dirname, "logs", "api", "logging.log"),
      maxLogSize: 1024 * 1024, //配置文件的最大字节数
      keepFileExt: true,
      layout: {
        type: "pattern",
        pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
      },
    },
    default: {
      type: "stdout",
    },
  },
  categories: {
    api: {
      appenders: ["api"], //该分类使用出口api的配置写入日志
      level: "all",
    },
    default: {
      appenders: ["default"],
      level: "all",
    },
  },
});

process.on("exit", () => {
  log4js.shutdown();
});

exports.apiLogger = log4js.getLogger("api")
exports.logger = log4js.getLogger()