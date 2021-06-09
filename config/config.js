module.exports = {
    mongodb: {
        uri: 'mongodb+srv://fcabook:fT73qsfEjZ7C@fcabook-jly7a.mongodb.net/test?retryWrites=true&w=majority', //todo - setup BD mongobd
        collections: {

            user: 'users',
            user_levels: "user_levels",
            versions: 'versions'
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

}