import { useDIContext } from './use-context';
import { useComponentId } from '../components/define-component';

export const useModuleId = (): string | undefined => {
    const componentName = useComponentId();
    const context = useDIContext();
    return context.getModuleIdForComponentId(componentName ?? "");
};
