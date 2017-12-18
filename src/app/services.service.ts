import {Injectable, Output} from '@angular/core';

@Injectable()
export class ServicesService {

  public leftLists = [
    {
      id: 'left-1',
      name: '这是一条信息'
    },
    {
      id: 'left-2',
      name: '这是一条信息'
    },
    {
      id: 'left-3',
      name: '这是一条信息'
    }
  ];
  public rightLists = [
    {
      id: 'right-1',
      name: '这是一条信息'
    },
    {
      id: 'right-2',
      name: '这是一条信息'
    },
    {
      id: 'right-3',
      name: '这是一条信息'
    }
  ];

  constructor() {
  }


}
