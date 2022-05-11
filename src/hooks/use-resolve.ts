import { Token } from 'injectomat/types/token';
import { useInjectionContainer } from './use-injection-container';
import { useModuleId } from './use-module-id';
import { useReactiveInstance } from './use-reactive-instance';

export const useResolve = <T>(token: Token<T>): T => {
    const container = useInjectionContainer();
    const moduleId = useModuleId();
    const resolved = container.resolve(token, moduleId);
    return useReactiveInstance(resolved);
};
