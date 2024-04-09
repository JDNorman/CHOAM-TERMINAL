import {createCanvas, registerFont} from "canvas";

registerFont('./fonts/Dune_Rise.ttf', {
    family: 'Dune Rise',
});

export const create2KCanvas = () => {
    const canvas = createCanvas(2000, 2000);
    const context = canvas.getContext('2d');
    context.font = '20px Dune Rise';
    return canvas;
};

export const FONT = 'Dune Rise';