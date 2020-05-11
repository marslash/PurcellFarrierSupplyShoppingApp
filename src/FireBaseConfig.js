import firebase from 'firebase'

class FireBaseConfig {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCxxzZbhBSVBXi0zR9tGGY-yt-BEUGO2tg",
                authDomain: "pfsshoppingapp.firebaseapp.com",
                databaseURL: "https://pfsshoppingapp.firebaseio.com",
                projectId: "pfsshoppingapp",
                storageBucket: "pfsshoppingapp.appspot.com",
                messagingSenderId: "1035644825380",
                appId: "1:1035644825380:web:e02421aa423ffffa1c0db1",
                measurementId: "G-ZKMJ3G9FCS"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged( user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.foreEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val()
        const { key: _id } = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new FireBaseConfig();