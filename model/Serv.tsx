export class Serv {
    public id:      string;
    public nome:    string;
    public local:   string;
    public tipo:    string;
    public data:    string;

    constructor(obj?: Partial<Serv>){
        if(obj){
            this.id     = obj.id
            this.nome   = obj.nome
            this.local  = obj.local
            this.tipo   = obj.tipo
            this.data   = obj.data
        }
    }

    toString() {
        const objeto = `{
            "id"    :   "${this.id}",
            "nome"  :   "${this.nome}",
            "local" :   "${this.local}",
            "tipo"  :   "${this.tipo}" ,
            "data"  :   "${this.data}"
        }`
        return objeto
    }

    toFirestore(){
        const serv = {
            id      : this.id,
            nome    : this.nome,
            local   : this.local,
            tipo    : this.tipo,
            data    : this.data
        }
        return serv
    }


}
