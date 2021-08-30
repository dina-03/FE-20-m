const CONTACT_KEY='CONTACT';

class Store{

    static save(contact){
        return this.getAll().then(res=>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                    res.push(contact);
                    this.updateLocalStorage(res)
                    resolve(res)
                }, 1000)
            })
        })
    }

    static getAll(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    let str=localStorage.getItem(CONTACT_KEY);
                    const contacts=(str)?JSON.parse(str):[]
                    resolve(contacts)
                }, 1300)
            })
    }

    static updateLocalStorage(contacts){
        localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts))
    }

    static remove(index){
        return this.getAll().then(res=>{
            return new Promise(resolve=>{
                setTimeout(()=>{
                    res.splice(index, 1);
                    if(res.length===0){
                        localStorage.removeItem(CONTACT_KEY);
                    }else{
                        this.updateLocalStorage(res)
                    }
                    resolve()
                }, 1000)
            })
        })
    }
}

