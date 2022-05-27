# React cookiecutter

[React](https://reactjs.org/) and [MUI](https://mui.com/) project template based on [cookiecutter](https://cookiecutter.readthedocs.io/).

## What's included

- [React Sweet state](https://github.com/atlassian/react-sweet-state)
- [Mui](https://mui.com/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- Automatic snake case to camel case conversion and vice-versa.
- Error handling with interceptors.
- Auto-add `Authorization` header with the user authorization token.

For more project specific details, refer the README inside the project folder.

## How to use

Install cookiecutter and packaging:

```bash
pip install cookiecutter packaging
```

Step into directory you want to create project and generate project with cookiecutter:

```bash
cd /path/to/directory
cookiecutter https://github.com/Ohuru-Tech/react-cookiecutter
```

Answer the questions in wizard.

## Steps after project setup

Install the dependencies:

```bash
yarn install
```

Start building your awesome project!

Run the project via:
```bash
yarn start
```
