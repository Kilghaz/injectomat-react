import { distinctUntilChanged, filter, Observable, Subject } from 'rxjs';

type Change = {
    id: string;
    change: any;
}

export class Watcher {
    private changes = new Subject<Change>();

    notifyChange(instanceId: string, newValue: any): void {
        this.changes.next({
            id: instanceId,
            change: newValue,
        });
    }

    onChange(instanceId: string): Observable<any> {
        return this.changes
            .pipe(distinctUntilChanged())
            .pipe(filter((it) => it.id === instanceId));
    }
}
