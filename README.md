# react-ngobs
a simple chat applicatoin with react and firebase


## Get started
Before installing on your local machine, go create an account on [Firebase](https://firebase.google.com), after you've created an account, click the create project, then enter the project name, see example below
![firebase project name](https://ik.imagekit.io/mlnzyx/firebase_project_name_TX5yEHHu4?updatedAt=1633300169917)

Follow the next step, and after you've created your project in Firebase, you'll see something like this
![](https://ik.imagekit.io/mlnzyx/image_xtKAN4Dau03.png?updatedAt=1633300614452)

hit the `</>` button and register your app, enter the name, and click register app, after that, copy the ***entire object key and value*** in the `firebaseConfig` constant, see picture below
![](https://ik.imagekit.io/mlnzyx/firebaseConfig_p7_QKi-Qk?updatedAt=1633300718787)

## Installing on your local maching
Clone this repo
```bash
git clone https://github.com/rizkimcitra/react-ngobs .
```

Install all the packages

```bash
npm install
```

after you've copied the firebase config object, create a `.env` file in the root of this project, copy the variable in `.env.example` file and paste it in `.env` file along with your firebase config, and you're ready.