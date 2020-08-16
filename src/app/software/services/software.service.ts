import { Injectable } from '@angular/core';
import { AssemblyConverter } from '@app/core/converters';
import { Assembly, AssemblyBase } from '@app/core/models/assembly';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';

export const getSoftwareNames = gql`
  query softwareNames {
    Software {
        name,
        version,
        shortName
    }
  }
`;

export const getSoftwareAssemblies = gql`
  query softwareAssemblies($assemblyId: String!) {
    Assembly(filter: { name: $assemblyId }){
      name,
      shortName,
      isNative,
      version,
      allReferencedAssemblies {
        name,
        shortName,
        isNative,
        version,
      },
      allReferencedAssembliesLinks {source, target}
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private apolloService: Apollo) { }

  names(): Observable<AssemblyBase[]> {
    return this.apolloService.query({ query: getSoftwareNames }).pipe(
      mergeMap((x: any) => x.data.Software),
      map((x: any) => AssemblyConverter.toAssemblyBase<AssemblyBase>(x)),
      toArray()
    );
  }

  software(assemblyId: string): Observable<Assembly> {
    return this.apolloService.query({ query: getSoftwareAssemblies, variables: { assemblyId } }).pipe(
      map((x: any) => x.data.Assembly[0]),
      map((x: any) => AssemblyConverter.toAssembly(x))
    );
  }
}
