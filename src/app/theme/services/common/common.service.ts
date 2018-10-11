import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
ifMobile() {
    const width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
    if (width < 768) {
        return true;
    } else {
        return false;
    }
}
}
