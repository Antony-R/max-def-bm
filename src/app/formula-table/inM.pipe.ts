import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'inM'
})

export class MMtoMConverter implements PipeTransform{
    transform(input: number){
        return input / 1000;
    }
}

