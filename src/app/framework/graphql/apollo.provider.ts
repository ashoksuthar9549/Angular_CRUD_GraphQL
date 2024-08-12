import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import {
  ApolloClientOptions,
  from,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../../environments/environment';

const uri = `${environment.apiUrl}`;

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  const authLink = setContext((_, { headers }) => {
    let token = '';
    let accessToken='';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token') || '';
      accessToken = localStorage.getItem('accessToken') || '';
    }

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : `Bearer ${accessToken}`,
      },
    };
  });

  return {
    link: from([authLink, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authLink = setContext((_, { headers }) => {
    let token = '';
    let accessToken='';
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('accessToken') ?? '';
      accessToken = localStorage.getItem('accessToken') ?? '';
    }
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : `Bearer ${accessToken}`,
      },
    };
  });

  const http = httpLink.create({ uri });
  return {
    cache: new InMemoryCache(),
    link: from([authLink, http]),
  };
}
