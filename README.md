A fun little puzzle for Dark nerds.
(And a way for me to teach myself some React.)

## Setup

### Open port
Ports 3000 and 8081 need to be open. In the current setup, I had to open port via root WHM -> configserver security and firewall -> firewall configuration -> TCP IN -> save changes and restart

### bash prep for node

Add these lines to .bash_profile
```
# Nodejs
VERSION=v18.16.1
DISTRO=linux-x64
PATH=~/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
export NODE_OPTIONS='--openssl-legacy-provider'
```

### Add node module binaries to path
From this directory, run:

```
npm prep
```

### .htaccess for redirect
Copy .htaccess from public_html to redirect from port 80 to nextjs's 8081


### install next
`npm i next`

### ops
`forever list`

`tail -f ~/.forever/forever.log`

`npm run dev`

`npm run build`

`forever start -l forever.log -a -o out.log -e err.log -c "npm start" ./`

`forever restart -l forever.log -a -o out.log -e err.log -c "npm start" ./`
