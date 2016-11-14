# IP

## Installation

```bash
npm install https://github.com/jkom-cloud/ip.git --save
```

## Usage

### As command tool

```bash
$ npm i -g https://github.com/jkom-cloud/ip.git
$ ip
$ 10.0.1.16
```

### As nodejs module

```bash
const ip = require('ip');
ip((err, ip) => {
  console.log(ip);
});
```