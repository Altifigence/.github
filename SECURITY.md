# Security reporting

For a vulnerability in an Altifigence public project, open that repository's
**Security** tab and select **Report a vulnerability**. Repository-specific
security policies and supported-version tables take precedence.

Include the affected repository and version, impact, reproduction steps and a
minimal example you are allowed to share. Redact credentials, customer files and
private designs. Do not put vulnerability details in public issues or pull requests.

If a credential is exposed, revoke or rotate it through its owning service; deleting
a Git commit or public message does not make a credential private again. Do not
test suspected credentials against systems you are not authorized to access.

Public SDKs and integration source do not provide authorization to access hosted
services or private infrastructure. Hashes, signatures and automated scans do not
prove that arbitrary plugin code is safe. Follow the project's host, permission,
isolation and deployment requirements.

This policy does not establish a paid support SLA or a bug-bounty program.
