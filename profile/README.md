# Altifigence

Tools for RTL, chip design and physical simulation. We build **Digital Design
Studio**, including **ALcad**, and publish focused developer tools and integrations.

[Website](https://www.altifigence.com) · [Documentation](https://docs.altifigence.com)
· [한국어 문서](https://docs.altifigence.com/ko-kr/)

## Build a DDS plugin

Start with the [DDS Plugin SDK](https://github.com/Altifigence/dds-plugin-sdk)
and the [developer guide](https://docs.altifigence.com/developers/plugin-sdk/).
Create diagnostics, themes and commands, or connect a workspace with files and
tools in your own WSL, container or server environment.

The SDK is an independent, Apache-2.0 developer package with runnable examples,
typed contracts and tests. Open-source and proprietary plugins can use it under
their own applicable licenses. The SDK is a developer preview; supported APIs and
product availability are documented separately. A plugin's license does not grant
workspace permissions, and the development host is not an OS sandbox.

## Public projects

| Repository | What is available |
| --- | --- |
| [dds-plugin-sdk](https://github.com/Altifigence/dds-plugin-sdk) | Plugin APIs, themes, user-owned workspace host/client, packaging and consent examples |
| [dds-verilator-plugin](https://github.com/Altifigence/dds-verilator-plugin) | Original adapter source preview and bounded lint planning; no bundled Verilator or tool execution |
| [dds-klayout-plugin](https://github.com/Altifigence/dds-klayout-plugin) | Selected KLayout integration source, package validation, upstream source and notices |
| [dds-vscode-plugin](https://github.com/Altifigence/dds-vscode-plugin) | Selected integration for a separately installed VS Code application; no Microsoft binary or VSIX |

See [DDS plugins and external tools](https://docs.altifigence.com/products/digital-design-studio/plugins/)
for product behavior. Use each repository's release, source inventory and license
for its exact scope. These repositories do not publish the entire DDS application
or grant access to Altifigence services, signing systems or private product code.

## Participate

- Follow the project's README and [contribution guide](https://github.com/Altifigence/.github/blob/main/CONTRIBUTING.md).
- Report reproducible bugs or propose a focused feature in the relevant repository.
- Report vulnerabilities privately through the repository's **Security → Report a vulnerability** action; see [security reporting](https://github.com/Altifigence/.github/blob/main/SECURITY.md).
- Share only code, examples and design data you have permission to publish. Never include tokens, private customer designs or restricted PDK material in an issue or pull request.

Third-party product names identify integrations and do not imply endorsement.
