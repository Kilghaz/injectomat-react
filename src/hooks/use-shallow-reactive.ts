import { useEffect, useState } from 'react';
import { useWatcher } from './use-watcher';
import { Subject, takeUntil } from 'rxjs';

export const useShallowReactive = <T extends object>(instance: T): T => {
    const [, setState] = useState({});
    const watcher = useWatcher();

    useEffect(() => {
        const unmount = new Subject<void>();

        const id = (instance as any).__instanceId

        watcher.onChange(id).pipe(takeUntil(unmount)).subscribe((value) => {
            setState(value);
        });

        return () => {
            unmount.next();
        }
    }, []);

    return instance;
}
