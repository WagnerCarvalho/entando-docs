# Connect to an External Keycloak Instance

## Purpose

This tutorial enables the Entando administrator to leverage an existing
Keycloak instance.

## Requirements

-   A Keycloak instance

-   A realm named "entando" on that instance

-   An admin user for the "entando" realm

## Steps

### 1. Get keycloak information

Retrieve the relevant information from the Keycloak instance you want to
use.

Specifically you will need:

-   The username of the Keycloak admin that has admin rights to the
    "entando" realm, e.g entando-keycloak-admin

-   The Keycloak admin password, e.g. password123

-   The base url for the Keycloak server, including the auth value, e.g.
    https://your-keycloak-instance.com/auth

### 2. Generate the secret

You now need to generate a secret with name *keycloak-admin-secret*
using the information retrieved from step 1. The Entando administrator
will automatically detect this secret by name, and use it to log onto
the provided Keycloak server.

Here is an example of the secret you will need to construct:

    ---
    apiVersion: v1
    stringData:
        username: #the username of the Keycloak admin user for the "entando" realm
        password: #the password of this Keycloak admin user
        url: #the base url of the Keycloak service, typically ending with the path /auth
    kind: Secret
    metadata
        name: keycloak-admin-secret
        namespace: YOUR-APP-NAMESPACE
    type: Opaque

> **Note**
>
> To encode your values, in bash, you can do
> `echo YOUR-VALUE | base64`

### 3. Upload the secret

Next upload the secret to the namespace where you want to deploy your
Entando instance.

    oc create -f YOUR-SECRET.yaml -n MY-APP-NAMESPACE

### 4. Deploy the Entando application

Now you are ready to deploy your Entando application and the
administrator will reuse the *keycloak-admin-secret* secret to populate
the environment correctly.

## Conclusion

You should now have a working Entando instance using an external
Keycloak server.

