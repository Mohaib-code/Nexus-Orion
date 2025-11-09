// types/chatbase.d.ts

interface ChatbaseFunction {
    (...args: any[]): void;
    q?: any[];
}

declare global {
    interface Window {
        chatbase: ChatbaseFunction;
    }
}

export { };