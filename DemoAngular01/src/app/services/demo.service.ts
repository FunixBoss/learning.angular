import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DemoService {

  constructor() { }

  hello(): string {


    return 'Hello world';
  }

  hi(name: string): string {

    return "Hi " + name + "!";
  }
}
