# Polaris React (⚠️ Deprecated)

[![storybook](https://shields.io/badge/storybook-grey?logo=storybook&style=flat)](https://storybook.polaris.shopify.dev) [![npm version](https://img.shields.io/npm/v/@shopify/polaris.svg?label=@shopify/polaris)](https://www.npmjs.com/package/@shopify/polaris) [![CI](https://github.com/shopify/polaris/workflows/CI/badge.svg)](https://github.com/Shopify/polaris/actions?query=branch%3Amain)

The **Shopify Polaris React library** is deprecated.  
We are no longer accepting contributions or feature requests in this repository.

On October 1, 2025, we released our [Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components) for Shopify app development. We encourage Shopify App developers to adopt Polaris Web Components for new development.

This repository will remain available for historical purposes, but it will not receive updates or maintenance.

## Why Web Components?

Polaris Web Components provide a more **technology-agnostic foundation**.  
They work with every framework as well as plain JavaScript and server-rendered sites, enabling more Shopify App developers across more platforms to use Polaris.


## About this repo

The `shopify/polaris` repository is an [intergalactic](https://www.youtube.com/watch?v=qORYO0atB6g) monorepo made up of NPM packages, VSCode extensions, and websites.

```sh
polaris/
├── documentation               # Documentation for working in the monorepo
├── polaris-for-vscode          # VS Code extension for Polaris
├── polaris-icons               # Icons for Polaris
├── polaris-react               # Components for @shopify/polaris package
├── polaris-tokens              # Design tokens for Polaris
├── polaris.shopify.com         # Documentation website
└── stylelint-polaris           # Rules for custom property usage and mainline coverage
```

## Commands

### Install dependencies and build workspaces

```sh
pnpm install && pnpm build
```

### Run a command

**One workspace**

Run commands from a selected workspace using [`turbo run <command> --filter=<workspace>...`](https://turborepo.org/docs/core-concepts/filtering) flag.

| Command                                           | Runs                                 |
| ------------------------------------------------- | ------------------------------------ |
| `pnpm turbo run dev --filter=@shopify/polaris`    | Open the react component storybook   |
| `pnpm turbo run dev --filter=polaris.shopify.com` | Open polaris.shopify.com NextJS site |

**All workspaces**

Run commands across all workspaces. This uses [`turbo run <command>`](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task).

| Command           | Runs                                                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pnpm changeset`  | Adds a new [changelog entry](https://github.com/Shopify/polaris/blob/main/.github/CONTRIBUTING.md#adding-a-changeset) |
| `pnpm lint`       | Lints all workspaces                                                                                                  |
| `pnpm test`       | Tests all workspaces                                                                                                  |
| `pnpm type-check` | Build types and check for type errors                                                                                 |
| `pnpm clean`      | Remove generated files                                                                                                |
| `pnpm format`     | Format files with prettier                                                                                            |

## Contribute to this repo

Pull requests are welcome. See the [contribution guidelines](https://github.com/Shopify/polaris/blob/main/.github/CONTRIBUTING.md) for more information.

## Licenses

Source code is under a [custom license](https://github.com/Shopify/polaris/blob/main/LICENSE.md) based on MIT. The license restricts Polaris usage to applications that integrate or interoperate with Shopify software or services, with additional restrictions for external, stand-alone applications.

All icons and images are licensed under the [Polaris Design Guidelines License Agreement](https://polaris.shopify.com/legal/license)
