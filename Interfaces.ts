export interface chatsSection {
    idChat: number,
    login: string,
    image: string,
    lastMessage: string,
    time: string,
    messagesNotRead: number
}

export interface Imessages {
    infoAboutChat: {
        idChat: number,
        timeCreatedChat: string,
        countAllMessagesChat: number
    },
    users: {
        whoSended:{
            idUserSended: number,
            loginUserSended: string,
            imageUserWhoSended: string,
        },
        forWhoSended: {
            idUserd: number,
            loginUser: string,
            image: string
        }
    }
    infoContent: {
        contentSended: string,
        timeSended: string,
        idMessage: number
    }
}

export interface IChatInfo {
    idChat: number,
    usersInChat: {
        me: {
            idUser: number,
            loginUser: string,
            avatarUser: string,
            statusUser: boolean, // true === online, false === offline
            lastOnline: string
        },
        other: {
            idUser: number,
            loginUser: number,
            avatarUser: string,
            statusUser: boolean, // true === online, false === offline
            lastOnline: string
        }
    },
}