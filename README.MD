# Easy to use

Everything is included in a single module installed with two commands.
```sh
npm install -g testcafe
npm install
```

## Clone the repo

```sh
git clone git@github.com:dbaronov/testcafe-functional-testing.git
```

## Navigate to the dir

```sh
cd testcafe-functional-testing
```

## Run the test

```sh
testcafe chrome,firefox tests/test.js --reporter list --screenshots='reports/screenshots'
```

or just run

```sh
npm run start
```

to use default configuration using package.json