declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}
declare module '*.mp3' {
    const a: string
    export default a
}
declare module '*.png' {
    const a: string
    export default a
}
declare module '*.ttf' {
    const a: string
    export default a
}
declare module '*.json' {
    const a: object | Array
    export default a
}