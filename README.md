# modularbank-contact-form-sample

![aaaaaaaaa](https://modularbank-contact-form-sample.vercel.app/)

A visually identical sample site on the "Modular Bank" contact page.

## Description

Nice to meet you, my name is Naoki. I made a sample site of the contact page of Modular Bank. Thank you for your confirmation. I tried to use the latest technology as much as possible.

## Demo

Desktop
![](https://user-images.githubusercontent.com/76952055/110594221-34b76600-8185-11eb-954a-ffc91dea11d4.png)

Message Success
![](https://user-images.githubusercontent.com/76952055/110611878-4f470a80-8198-11eb-979f-b31747d0af26.png)

Smartphone

![](https://user-images.githubusercontent.com/76952055/110612320-bebcfa00-8198-11eb-897c-0a88eca96f18.png)

Error - Character count error

![](https://user-images.githubusercontent.com/76952055/110612248-acdb5700-8198-11eb-9b2c-5efc7039e269.png)

Additional validation such as insufficient number of input characters is also implemented.

## Requirement

- React
- NEXT.JS
- TypeScript
- CSS Library(Styled-components)
- Form Package(React-hook-form / React-select)
- Analyzer Package(next/bundle-analyzer)
- Visual Studio Code
- Mac

## Install

```bash
// Homebrew Install
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

// Homebrew Update
$ brew update

// Nodejs Install
$ brew instasll nodejs
```

## Usage

```bash
$ git clone https://github.com/Naoki-Yokoyama-1991/modularbank-contact-form-sample.git
$ cd modularbank-contact-form-sample
$ npm install
$ npm run dev
```

## Technology choice

**NEXT.JS**

- Uses SSG (Static Site Generation) that renders at build time for static page creation. This feature can reduce the download file size when loading each page.
- Performance is better if you generate static resources only once at build time rather than generating static resources for each request
- It is advantageous for SEO because individual HTML is generated for each URL.
- Next.js puts a lot of effort into Zero Config. You don't have to touch webpack settings as much as possible.

**TypeScript**

- Static type check. You can detect some type errors at compile time.
- A given type declaration. Improvement of program code readability.

**Styled-components**

- It is not necessary to import styles not used by taking styles of only rendered components.
- Since Styled-components creates a single class name, it is not necessary to worry about duplicates and spermistics.
- Styled-components can easily find the part to be changed because styling is associated with the component.

**React-hook-form**

- Super lightweight package.
- Accelerate mounting by holding a minimal re-rendering.
- Because the form value is locally managed, it does not depend on the other package.

**React-select**

- Easily produce drop-down menu.
- Customization can be easily done.

**next/bundle-analyzer**

- You can visually check the code in the bundle file.
- Investigate the module bundled in the file and identify the cause of the giant of the JS file.

## Bundle size analysis.

- If you read the drop-down menu data at the timing of building a web application and perform rendering processing, you can realize a high-speed response to the request from the user to return the built HTML. You will be able to deliver content at high speed in the way that placing the HTML file cache to the CDN and returns the cache from her CDN near each user.
- Use "Next / Bundle-Analyzer" to visually check the bundle file code and call only the required language of a huge file.

## Author

- Naoki
- kionako96@gmail.com
