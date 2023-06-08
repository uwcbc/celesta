# Contributing to Celesta
If you haven't already, please read [this project's README](./README.md) to get set up to contribute.

## Contribution Guidelines
As a developer, you will be working off the `develop` branch. You cannot make changes directly to this branch. Instead, for each feature, you will create a branch to work from:
```
git branch branch-name
git switch branch-name
```

Please include the Jira ticket number in your branch name.

Make changes in your feature branch as needed. Then, once you're ready to merge the changes into the `develop` branch, create a pull request and assign reviewers to it. Be sure to describe your changes. Once your pull request is approved by at least one code owner, you can merge it into the `develop` branch, where it will undergo further testing.

## Merging to the main branch
As the `main` branch contains the stable code in the live version of the app, newly developed code is not to be merged directly into `main`. Only once a feature has been thoroughly tested and approved in the `develop` branch will it be merged into `main` via pull request.