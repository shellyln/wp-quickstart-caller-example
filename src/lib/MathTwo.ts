
import {MathExt} from "webpack-typescript-lib-quickstart";

export class MathTwo {
    public addTwice(x: number, y: number): number {
        const mx = new MathExt();
        return mx.add(x, y) + mx.add(x, y);
    }
}
