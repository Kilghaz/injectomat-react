import { InstanceDecorator } from 'injectomat';
import { v4 as uuid } from "uuid";
import { Watcher } from '../watcher';

export const ReactiveInstanceDecorator = (watcher: Watcher): InstanceDecorator => (instance: any) => {
    const instanceId = uuid();
    instance.__instanceId = instanceId;

    return new Proxy(instance, {
        get(target: any, prop: string | symbol, receiver: any) {
            return Reflect.get(target, prop, receiver);
        },
        set(target: any, prop: string | symbol, value: unknown) {
            const result = Reflect.set(target, prop, value);
            watcher.notifyChange(instanceId, target);
            return result;
        }
    });
}
