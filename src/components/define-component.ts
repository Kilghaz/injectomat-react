import React, { Attributes, FC, useContext } from 'react';
import { v4 as uuid } from "uuid";

export const ComponentNameContext = React.createContext<any>(() => {});

export const useCurrentInstance = () => {
    return useContext(ComponentNameContext);
}

export const useComponentId = () => {
    return useCurrentInstance().componentId;
}

export const defineComponent = (functionComponent: FC, name: string = uuid()): FC => {
    (functionComponent as any).componentId = name;
    const result = (props: Attributes & { children?: any[] }) => {
        const component = React.createElement(functionComponent, { ...props, key: functionComponent.name }, props.children);
        return React.createElement(ComponentNameContext.Provider, { value: functionComponent }, [component]);
    }
    (result as any).componentId = name;
    return result;
}
