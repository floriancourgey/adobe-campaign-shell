# adobe-campaign-shell

Helpers for Adobe Campaign Shell execCommand

## Installation

Copy the content of [fco:sh.js](https://raw.githubusercontent.com/floriancourgey/adobe-campaign-shell/main/fco%3Ash.js) into a new Javascript Code named `fco:sh`.

## Usage

In a workflow Javascript activity, in a WebApp, etc ; use following code:

```js
loadLibrary('fco:sh');
sh.exec('pwd');
```

Output:
```console
12/02/2020 10:41:49 AM	js	sh.exec: pwd
12/02/2020 10:41:49 AM	js	XSV-350201 Execute the command 'pwd' with user ''.
12/02/2020 10:41:49 AM	js	/usr/local/neolane/nl6/var/your_instance_name
``` 
