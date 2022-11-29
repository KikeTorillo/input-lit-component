# input-lit-component

This is an input component made with lit

![](https://github.com/KikeTorillo/imagenes/blob/main/input-component.png?raw=true)

![](https://github.com/KikeTorillo/imagenes/blob/main/input-component2.png?raw=true)

## How to install

npm install --save git+https://github.com/KikeTorillo/input-lit-component.git

## How to import

it is necesary to import the class which is saves in node modules folder

- import { ListLit } from "list-lit-component/src/list-lit.js"

this web component use a Relative length unit REM so it is necesary to reset de html font size with 62.5%

## How to set the attributes and color in the component

- --input-background: this is the variable to allow change the background color of the input;
- --input-border: this is the variable to allow change the border color of the input;
- --input-text: this is the variable to allow change the color of the input text;
- --input-placeholder: this is the variable to allow change the color of the placeholder;
- placeholder: this is the attribute to allow set the text of the place holder;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        font-size: 62.5%;
      }
      input-lit {
        --input-background: #ffff;
        --input-border: blue;
        --input-text: blue;
        --input-placeholder: gray;
      }
    </style>
  </head>
  <body>
    <input-lit placeholder="search..."></input-lit>
    <script src="./src/input-lit.js" type="module"></script>
  </body>
</html>
```

###End
