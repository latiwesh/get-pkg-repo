'use strict';

const hostedGitInfo = require(`@latiwesh/hosted-git-info`);
const parseRepositoryURL = require(`@latiwesh/parse-github-repo-url`);

module.exports = packageData => {
  if (!packageData ||
    !packageData.repository ||
    (typeof packageData.repository !== 'string' && !packageData.repository.url)) {
    throw new Error(`No valid "repository" data found in package metadata. Please see https://docs.npmjs.com/files/package.json#repository for proper syntax.`);
  }

  const repositoryURL = typeof packageData.repository === 'string' ? packageData.repository : packageData.repository.url;

  return hostedGitInfo.fromUrl(repositoryURL) || parseRepositoryURL(repositoryURL);
};
