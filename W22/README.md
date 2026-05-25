# World Cup Firebase Beginner Demo

This folder is a simple introduction to Firebase for beginners using a World Cup prediction app. The demo shows a common app pattern:

1. A fan fills out a World Cup prediction form.
2. The browser saves the data to Firebase.
3. The page updates in real time when the database changes.

The example uses **Cloud Firestore**, Firebase's flexible document database. It does not use GraphQL or a custom backend because Firebase can handle this beginner use case directly from the browser.

## Firebase Use Cases

Firebase is useful when you want to build app features without setting up your own server first.

- **Cloud Firestore:** Store app data such as World Cup predictions, posts, products, tasks, comments, or profiles.
- **Authentication:** Let users sign in with email/password, Google, GitHub, Apple, or other providers.
- **Hosting:** Publish a static website or frontend app.
- **Storage:** Upload images, PDFs, profile photos, or other user files.
- **Realtime Database:** Sync small pieces of data very quickly, such as presence, live scores, or simple multiplayer state.
- **Cloud Functions:** Run backend code when something happens, such as sending an email after a new signup.

For this lesson, Firestore stores each fan's World Cup prediction as a document.

## Files

- `firebaseDemo.html` - The beginner Firebase Web SDK demo.
- `server.js` - A tiny local web server so the page can run at `http://localhost:5000`.
- `package.json` - The npm start script and Express dependency.

## Quick Start

Install dependencies:

```bash
npm install
```

Start the local server:

```bash
npm start
```

Open this URL in your browser:

```text
http://localhost:5000
```

## Firebase Setup

Create a Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add a web app to the project.
4. Copy the Firebase config object.
5. Paste your values into `firebaseConfig` in `firebaseDemo.html`.

Create a Firestore database:

1. In Firebase Console, open **Build > Firestore Database**.
2. Create a database.
3. Choose test mode for a short classroom demo.
4. Choose a location close to your users.

For a short classroom demo, the Firestore rules can allow anyone to read and write:

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

For a production app, do not leave Firestore in test mode or with open rules. These rules are only for learning.

## How The Demo Works

The page imports the Firebase Web SDK directly in the browser:

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
```

When the form is submitted, the app saves a document in the `worldCupPredictions` collection:

```js
await addDoc(predictionsRef, {
  fanName,
  winner,
  reason,
  createdAt: serverTimestamp(),
});
```

The page also listens for database changes:

```js
onSnapshot(messagesQuery, (snapshot) => {
  // Update the list whenever Firestore changes.
});
```

That real-time listener is one of the reasons Firebase is beginner-friendly: students can see new World Cup predictions appear without refreshing the page.

## Classroom Notes

Good beginner discussion questions:

- What part of this example is the frontend?
- What part is Firebase replacing?
- Why does the page need the Firebase config?
- What is a collection?
- What is a document?
- What fields are stored for each World Cup prediction?
- Why should database rules be stricter in a real app?

Suggested next steps:

- Add a delete button for each prediction.
- Add a dropdown of teams instead of a text input.
- Add Firebase Authentication so each prediction has an owner.
- Deploy the page with Firebase Hosting.