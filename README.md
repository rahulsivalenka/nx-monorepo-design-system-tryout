# NxMonorepoDesignSystemTryout

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/s4A9fHu5ZL)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve base-app
```

To create a production bundle:

```sh
npx nx build base-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project base-app
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


---
## Commands run

```bash
# Create a new nx workspace with monorepo preset. Skip --package-manager if using npm
npx create-nx-workspace nx-monorepo-design-system-tryout --package-manager=pnpm --preset=react-monorepo

# Add a button component as react library using 
# Can use any project structure for the packages. Ex. instead of libs/components/button we can use packages/components/button or packages/button
# Change options based on your test runner and bundler
nx g @nx/react:library libs/components/button --unitTestRunner=jest --bundler=rollup

# Add storybook to button package
# refer: https://nx.dev/recipes/storybook/overview-react#generate-storybook-configuration-for-a-react-project
nx g @nx/react:storybook-configuration button

# Run storybook for a package
# nx storybook <package-name>
nx storybook button 

# Add a host storybook app which will act as a shell/host for all our stories
# refer: https://nx.dev/recipes/storybook/one-storybook-for-all#generate-a-new-library-that-will-host-our-storybook-instance
nx g @nx/react:library storybook-host --bundler=none --unitTestRunner=none --projectNameAndRootFormat=as-provided

# Configure storybook-host
nx g @nx/storybook:configuration storybook-host --interactionTests=true --uiFramework=@storybook/react-vite

# Run storybook-host
nx storybook storybook-host

# Change an existing package to publishable package
# Not possible directly, should backup the package code before running below:
# Also should remove code that depends of this package
nx g @nx/workspace:remove button

# Create a publishable package
nx g @nx/react:library libs/components/button --unitTestRunner=jest --bundler=rollup --publishable --importPath=@nx-monorepo-design-system-tryout/button
```

## References

- https://blog.nrwl.io/build-your-design-system-with-storybook-nx-e3bde4087ad8
- https://nx.dev/getting-started/tutorials/react-monorepo-tutorial#sharing-code-with-local-libraries
- https://nx.dev/recipes/storybook/overview-react
- https://nx.dev/recipes/storybook/one-storybook-for-all
- https://blog.nrwl.io/publishing-react-libraries-made-easy-d5b3d013deba



https://github.com/Leizhenpeng/zsh-plugin-pnpm