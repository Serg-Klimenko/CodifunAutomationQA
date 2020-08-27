// Before use this example need to execute command 
// 'npm install log4js' in project's root folder
import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || 'debug';

describe("Log", () => {
  test("Test", async () => {
    logger.debug("Some debug message");
    logger.info("Some info message");
    logger.warn("Some warn message");
    logger.error("Some error message");
    logger.fatal("Some fatal message");
  });
});
