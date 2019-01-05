import { Injectable } from '@angular/core';
import {Sort} from '../../../models/tea/sort/Sort';

@Injectable({
  providedIn: 'root'
})
export class SortsService {

  constructor() { }

  getAll(): Sort[] {
    return [
        new Sort(0, 'Black', '../../../../../assets/images/sorts/schwarzer.jpg', ''),
        new Sort(1, 'Green', '../../../../../assets/images/sorts/grüner.jpg', ''),
        new Sort(2, 'Oolong', '../../../../../assets/images/sorts/oolong.jpg', ''),
        new Sort(3, 'Yellow', '../../../../../assets/images/sorts/gelber.jpg', ''),
        new Sort(4, 'White', '../../../../../assets/images/sorts/weisser.jpg', ''),
        new Sort(5, 'Fruit', '../../../../../assets/images/sorts/früchte.jpg', ''),
        new Sort(6, 'Herbs', '../../../../../assets/images/sorts/kräuter.jpg', ''),
        new Sort(7, 'Rooibos', '../../../../../assets/images/sorts/rooibos.jpg', ''),
        new Sort(7, 'Matcha', '../../../../../assets/images/sorts/matcha.jpg', '')
    ];
  }
}
