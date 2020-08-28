// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;


//Firebase Admin Setup
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./studioso6b7f3firebaseadminsdk.json");
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://studioso-6b7f3.firebaseio.com"
});

function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    firebaseAdmin.auth().listUsers(1000, nextPageToken)
        .then(function (listUsersResult) {
            listUsersResult.users.forEach(function (userRecord) {
                console.log("user", userRecord.email, userRecord.passwordHash);
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken)
            }
        })
        .catch(function (error) {
            console.log("Error listing users:", error);
        });
}

// Start listing users from the beginning, 1000 at a time.
//listAllUsers();

function deleteAnonymousUsers(nextPageToken) {
    firebaseAdmin
        .auth()
        .listUsers(1000, nextPageToken)
        .then(function (listUsersResult) {
            listUsersResult.users.forEach(function (userRecord) {
                wait(100);
                //if (userRecord.providerData.length = 0) { //this user is anonymous
                console.log("user", userRecord.email, userRecord.passwordHash)
                const email = new String(userRecord.email);
                const passwd = new String(userRecord.passwordHash);
                const isnull = new String("undefined");
                const isEquelE = JSON.stringify(email) === JSON.stringify(isnull);
                const isEquelP = JSON.stringify(passwd) === JSON.stringify(isnull);
                console.log("is anyon ", isEquelE, isEquelP);
                if (isEquelE && isEquelP) { //this user is anonymous
//         console.log(userRecord); // do your delete here
// setTimeout('', 1000);

                    firebaseAdmin.auth().deleteUser(userRecord.uid)
                        .then(function () {
                            console.log("Successfully deleted user");
                            wait(1555);
                        })
                        .catch(function (error) {
                            console.log("Error deleting user:", error);
                        });
                }
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
//        listAllUsers(listUsersResult.pageToken);
                deleteAnonymousUsers(listUsersResult.pageToken);

            }
        })
        .catch(function (error) {
            console.log('Error listing users:', error);
        });
}

deleteAnonymousUsers();
