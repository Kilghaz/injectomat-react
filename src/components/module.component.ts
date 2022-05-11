import React, { FC } from "react";
import { Context, InjectionContainer, InstanceManager, Module, ProviderContainer } from 'injectomat';
import { Watcher } from '../watcher';
import { ReactiveInstanceDecorator } from '../instance-decorators/reactive.instance-decorator';

export const ModuleContext = React.createContext({
    container: new InjectionContainer(),
    context: new Context(),
    watcher: new Watcher(),
});

export const ModuleProvider: FC<{ children: any[], module: Module }> = ({ children, module }) => {
    const context = new Context({
        componentIdFactory: (component: any) => {
            return component.componentId ?? component.displayName ?? component.name ?? "";
        }
    });
    const watcher = new Watcher();
    const instanceManager = new InstanceManager([
        ReactiveInstanceDecorator(watcher)
    ]);
    const providerContainer = new ProviderContainer();

    const container = new InjectionContainer(instanceManager, providerContainer, context);
    container.registerRootModule(module);

    return React.createElement(ModuleContext.Provider, {
        value: {
            container,
            context,
            watcher,
        },
    }, children);
}
