import { ReactiveMetadata } from '../metadata/reactive.metadata';
import { ReactiveType } from '../types/reactive.type';
import { useShallowReactive } from './use-shallow-reactive';
import { useDeepReactive } from './use-deep-reactive';

export const useReactiveInstance = (target: any) => {
    const reactiveType = ReactiveMetadata.get(target);

    if (!reactiveType || typeof target !== 'object') {
        return target;
    }

    switch (reactiveType) {
        case ReactiveType.None:
            return target;
        case ReactiveType.Shallow:
            return useShallowReactive(target as never);
        case ReactiveType.Deep:
            return useDeepReactive(target as never);
        default: return useShallowReactive(target as never);
    }
};
