import {  Exp, Program } from "./L31-ast";
import { Result, makeFailure } from "../shared/result";

const myCondExp = bind(parseSexp("(cond (1 1) (else 3))"), parseL1Exp);
console.log(JSON.stringify(myCondExp, null, 2))