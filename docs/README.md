# Website

This website is built using [Docusaurus 3](https://docusaurus.io/).

Use the Node.js version in the repository's `.nvmrc` and Yarn 1.22.22. Follow the root README to install the pinned Corepack version.

### Dependency updates

Keep the `@docusaurus/*` packages on the same stable version. Run `yarn audit` and `yarn build` after updating this project's independent lockfile.

The scoped Tinypool resolution fixes [the worker-options vulnerability](https://github.com/advisories/GHSA-5gmw-xhrv-c9v3) and [the run-options vulnerability](https://github.com/advisories/GHSA-85c8-ppgw-ccpr). Docusaurus 3.10.2 requires Tinypool 1.x, whose release line has no patched version. Remove the resolution when Docusaurus supports a patched Tinypool release. Validate changes to it with SSG worker threads enabled and at least two workers; the default build disables that path.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
