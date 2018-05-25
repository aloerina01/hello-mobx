// @flow

import React from "react";
import { inject, observer } from "mobx-react";

export default inject("messageStore")(
  observer(({ messageStore }) => <h1>Hello {messageStore.message} !!</h1>)
);
