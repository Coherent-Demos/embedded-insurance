# coherent-pa-demo

## Suggested Requirements ##
1. NodeJS (v12.22.3)
2. NPM (v6.14.13)
3. NVM (v0.38.0)

## Get started ##
1. `bower install`
2. Install requirements via `npm install`
3. Install global requirements `npm install -g gulp-cli`
4. Run the project `gulp serve`


## With NodeJS v12.x and gulp (local version) v3.x, it gives error "ReferenceError: primordials is not defined". Below solution used
1. Deleted 'node_modules' folder.
2. Downgraded NodeJS with version 11.15.0 using nvm.
