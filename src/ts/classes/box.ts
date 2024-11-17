export class Box<T> {
    left = 0;
    right = 0;
    top = 0;
    bottom = 0;
    data: T;
    get width() {
        return this.right - this.left;
    }
    get height() {
        return this.bottom - this.top;
    }
    touch(x: number, y: number) {
        return this.left <= x && x <= this.right && this.top <= y && y <= this.bottom;
    }
    overlap(left: number, top: number, right: number, bottom: number) {
        return this.right > left && this.left < right && this.bottom > top && this.top < bottom;
    }
    constructor(top: number, bottom: number, left: number, right: number, data: T) {
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.data = data;
    }
}