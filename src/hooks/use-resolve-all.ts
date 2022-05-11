import { Token } from 'injectomat';
import { useInjectionContainer } from './use-injection-container';
import { useReactiveInstance } from './use-reactive-instance';

export const useResolveAll = <T>(token: Token<T>): T[] => {
    const container = useInjectionContainer();
    return container.resolveAll(token)
        .map((it) => useReactiveInstance(it));
};
