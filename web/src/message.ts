class Message {
    isClient: boolean = false;
    text: string = '';
    attachments: FileList | undefined = undefined;

    constructor(isClient: boolean, text: string, attachments?: FileList) {
        this.isClient = isClient;
        this.text = text;
        this.attachments = attachments;
    }
}

export default Message;