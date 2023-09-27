import childProcess from "child_process";

const args = process.argv.slice(2);
childProcess.exec(`start ${args[0]}`);
