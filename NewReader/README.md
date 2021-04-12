### Installation instructuction

- Hope you have npm or yarn latest version installed (I personally prefer `yarn` )
- After clone the project , from the root of the project run following command
  - `yarn` or `yarn install` or `npm install`
- After node modules are installed run following command to update the pod
  - `yarn podInstall` or `cd ios && pod install`
- After pod installed successfully , run following command to run in ios or android
  - `yarn ios` or `yarn android`
- To run unit testing run following command
  `yarn test`

### Project structure

- After entry into the project , all the source code are located at `src` directory. Under `src` directory you can find following sub
  - adapters : Glue code from/to Interactors and Presenter
  - components : custom Presenter components
  - containers : screens / Presenter
  - entities : Application independent business rules / structure the data required for the app
  - navigation : App navigations
  - services : Service layer
  - usecases : Application-specific business rules / API call based on rule

### Note the following

- Only few test cases are written
- Some of the UI libaries are used to fasten up the development process
- More error handling scenarios need to add
- Basic typescript added

###End
