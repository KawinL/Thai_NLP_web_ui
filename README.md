# Installation

``` 
git clone  https://github.com/KawinL/Thai_NLP_web_ui.git
cd Thai_NLP_web_ui
yarn install
```

# Start server

```
yarn start
```
the server will listening at port 3000


# File Functionality
- `src`
    - `action`
        - Contain all APIs connect to the back-end server
        - Receive parameter from component
        - Transfer data to reducers
    - `componentes`
        - Contain all React component that connect to `App.js`
        - Receive user's input and sent the data to corresponding action
        - Receive processed data from corresponding reducers
    - `reducer`
        - Contain data transformer 
        - Receive data from back-end
        - Transfer data to corresponding component
