

// types/jquery.slick.d.ts
import * as $ from 'jquery';

declare module 'jquery' {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}
