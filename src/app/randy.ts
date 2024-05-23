export class User {
    private permissions: string[] = []

    constructor(public name: string, public type: string, permissions: string[] ){
        this.permissions = permissions;
    }

    public getPermissions(): string[] {
        return this.permissions;
    }
}
// abstract class iof the documentsmanger
export abstract class DocumentsManager {
    public abstract requestDocuments(requester: User): string 
}

// Concrete REAL DocumentsManager
export class RealDocumentsManager extends DocumentsManager {
private documents = ["Top","secret", "documents"];

public override requestDocuments(requester: User): string {
        return this.documents.join(' ');
}
}
// THA Proxy
export class ProxyDocumentsManager extends DocumentsManager {
    private realDocumentsManager =  new RealDocumentsManager();


public override requestDocuments(requester: User): string {
    if(requester.getPermissions().indexOf('secretDocuments') !== -1){
        return this.realDocumentsManager.requestDocuments(requester);
    }
    return 'PERMISSION DENIED !!!'
}
}


