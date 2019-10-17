// this will cause an error
import { IsEmptyObj } from "redux-starter-kit/dist/tsHelpers";

// this will work, and maybe make people import stuff that is not directly exported by redux-starter-kit/dist/index from the src folder instead
// import { IsEmptyObj } from "redux-starter-kit/src/tsHelpers";

// we will export this type here so babel thinks it is used, but doesn't know if it is a type or concrete value
export { IsEmptyObj };

// webpack will stumble now, as it tries to find a `redux-starter-kit/dist/tsHelpers.ts|tsx|js|jsx|json` that does not exist.
