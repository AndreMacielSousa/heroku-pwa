
module.exports = {
    mongodb: {
        uri: 'mongodb+srv://fcabook:fT73qsfEjZ7C@fcabook-jly7a.mongodb.net/test?retryWrites=true&w=majority', 
        //uri: 'mongodb+srv://pwaregex:fT73qsfEjZ7C@cluster0.o28ux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        collections: {
            
            user: 'users',
            user_levels: "user_levels",

            updates: 'updatess_2001506'
        }
    },
    auth: {
        expiration_time: 15000,
        issuer: "FCA"
    },
    sanitize: {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ",
        numerical: "0123456789"
    },
    email: {
        service: "Gmail",
        auth: {
            user: "mailserverpw@gmail.com",
            pass: "ttxirdxzkafhcuel"
        }
    }
}