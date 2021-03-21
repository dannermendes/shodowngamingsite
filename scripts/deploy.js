const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function deploy() {
  try {
    console.log('Build app... \n');
    const buildExec  = await exec('npm run build');
    console.log(buildExec.stdout);
    console.log('Update S3 bucket... \n')
    const rmExec = await exec('aws s3 rm s3://showdowongaming/ --recursive');
    console.log(rmExec.stdout);
    const cpExec = await exec('aws s3 cp  build s3://showdowongaming/ --recursive');
    console.log(cpExec.stdout);
    console.log('\n Content updated \n visit http://showdowongaming.s3-website.us-east-2.amazonaws.com/')
  }
  catch(e) {
    console.log(e);
  }
}

deploy();