export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    #reap() {
        for (const [key, obj] of this.#cache.entries()) {
            if (obj.createdAt < (Date.now() - this.#interval)) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        this.#reap();
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
    add(key, val) {
        const newObj = {
            createdAt: Date.now(),
            val: val,
        };
        this.#cache.set(key, newObj);
    }
    get(key) {
        const val = this.#cache.get(key);
        if (val) {
            return val.val;
        }
        return undefined;
    }
}
