import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
//import { InMemoryDbService } from 'angular-in-memory-web-api/in-memory-backend.service';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Mr doing001'},
      {id: 2, name: 'Mr doing002'},
      {id: 3, name: 'Mr doing003'},
      {id: 4, name: 'Mr doing004'},
      {id: 5, name: 'Mr doing005'},
      {id: 6, name: 'Mr doing006'},
      {id: 7, name: 'Mr doing007'},
      {id: 8, name: 'Mr doing008'},
      {id: 9, name: 'Mr doing009'},
      {id: 10, name: 'Mr doing0010'}
    ];
    return {heroes};
  }
}
