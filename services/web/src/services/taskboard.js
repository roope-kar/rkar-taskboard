export class TaskboardService {

    constructor() {
        this.subscription;
        this.listeners = {};
    }

    subscribe(taskboard) {
        return new Promise((resolve, reject) => {
            this.subscription = new WebSocket(taskboard);
            this.subscription.addEventListener('open', () => {
                this.subscription.addEventListener('message', event => {
                    this.listeners[event.data.name](event);
                });
                resolve();
            });
            this.subscription.addEventListener('error', reject);
        });
    }

    unsubscribe() {
        return new Promise((resolve) => {
            this.subscription.addEventListener('close', () => {
                this.listeners = {};
                resolve();
            });
            this.subscription.close();
        });
    }

    on(event, callback) {
        this.listeners[event] = callback;
    }

}
