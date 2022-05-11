import { InjectionContainer } from 'injectomat';
import { useContext } from 'react';
import { ModuleContext } from '../components/module.component';

export const useInjectionContainer = (): InjectionContainer => {
    return useContext(ModuleContext).container;
}

