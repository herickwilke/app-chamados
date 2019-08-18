import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Chamado } from '../interfaces/chamado'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {
  private chamadosCollection: AngularFirestoreCollection<Chamado>;

  constructor(private afs: AngularFirestore) {
    this.chamadosCollection = this.afs.collection<Chamado>('Chamados');
  }

  getChamados() {
    return this.chamadosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        }
        )
      })
    )

  }

  addChamado(chamado: Chamado) {
    return this.chamadosCollection.add(chamado);
  }

  getChamado(id: string) {
    return this.chamadosCollection.doc<Chamado>(id).valueChanges();

  }

  updateChamado(id: string, chamado: Chamado) {
    return this.chamadosCollection.doc<Chamado>(id).update(chamado);
  }

  deleteChamado(id: string) {
    return this.chamadosCollection.doc(id).delete();
  }

}
