import { Injectable } from '@angular/core';

function _window() :any{
  // return the global native browser windows object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  get nativeWindow() : any {
    return _window();
  }

}
