import { useShallowReactive } from './use-shallow-reactive';
import { isClassInstance } from '../functions/is-class-instance';

export const useDeepReactive = <T extends object>(instance: T): T => {
    const keys = Object.keys(instance);

    keys.forEach((it) => {
        const value = instance[it as keyof T] as any;
        if (!isClassInstance(value)) {
            return;
        }

        Object.assign(instance, {
            [it]: useDeepReactive(value)
        });
    });

    return useShallowReactive(instance);
}
