import {  Exp, Program } from "./L31-ast";
import { Result, makeFailure } from "../shared/result";

const myCondExp = bind(parseSexp("(cond (1 1) (else 3))"), parseL1Exp);
console.log(JSON.stringify(myCondExp, null, 2))
/*
Purpose: Transform L31 AST to L3 AST
Signature: l31ToL3(l31AST)
Type: [Exp | Program] => Result<Exp | Program>
*/
export const L31ToL3 = (exp: Exp | Program): Result<Exp | Program> =>
    makeFailure("TODO");


