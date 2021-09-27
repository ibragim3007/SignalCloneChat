export interface chatsSection {
    idChat: number,
    login: string,
    image: string,
    lastMessage: string,
    time: string,
    messagesNotRead: number,
}

export interface Imessages {
    idChat: number,
    messageFrom: string,
    messageText: string,
    time: string,
    idMessage: number,
}