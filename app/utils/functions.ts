

export function ToCssSize(value: number | string) {
   return typeof value === 'number' ? `${value}px` : value;
}