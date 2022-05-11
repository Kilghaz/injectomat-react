import { useContext } from 'react';
import { ModuleContext } from '../components/module.component';
import { Watcher } from '../watcher';

export const useWatcher = (): Watcher => {
    return useContext(ModuleContext).watcher;
}
