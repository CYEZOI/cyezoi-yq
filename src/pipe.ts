export class pipe {
    private pipes: { [key: string]: Function[] } = {};

    public listen(key: string, callback: Function) {
        if (!this.pipes[key]) {
            this.pipes[key] = [];
        }
        this.pipes[key].push(callback);
    }

    public emit(key: string, data: any = null) {
        const callbacks = this.pipes[key];
        if (callbacks) {
            callbacks.forEach(callback => callback(data));
        }
    }
}

export const pipeInstance = new pipe();