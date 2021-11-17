var app = new Vue({
    el: "#container",
    data: {
        activeChat : 0,
        user : {
            name : 'Nome Utente',
            avatar: 'img/avatar_io.jpg'
        },

        text : '',
        contacts: [ 
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },  
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],   
            },  
           
            {   
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            }, 

            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },

            {   
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }

                ],
            },
        ], 
          
    },

    methods : {
        setActiveChat(index) {
            this.activeChat = index;
        },
        lastAccess(array) {
            let last = '';
            for (let i = 0; i < array.length; i++) {
                if (array[i].status === 'received') {
                   last = array[i].date;
               } 
            }
            return last;
        },
        lastMessage(array) {
            let last = array[array.length - 1].text;
            return last;
        },

        nowDateTime() {
            const now = `${dayjs().date()}/${dayjs().month()}/${dayjs().year()} ${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`;
            console.log(now);
            return now;
        },

        newMessage(chat) {
            const newMessage = {
                date: this.nowDateTime(),
                text: this.text,
                status: 'sent'
            };
            console.log(newMessage);
            chat.push(newMessage);
            this.text = '';
            this.msgReply(chat);
        },

        msgReply(chat) {
            setTimeout(() => {
                const newMessage = {
                    date: this.nowDateTime(),
                    text: 'Ok',
                    status: 'received'
                };
                console.log(newMessage);
                chat.push(newMessage);
            }, 1000);
        },
    },
});