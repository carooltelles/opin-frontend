type HexColor = `#${string}`;
type RgbColor = `rgb(${number}, ${number}, ${number})`;

type Color = HexColor | RgbColor;

export interface ISvg {
    color?: Color;
    width?: number;
    height?: number;
}