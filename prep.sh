#!/bin/bash
# If we have node modules in current directory, add them
if [[ -d "./node_modules" ]]; then
        for binary in $(ls -d ./node_modules/*/bin); do PATH="$binary:$PATH"; done;
fi;
