/**
 * This script uploads the latest distributable version of the scription2dlx library to the DLx CDN
 */

const { version } = require(`../package.json`);
const path        = require(`path`);

const {
  Aborter,
  BlockBlobURL,
  ContainerURL,
  SharedKeyCredential,
  ServiceURL,
  StorageURL,
  uploadFileToBlockBlob,
} = require(`@azure/storage-blob`);

if (process.env.NODE_ENV === `development`) {
  require(`./credentials.js`); // eslint-disable-line global-require
}

const {
  AZURE_STORAGE_ACCOUNT: account,
  AZURE_STORAGE_KEY: key,
} = process.env;

const containerName = `scripts`;

const uploadOptions = {
  blobHTTPHeaders: {
    blobContentType: `application/javascript`,
  },
};

void async function main() {

  const credential   = new SharedKeyCredential(account, key);
  const pipeline     = StorageURL.newPipeline(credential);
  const url          = `https://${account}.blob.core.windows.net`;
  const serviceURL   = new ServiceURL(url, pipeline);
  const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
  const aborter      = Aborter.none;
  const libraryName  = `scription2dlx`;
  const filePath     = path.join(__dirname, `../${libraryName}.js`);

  function uploadFile(filename) {
    const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, filename);
    return uploadFileToBlockBlob(aborter, filePath, blockBlobURL, uploadOptions);
  }

  const plainName     = `${libraryName}.js`;
  const versionedName = `${libraryName}-${version}.js`;
  const latestName    = `${libraryName}-latest.js`;

  try {

    const latestUpload    = uploadFile(latestName);
    const plainUpload     = uploadFile(plainName);
    const versionedUpload = uploadFile(versionedName);

    await Promise.all([
      latestUpload,
      plainUpload,
      versionedUpload,
    ]);

  } catch (e) {

    console.error(e);

  }

}();
