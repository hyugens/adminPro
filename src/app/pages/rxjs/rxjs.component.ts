import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObs()
    .subscribe(
      numero => console.log('subs', numero),
      error => console.error('error en el obs', error),
      () => console.log('el observador termino!')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObs(): Observable<any> {
    return new Observable( (observer: Subscriber<any> ) => {
      let contador = 0;
      const intervalo = setInterval( () => {
          contador++;
          const salida = {
            valor: contador
          };

          observer.next(salida);
          if ( contador === 3) {
            clearInterval(intervalo);
            observer.complete();
          }

          // if ( contador === 2) {
          //   // clearInterval(intervalo);
          //   observer.error('Auxilio');
          // }
      }, 1000 );
    }).pipe(
      retry(2),
      map( resp => resp.valor),
      filter( (valor, index) => {
        // tslint:disable-next-line: curly
        if ( (valor % 2) === 1 ) return true;
        return false;
      })
    )
  }

}
