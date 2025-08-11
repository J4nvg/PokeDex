export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval:number){
        this.#interval = interval;
        this.#startReapLoop();
    }

    #reap(){
        for(const [key, obj] of this.#cache.entries()){
            if(obj.createdAt < (Date.now()-this.#interval)){
                this.#cache.delete(key)
            }
        }
    }

#startReapLoop() {
    this.#reap();
    this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
}

    stopReapLoop(){
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }

    add<T>(key:string,val:T){
        const newObj = {
            createdAt: Date.now(),
            val: val,
        }
        this.#cache.set(key,newObj);
    }

    get<T>(key:string){
        const val = this.#cache.get(key);
        if(val){
            return val.val as T;
        }
        return undefined;
    }

    

}

