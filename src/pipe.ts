export class pipe {
    private pipes: { [key: string]: Function } = {};

    public listen(key: string, callback: Function) {
        this.pipes[key] = callback;
    }

    public emit(key: string, data: any = null) {
        this.pipes[key] && this.pipes[key](data);
    }
}

export const pipeInstance = new pipe();