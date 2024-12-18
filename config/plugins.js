module.exports = ({ env }) => ({
    "email": {
        "provider": "smtp",
        "providerOptions": {
            "username": "-",
            "password": "-",
            "host": "mailhog",
            "port": 1025,
            "connectionTimeout": 5000
        },
        "settings": {
            "from": "roi@fanucpolska.pl",
            "replyTo": "roi@fanucpolska.pl"
        },
    },
});
