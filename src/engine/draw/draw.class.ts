export class Draw {
    private _canvas: HTMLCanvasElement;
    private _contextInstance: CanvasRenderingContext2D;

    public createStage(): Promise<boolean> {
        return new Promise(resolve => {
            this._canvas = document.createElement('canvas');
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
            this._contextInstance = this._canvas.getContext('2d');
            resolve(document.body.appendChild(this._canvas));
        });
    }

    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    public get context(): CanvasRenderingContext2D {
        return this._contextInstance;
    }
}