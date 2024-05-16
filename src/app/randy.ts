export class User {
    private permissions: string[] = []

    constructor(public name: string, public type: string, permissions: string[] ){
        this.permissions = permissions;
    }

    public getPermissions(): string[] {
        return this.permissions;
    }
}


export class DocumentsManager {
private documents = ["Top","secret", "documents"];

public requestDocuments(requester: User): string {
    if(requester.getPermissions().indexOf('secretDocuments') !== -1){
        return this.documents.join(' ');
    }
    return 'PERMISSION DENIED !!!'
}
}

