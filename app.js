/* npm - global command, comes with node
npm -v

local dependency - use it only in this particular project
npm i <packageName> (you will use this one more)

global dependency- use it in any project 
npm install -g <packagaeName>
sudo npm install -g <packagaeName>(mac) */

/* package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, create properties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default) */
//the npm init creates the package.json file for us to fill in


const _ =require('lodash');

const items = [ 1, [2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);