import delay from "delay";
import pkg from "delay/package.json";

export default () => {
  console.log(pkg.version, delay);
};
