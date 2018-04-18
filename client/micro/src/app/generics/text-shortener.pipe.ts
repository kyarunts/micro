import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'textShortener'
})
export class TextShortenerPipe implements PipeTransform {
    public transform(text: string) {
        return text.slice(0, 240) + '...';
    }
}