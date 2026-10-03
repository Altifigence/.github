# Contributing to Altifigence public projects

Read the target repository's README, license, security policy and supported
versions first. Its own guidance takes precedence over these defaults.

1. Open a focused issue describing the problem, expected behavior and a small
   example you can legally publish. Search existing issues first.
2. Make the change on a branch. Preserve compatibility or clearly explain the
   migration. Add meaningful tests for changed behavior and run the project's checks.
3. Submit a pull request with the resulting behavior, validation and relevant
   license or dependency changes. Keep unrelated changes separate.

Submit only material you own or have permission to contribute under the target
repository's license. Retain copyright, license and attribution notices. Do not
copy private DDS implementation, customer projects, restricted PDKs, credentials,
service configuration or signing material into a public change. New imports from
another codebase need an explicit file-level rights and publication review.

Contributing to an Apache-2.0 repository follows that license's contribution terms
unless separately agreed. Publishing your own independently licensed plugin does
not submit its code to Altifigence. No organization-wide license overrides a
repository or a third-party dependency's terms.

Discuss ideas and code respectfully. Do not post security vulnerabilities publicly;
follow [SECURITY.md](SECURITY.md). A passing check is evidence for its stated scope,
not a guarantee of code safety or compatibility with every DDS release.
