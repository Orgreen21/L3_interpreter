import {  Exp, Program, parseSExp, parseL31Exp, isProgram, isAppExp, isBoolExp, isDefineExp, isNumExp, isPrimOp, isStrExp, isVarRef, makeDefineExp, makeProgram } from "./L31-ast";
import { Result, makeFailure, bind, makeOk } from "../shared/result";

const myCondExp = bind(parseSExp("(cond (1 1) (else 3))"), parseL31Exp);
console.log(JSON.stringify(myCondExp, null, 2))
/*
Purpose: Transform L31 AST to L3 AST
Signature: l31ToL3(l31AST)
Type: [Exp | Program] => Result<Exp | Program>
*/
export const L31ToL3 = (exp: Exp | Program): Result<Exp | Program> =>
    makeFailure("TODO");


