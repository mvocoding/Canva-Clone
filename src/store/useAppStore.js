import { create } from 'zustand';
import { Canvas, Circle, Rect, Control, IText } from 'fabric';

const useAppStore = create((set, get) => ({
    canvas: null,
    setCanvas: canvasInstace => set({ canvas: canvasInstace }),
    resetCanvas: () => {
        const canvas = get().canvas;
        if (canvas) {
            canvas.clear();
            canvas.backgroundColor = '#fff';
            canvas.renderAll();
        }
    },
    downloadCanvas: (fileType = 'png') => {
        const canvas = get().canvas;
        if (canvas) {
            const dataUrl = canvas.toDataURL({ format: fileType });
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `design.${fileType}`;
            link.click();
        }
    },
    draw: (type) => {
        const canvas = get().canvas;
        if (!canvas) return;

        switch (type) {
            case 'rect':
                canvas.add(new Rect({
                    left: 100,
                    top: 100,
                    width: 150,
                    height: 100,
                    fill: '#FF5722',
                }));
                break;

            case 'square':
                canvas.add(new Rect({
                    left: 100,
                    top: 100,
                    width: 100,
                    height: 100,
                    fill: '#3F51B5',
                }));
                break;

            case 'circle':
                canvas.add(new Circle({
                    left: 100,
                    top: 100,
                    radius: 50,
                    fill: '#4CAF50',
                }));
                break;

            case 'normalText':
                canvas.add(new IText('Normal Text', {
                    left: 100,
                    top: 100,
                    fontSize: 16,
                    fontWeight: 'normal',
                    fill: '#333',
                }));
                break;

            case 'headingText':
                canvas.add(new IText('Heading Text', {
                    left: 100,
                    top: 100,
                    fontSize: 32,
                    fontWeight: 'bold',
                    fill: '#000',
                }));
                break;

            case 'subheadingText':
                canvas.add(new IText('Subheading Text', {
                    left: 100,
                    top: 100,
                    fontSize: 24,
                    fontWeight: '600',
                    fill: '#666',
                }));
                break;

            default:
                console.warn('Unknown draw type:', type);
        }

        canvas.requestRenderAll();
    },
    isLoading: true,
    setIsLoading: value => set({ isLoading: value })
}))

export default useAppStore;