import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'textShortener'
})
export class TextShortenerPipe implements PipeTransform {
    public transform(text: string, count) {
        return text.slice(0, count) + '...';
    }
}