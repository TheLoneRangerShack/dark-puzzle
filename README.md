A fun little puzzle for Dark nerds.
(And a way for me to teach myself some React.)

## Setup

### bash prep for node

Add these lines to .bash_profile
```
# Nodejs
VERSION=v18.16.1
DISTRO=linux-x64
PATH=~/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
export NODE_OPTIONS='--openssl-legacy-provider'

# If we have node modules in current directory, add them
if [[ -d "./node_modules" ]]; then
        for binary in $(ls -d ./node_modules/*/bin); do PATH="$binary:$PATH"; done;
fi;
```

### .htaccess for redirect
Copy .htaccess from public_html to redirect from port 80 to nextjs's 8081


### install next
`npm i next`

### see running server
`forever list`

`tail -f ~/.forever/forever.log`

`forever start -l forever.log -o out.log -e err.log -c "npm start" ./`

`forever restart -l forever.log -o out.log -e err.log -c "npm start" ./`
