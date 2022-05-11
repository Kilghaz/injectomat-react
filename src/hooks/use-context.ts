import { Context } from 'injectomat';
import { useContext } from 'react';
import { ModuleContext } from '../components/module.component';

export const useDIContext = (): Context => {
    return useContext(ModuleContext).context;
}
